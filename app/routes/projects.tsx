import Transition from "~/components/transition";
import ProjectFilter from "~/components/ProjectSidebar";

export default function Projects() {
    return (
        <Transition>
            <div className="mx-6 flex">    
                {/* <div className="bg-zinc-900 px-5 py-4 rounded-md"> */}
                    <ProjectFilter />
                {/* </div> */}
            </div>
        </Transition>
    );
}