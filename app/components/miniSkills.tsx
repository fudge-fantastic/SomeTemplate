import { skillsDataObj } from "~/shared/skillsData";

const MiniSkills = () => {
    return (
        <div className="md:mx-6 mx-3">
            <div className="flex items-center gap-2 md:gap-4 my-6 mx-1">
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
                <div className="text-center">
                    <h1 className="text-lg md:text-2xl font-semibold">Technical Skills</h1>
                    <p className="md:text-[13px] text-[10px] dark:text-zinc-400">
                        Somethings I&apos;m good at
                    </p>
                </div>
                <div className="flex-1 border-t border-zinc-900 dark:border-zinc-300"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
                {skillsDataObj.map((skill) => (
                    <div 
                        key={skill.name} 
                        className="hover:scale-105 duration-200 flex flex-col items-center justify-center gap-2 bg-zinc-50 border border-zinc-900 dark:bg-zinc-900 rounded-md w-20 h-20"
                    >
                        <div className="w-9 h-9 flex items-center justify-center">
                            <img 
                                src={skill.src} 
                                alt={skill.name} 
                                className="object-contain w-full h-full" 
                            />
                        </div>
                        <p className="text-[11px] font-semibold text-center truncate">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MiniSkills;
