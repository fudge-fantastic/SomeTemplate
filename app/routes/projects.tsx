import ProjectsDisplay from "~/components/ProjectContent";
import Transition from "~/components/transition";

export default function Projects() {
    return (
        <Transition>
            <div className="mx-2 md:mx-6 flex">    
                <ProjectsDisplay />
            </div>
        </Transition>
    );
}