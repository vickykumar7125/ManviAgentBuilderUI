import { Table2, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DatasetsPage() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Datasets</h1>
        <p className="text-muted-foreground text-sm">
          Upload and manage datasets for training and evaluation.
        </p>
      </div>
      <div className="flex justify-end">
        <Button>
          <Upload className="size-4" />
          Upload Dataset
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Datasets</CardTitle>
          <CardDescription>Your uploaded datasets and their status.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Rows</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="w-[80px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={5} className="text-muted-foreground h-24 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Table2 className="size-8 opacity-50" />
                    <p>No datasets yet. Upload your first dataset.</p>
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
