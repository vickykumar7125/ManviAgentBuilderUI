import { Play, Settings2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function PlaygroundPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Play Ground</h1>
        <p className="text-muted-foreground text-sm">
          Test prompts and models in a sandbox environment.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Prompt</CardTitle>
            <CardDescription>
              Enter your prompt and run against the selected model.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Textarea
              placeholder="Enter your prompt here..."
              rows={8}
              className="resize-none font-mono text-sm"
            />
            <div className="flex flex-wrap items-center gap-2">
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt-4">GPT-4</SelectItem>
                  <SelectItem value="gpt-35">GPT-3.5 Turbo</SelectItem>
                  <SelectItem value="claude-3">Claude 3</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Play className="size-4" />
                Run
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings2 className="size-4" />
              Output
            </CardTitle>
            <CardDescription>
              Response will appear here after you run.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 text-muted-foreground min-h-[200px] rounded-lg border p-4 font-mono text-sm">
              No output yet. Run a prompt to see results.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
