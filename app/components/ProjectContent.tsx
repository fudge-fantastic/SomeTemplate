import { useState } from "react";
import { SomeProjects } from "~/shared/projectsData";
import { Badge } from "./ui/badge";
import { FaLink } from "react-icons/fa";
import { Link } from "@remix-run/react";

export default function ProjectsDisplay() {
  const [searchTerm, setSearchTerm] = useState("");
  const projectContainerStyle = "py-3 px-4 rounded-lg border border-zinc-900 dark:border-zinc-400";

  // Filter projects based on the search term
  const filteredProjects = SomeProjects.filter((project) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      project.name.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="mb-4">
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
          className="text-sm w-full p-2 border rounded-md bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 outline-none"
          placeholder="Search projects by name, description, or tags..."
        />
      </div>
      {/* Projects Display */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
        {filteredProjects.map((project, index) => (
          <div key={index} className={`${projectContainerStyle} relative`}>
            {/* Slow pulse effect in the corner */}
            {project.isLive && (
              <>
                <span className="absolute top-[-5px] right-[-5px] h-3 w-3 rounded-full bg-zinc-900 animate-ping dark:bg-zinc-200"></span>
                <span className="absolute top-[-5px] right-[-5px] h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-200"></span>              
              </>
            )}
            <div className="flex justify-between items-center mb-2">
              <Link to={project.link.github} target="blank" className="flex items-baseline gap-1 hover:underline decoration-[1.3px] underline-offset-2">
                <h2 className="font-semibold text-lg">{project.name}</h2>
                <FaLink className="text-[12px]" />
              </Link>
              <span className="text-xs font-semibold">{project.status}</span>
            </div>
            <p className="text-sm dark:text-zinc-400 line-clamp-5">{project.description}</p>
            <div className="my-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} className="tag mr-2 mb-1 text-white dark:text-black">
                    {tag}
                  </Badge>
                ))}
            </div>
          </div>
          ))}
        </div>


      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div>
          <div className="rotate-90 flex justify-center items-center text-9xl p-8">
            :(
          </div>
          <div className="flex justify-center items-center text-zinc-400">
            No projects found matching &quot;{searchTerm}&quot;.
          </div>
        </div>
      )}
    </div>
  );
}
