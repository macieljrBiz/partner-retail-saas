import { ChatCircle } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"

interface ChatButtonProps {
  onClick: () => void
}

export default function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="default"
      className="fixed top-4 right-6 z-50 shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Open chat"
    >
      <ChatCircle size={20} weight="fill" className="mr-2" />
      Chat with Agent
    </Button>
  )
}
