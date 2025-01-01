import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import {SomeProjects} from "~/shared/projectsData"

export default function TableDemo() {
  return (
    <Table className="text-xs">
      <TableCaption>You&apos;ve reached the bottom.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {SomeProjects.map((project) => (
          <TableRow key={project.name}>
            <TableCell className="font-medium">{project.name}</TableCell>
            <TableCell>{project.status}</TableCell>
            <TableCell>{project.tags}</TableCell>
            <TableCell>{project.description}</TableCell>
            <TableCell><button>{project.link}</button></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell colSpan={2} className="text-right">{SomeProjects.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
