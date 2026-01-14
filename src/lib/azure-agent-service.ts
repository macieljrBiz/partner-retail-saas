// Azure AI Foundry Agent Service
// This module handles communication with Azure AI Agent Framework using REST APIs

interface AzureAgentConfig {
  endpoint: string
  apiKey: string
  agentId: string
}

// Load configuration from environment variables
const config: AzureAgentConfig = {
  endpoint: import.meta.env.VITE_AZURE_AI_ENDPOINT || "",
  apiKey: import.meta.env.VITE_AZURE_AI_API_KEY || "",
  agentId: import.meta.env.VITE_AZURE_AI_AGENT_ID || "",
}

// Thread ID for maintaining conversation context
let currentThreadId: string | null = null

interface Thread {
  id: string
  object: string
  created_at: number
  metadata: Record<string, unknown>
}

interface Message {
  id: string
  object: string
  created_at: number
  thread_id: string
  role: string
  content: Array<{
    type: string
    text?: {
      value: string
      annotations: unknown[]
    }
  }>
}

interface Run {
  id: string
  object: string
  created_at: number
  thread_id: string
  assistant_id: string
  status: string
  required_action: unknown | null
  last_error: {
    code: string
    message: string
  } | null
}

interface MessageList {
  object: string
  data: Message[]
  first_id: string
  last_id: string
  has_more: boolean
}

/**
 * Makes an authenticated request to the Azure AI API
 */
async function azureRequest<T>(
  endpoint: string,
  method: string = "GET",
  body?: unknown
): Promise<T> {
  if (!config.endpoint || !config.apiKey) {
    throw new Error(
      "Azure AI configuration is missing. Please set VITE_AZURE_AI_ENDPOINT and VITE_AZURE_AI_API_KEY environment variables."
    )
  }

  const url = `${config.endpoint.replace(/\/$/, "")}${endpoint}`
  
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "api-key": config.apiKey,
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Azure AI API error: ${response.status} ${response.statusText} - ${errorText}`)
  }

  return response.json()
}

/**
 * Sends a message to the Azure AI Agent and returns the response
 * @param message - The user's message
 * @returns The agent's response text
 */
export async function sendMessageToAgent(message: string): Promise<string> {
  if (!config.agentId) {
    throw new Error(
      "Azure AI Agent ID is missing. Please set VITE_AZURE_AI_AGENT_ID environment variable."
    )
  }

  try {
    // Create a thread if we don't have one yet
    if (!currentThreadId) {
      const thread = await azureRequest<Thread>("/openai/threads", "POST", {})
      currentThreadId = thread.id
    }

    // Add the user's message to the thread
    await azureRequest<Message>(
      `/openai/threads/${currentThreadId}/messages`,
      "POST",
      {
        role: "user",
        content: message,
      }
    )

    // Create and run the agent
    let run = await azureRequest<Run>(
      `/openai/threads/${currentThreadId}/runs`,
      "POST",
      {
        assistant_id: config.agentId,
      }
    )

    // Poll for completion
    let attempts = 0
    const maxAttempts = 60 // 60 seconds max
    while (
      (run.status === "queued" || run.status === "in_progress") &&
      attempts < maxAttempts
    ) {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      run = await azureRequest<Run>(
        `/openai/threads/${currentThreadId}/runs/${run.id}`,
        "GET"
      )
      attempts++
    }

    if (run.status === "failed") {
      throw new Error(
        `Agent run failed: ${run.last_error?.message || "Unknown error"}`
      )
    }

    if (run.status !== "completed") {
      throw new Error(`Agent run timed out with status: ${run.status}`)
    }

    // Get the messages from the thread
    const messages = await azureRequest<MessageList>(
      `/openai/threads/${currentThreadId}/messages`,
      "GET"
    )

    // Find the latest assistant message
    const assistantMessages = messages.data.filter((m) => m.role === "assistant")
    if (assistantMessages.length === 0) {
      throw new Error("No response from agent")
    }

    const latestMessage = assistantMessages[0]
    const textContent = latestMessage.content.find((c) => c.type === "text")

    if (!textContent || !textContent.text) {
      throw new Error("No text content in agent response")
    }

    return textContent.text.value
  } catch (error) {
    console.error("Error communicating with Azure AI Agent:", error)
    throw error
  }
}

/**
 * Initialize a chat session with the Azure AI Agent
 * Call this when the chat window opens to start a fresh conversation
 */
export async function initializeChatSession(): Promise<void> {
  try {
    const thread = await azureRequest<Thread>("/openai/threads", "POST", {})
    currentThreadId = thread.id
  } catch (error) {
    console.error("Error initializing chat session:", error)
    currentThreadId = null
  }
}

/**
 * Reset the current conversation thread
 */
export function resetConversation(): void {
  currentThreadId = null
}

/**
 * Validates the Azure AI configuration
 * @returns true if configuration is valid, false otherwise
 */
export function isConfigured(): boolean {
  return !!(config.endpoint && config.apiKey && config.agentId)
}
