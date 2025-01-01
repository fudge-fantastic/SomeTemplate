import TableDemo from "~/components/ProjectContent";
import Transition from "~/components/transition";

export default function Projects() {
    return (
        <Transition>
            <div className="mx-6 flex">    
                <TableDemo />
            </div>
        </Transition>
    );
}