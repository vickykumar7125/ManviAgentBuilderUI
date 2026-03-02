import { Bot, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function AgentBuilderPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Agent Builder</h1>
        <p className="text-muted-foreground text-sm">
          Create and configure AI agents with custom instructions and models.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>New Agent</CardTitle>
            <CardDescription>
              Define name, model, and system instructions for your agent.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="agent-name">Agent Name</Label>
              <Input
                id="agent-name"
                placeholder="e.g. Support Bot"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="model">Model</Label>
              <Select>
                <SelectTrigger id="model">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4</SelectItem>
                  <SelectItem value="gpt-35">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="claude-3">Claude 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="instructions">System Instructions</Label>
              <Textarea
                id="instructions"
                placeholder="You are a helpful assistant that..."
                rows={5}
                className="resize-none"
              />
            </div>
            <Button className="w-full sm:w-auto">
              <Plus className="size-4" />
              Create Agent
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Agents</CardTitle>
            <CardDescription>
              Manage and edit existing agents.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground flex flex-col items-center justify-center rounded-lg border border-dashed py-12 text-center text-sm">
              <Bot className="mb-2 size-10 opacity-50" />
              <p>No agents yet. Create your first agent to get started.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
