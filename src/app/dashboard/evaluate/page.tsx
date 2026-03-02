import { Gauge, Play } from "lucide-react"
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function EvaluatePage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Evaluate</h1>
        <p className="text-muted-foreground text-sm">
          Run evaluations and compare model performance on your datasets.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>New Evaluation</CardTitle>
          <CardDescription>
            Select an agent and dataset to run an evaluation.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-end gap-4">
          <div className="grid w-full gap-2 sm:max-w-[200px]">
            <label className="text-sm font-medium">Agent</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select agent" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="agent-1">Support Bot</SelectItem>
                <SelectItem value="agent-2">Code Assistant</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid w-full gap-2 sm:max-w-[200px]">
            <label className="text-sm font-medium">Dataset</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select dataset" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ds-1">QA Test Set</SelectItem>
                <SelectItem value="ds-2">Accuracy Bench</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>
            <Play className="size-4" />
            Run Evaluation
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Evaluation Runs</CardTitle>
          <CardDescription>
            History of evaluation runs and metrics.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Run</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Dataset</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} className="text-muted-foreground h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Gauge className="size-8 opacity-50" />
                    <p>No evaluation runs yet.</p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
