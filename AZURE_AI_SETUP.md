# Azure AI Agent Chat Integration

This application includes a chat interface that connects to an Azure AI Foundry Agent using the Agent Framework.

## Setup Instructions

### 1. Create an Agent in Azure AI Foundry

1. Go to [Azure AI Foundry](https://ai.azure.com/)
2. Create a new project or use an existing one
3. Navigate to the Agents section
4. Create a new agent with your desired:
   - Model selection (e.g., GPT-4)
   - Instructions/system prompt
   - Tools and capabilities
5. Note down the **Agent ID** (looks like `asst_abc123xyz`)

### 2. Get Your Azure AI Credentials

From your Azure AI Foundry project:
1. Go to Project Settings
2. Copy the **Endpoint URL** (e.g., `https://your-project.cognitiveservices.azure.com/`)
3. Copy the **API Key** from the Keys section

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and fill in your values:
   ```env
   VITE_AZURE_AI_ENDPOINT=https://your-project.cognitiveservices.azure.com/
   VITE_AZURE_AI_API_KEY=your-api-key-here
   VITE_AZURE_AI_AGENT_ID=asst_abc123xyz
   ```

### 4. Run the Application

```bash
npm run dev
```

The application will start, and you'll see a "Chat with Agent" button in the top right corner.

## Features

- **Persistent Conversations**: Messages are maintained within a thread for context
- **Reset Conversation**: Click the reset icon to start a fresh conversation
- **Real-time Responses**: Agent responses stream in as they're generated
- **Error Handling**: Graceful error messages if configuration is missing or API calls fail

## Architecture

### Components

- **ChatButton**: Fixed position button in top right that opens the chat window
- **ChatWindow**: Dialog with chat interface including message history and input
- **azure-agent-service**: Service module that handles Azure AI Agent API communication

### API Flow

1. When chat opens, a new thread is created in Azure AI
2. User messages are added to the thread
3. Agent runs on the thread to generate responses
4. Responses are polled and displayed in the chat interface
5. Thread maintains conversation context across messages

## Troubleshooting

**Error: "Azure AI configuration is missing"**
- Ensure `.env.local` exists and contains all required variables
- Restart the dev server after adding environment variables

**Error: "No response from agent"**
- Check that your Agent ID is correct in Azure AI Foundry
- Verify your API key has permissions to access the agent
- Check the browser console for detailed error messages

**Agent not responding**
- Ensure your Azure AI project has sufficient quota
- Check that the agent is properly configured in Azure AI Foundry
- Verify network connectivity to Azure AI services

## Dependencies

- `@azure/ai-projects`: Official Azure AI Projects SDK
- `@azure/identity`: Azure authentication library
- `@azure/core-auth`: Core authentication primitives

## Security Notes

- Never commit `.env.local` to version control (already in `.gitignore`)
- Rotate API keys regularly
- Use Azure Managed Identity in production environments
- Consider implementing rate limiting for production use
