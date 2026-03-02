import { Database, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function StoragesPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Storages</h1>
        <p className="text-muted-foreground text-sm">
          Connect and manage storage backends for your data.
        </p>
      </div>
      <div className="flex justify-end">
        <Button>
          <Plus className="size-4" />
          Add Storage
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <div className="bg-muted flex size-10 w-10 items-center justify-center rounded-lg">
              <Database className="size-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-base">Default Storage</CardTitle>
            <CardDescription>Primary storage bucket</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-xs">
              Connected · 2.4 GB used
            </p>
          </CardContent>
        </Card>
        <Card className="border-dashed opacity-80">
          <CardHeader className="pb-2">
            <div className="border-muted-foreground/30 flex size-10 w-10 items-center justify-center rounded-lg border border-dashed">
              <Plus className="size-5 text-muted-foreground" />
            </div>
            <CardTitle className="text-base">Add storage</CardTitle>
            <CardDescription>Connect a new backend</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" size="sm">
              Connect
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
