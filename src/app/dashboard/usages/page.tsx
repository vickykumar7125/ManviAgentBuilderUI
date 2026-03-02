import { BarChart3, TrendingUp } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function UsagesPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Usages</h1>
        <p className="text-muted-foreground text-sm">
          Monitor API usage, limits, and consumption.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              API Requests
            </CardTitle>
            <BarChart3 className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12,345</p>
            <p className="text-muted-foreground text-xs">this month</p>
            <Progress value={62} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tokens</CardTitle>
            <TrendingUp className="text-muted-foreground size-4" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2.1M</p>
            <p className="text-muted-foreground text-xs">input + output</p>
            <Progress value={35} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
            <p className="text-muted-foreground text-xs">active</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Storage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2.4 GB</p>
            <p className="text-muted-foreground text-xs">of 10 GB used</p>
            <Progress value={24} className="mt-2" />
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Usage History</CardTitle>
          <CardDescription>
            Daily request volume over the last 30 days.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 flex h-[200px] items-center justify-center rounded-lg border">
            <p className="text-muted-foreground text-sm">
              Chart placeholder — connect analytics to show history.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
