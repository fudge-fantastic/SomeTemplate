import { skillsDataObj } from "~/shared/skillsData";

const MiniSkills = () => {
    return (
        <div className="md:mx-6 mx-3">
            <div className="flex items-center gap-2 md:gap-4 my-6 mx-1">
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
                <div className="text-center">
                    <h1 className="text-lg md:text-2xl font-semibold">Technical Skills</h1>
                    <p className="md:text-[13px] text-[10px] dark:text-zinc-400">Somethings I&apos;m good at</p>
                </div>
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
            </div>

            {/* Grid Layout with Auto-Fitting Columns & Centering */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] justify-center gap-3">
                {skillsDataObj.map((skill) => (
                    <div 
                        key={skill.name} 
                        className="hover:scale-110 duration-200 flex p-3 w-22 h-22 flex-col items-center gap-2 justify-center bg-zinc-50 border border-zinc-900 dark:bg-zinc-900 rounded-md"
                    >
                        <img src={skill.src} alt={skill.name} className="w-10 h-10" />
                        <p className="text-xs font-semibold text-center">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MiniSkills;
