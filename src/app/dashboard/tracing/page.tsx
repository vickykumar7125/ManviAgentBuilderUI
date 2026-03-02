import { Route, Filter } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function TracingPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Tracing</h1>
        <p className="text-muted-foreground text-sm">
          Inspect request traces, spans, and latency for debugging.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Input
          placeholder="Search traces..."
          className="max-w-sm"
        />
        <div className="text-muted-foreground flex items-center gap-1 text-sm">
          <Filter className="size-4" />
          <span>Filters</span>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Trace List</CardTitle>
          <CardDescription>
            Recent traces with duration and status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Trace ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} className="text-muted-foreground h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Route className="size-8 opacity-50" />
                    <p>No traces yet. Traces will appear as you make requests.</p>
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
