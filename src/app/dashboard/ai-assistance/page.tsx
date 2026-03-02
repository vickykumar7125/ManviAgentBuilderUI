import { Sparkles, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

export default function AIAssistancePage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">AI Assistance</h1>
        <p className="text-muted-foreground text-sm">
          Get help from AI for writing, analysis, and code.
        </p>
      </div>
      <Card className="flex flex-1 flex-col">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="size-5" />
            Assistant
          </CardTitle>
          <CardDescription>
            Ask a question or describe what you need help with.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <div className="bg-muted/50 flex min-h-[200px] flex-1 flex-col items-center justify-center rounded-lg border p-6">
            <Sparkles className="text-muted-foreground mb-2 size-10 opacity-50" />
            <p className="text-muted-foreground text-center text-sm">
              Your conversation will appear here. Start by typing below.
            </p>
          </div>
          <div className="flex gap-2">
            <Textarea
              placeholder="Type your message..."
              rows={2}
              className="min-h-[80px] resize-none"
            />
            <Button size="icon" className="shrink-0 self-end">
              <Send className="size-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
