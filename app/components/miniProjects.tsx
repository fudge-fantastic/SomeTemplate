import { SomeProjects } from "~/shared/projectsData";
import { Badge } from "./ui/badge";
import { FaLink } from "react-icons/fa";
import { Link } from "@remix-run/react";

export default function MiniProjects() {
    const projectContainerStyle = "py-3 px-4 rounded-lg border border-zinc-900 dark:bg-zinc-900";

    // Filter only featured projects
    const featuredProjects = SomeProjects.filter(project => project.featured);

    return (
        <div className="md:mx-6 mx-3">
            <div className="flex items-center gap-2 md:gap-4 my-6 mx-1">
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
                <div className="text-center ">
                    <h1 className="text-lg md:text-2xl font-semibold">Featured Projects!</h1>
                    <Link to="/projects" className="md:text-[13px] text-[10px]"><p className="hover:underline hover:underline-offset-2 dark:text-zinc-400">Check out the entire list of projects</p></Link>
                </div>
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 relative">
                {featuredProjects.map((project, index) => (
                    <div key={index} className={`${projectContainerStyle} relative`}>
                        {/* Live Indicator */}
                        {project.isLive && (
                            <>
                                <span className="absolute top-[-5px] right-[-5px] h-3 w-3 rounded-full bg-zinc-900 animate-ping dark:bg-zinc-200"></span>
                                <span className="absolute top-[-5px] right-[-5px] h-3 w-3 rounded-full bg-zinc-900 dark:bg-zinc-200"></span>
                            </>
                        )}

                        {/* Project Name & GitHub Link */}
                        <div className="flex justify-between items-center mb-2">
                            <Link to={project.link.github} className="flex items-baseline gap-1 hover:underline decoration-[1.3px] underline-offset-2">
                                <h2 className="font-semibold text-[17px] md:text-lg">{project.name}</h2>
                                <FaLink className="text-[10px] md:text-[12px]" />
                            </Link>
                            <span className="text-xs font-semibold">{project.status}</span>
                        </div>

                        {/* Project Description */}
                        <p className="md:text-sm text-xs dark:text-zinc-400 line-clamp-5">{project.description}</p>

                        {/* Tags */}
                        <div className="my-2">
                            {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} className="tag mr-2 mb-1 text-white dark:text-black text-[11px] md:text-xs">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* No Featured Projects Message */}
            {featuredProjects.length === 0 && (
                <div className="text-center text-zinc-400 mt-4">
                    No featured projects available.
                </div>
            )}
        </div>
    );
}
