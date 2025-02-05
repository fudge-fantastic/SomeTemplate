/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FlipWords } from "./ui/flip-words";

export default function Hero() {
    const roles4pc = [
        "Data Scientist",
        "Machine Learning Engineer",
        "Deep Learning Engineer",
        "AI/MLOps Engineer",
        "Potato Debugger",
        "Script Junkie",
        "Runtime Wrecker",
        "Full Stack Data Scientist",
        "Memory Leak Bandit, lol",
        "Git Grimlin",
        "Full-Stack Developer"
    ];

    const roles4mob = [
        "Data Scientist",
        "AI/MLOps Eng.",
        "Potato Debugger",
        "Script Junkie",
        "Runtime Wrecker",
        "Git Grimlin",
    ];

    const [roles, setRoles] = useState(roles4pc);
    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                setRoles(roles4mob); 
            } else {
                setRoles(roles4pc);
            }
        };

        handleResize(); // Initialize roles based on current screen size
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup event listener
        };
    }, []);

    return (
        <div className="md:flex mx-3 md:mx-6 gap-4 mb-2 h-full">
            <div className="rounded-lg dark:bg-zinc-900 border bg-zinc-50 border-zinc-950 px-4 md:px-5 md:py-4 py-3 pb-4 lg:w-3/5 lg:h-[220px] md:h-[220px] sm:h-[235px]">
                <h2 className="tracking-normal text-[14px] md:text-[16px]">Hello <span className="text-xl">👋</span>, I&apos;m{" "}
                    <span className="font-semibold md:text-[26px] text-lg px-1">Aaditya Pandagle.</span> A part-time human,{" "}
                </h2>
                <h2 className="tracking-normal text-[14px] md:text-[16px] relative">and a full-time{" "}
                    <span className="text-lg md:text-[26px] px-1">
                        <FlipWords words={roles} className="font-semibold" />
                    </span>
                </h2>
                <p className="md:text-justify text-xs md:text-sm pt-3 text-justify">
                    A full-stack data scientist who spends most of my time buried in code, bouncing between projects, and constantly learning something new while letting others collect digital dust 😬. From building full-stack solutions to diving deep into AI, I thrive into breaking things just to make them work even better. 🚀
                </p>
                <a href="/Aaditya_Pandagle_Resume.pdf" download="Aaditya_Pandagle_Resume.pdf">
                    <button className="text-[11px] md:text-sm font-semibold bg-zinc-200 hover:bg-zinc-300 py-2 px-3 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md md:mt-4 mt-3 duration-200">
                        Download Resume
                    </button>
                </a>
            </div>

            {/* Image that changes based on Dark Mode */}
            <img 
                src="/dog_piano.jpg" 
                alt="Aaditya Pandagle" 
                className="rounded-lg md:w-2/5 hidden lg:block h-[220px] object-cover scale-x-[-1]"
            />
        </div>
    );
}