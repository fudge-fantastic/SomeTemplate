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
        "Memory Leak Bandit, lol",
        "Git Grimlin",
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

    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(matchDark.matches);

        const handleChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setIsDarkMode(e.matches);
        matchDark.addEventListener("change", handleChange);

        return () => matchDark.removeEventListener("change", handleChange);
    }, []);

    return (
        <div className="md:flex mx-3 md:mx-6 gap-4 mb-2 h-full">
            <div className="rounded-lg dark:bg-zinc-900 bg-zinc-50 shadow-lg px-4 md:px-5 md:py-3 py-3 pb-4 lg:w-2/3 lg:h-[235px] md:h-[235px] sm:h-[235px]">
                <h2 className="tracking-normal text-[14px] md:text-[16px]">Hello, I&apos;m{" "}
                    <span className="font-semibold md:text-2xl text-lg">Aaditya Pandagle</span>. A part-time human,{" "}
                </h2>
                <h2 className="tracking-normal text-[14px] md:text-[16px] relative">and a full-time{" "}
                    <span className="text-lg md:text-2xl">
                        <FlipWords words={roles} className="font-semibold" />
                    </span>
                </h2>
                <p className="md:text-justify text-xs md:text-sm pt-1 text-justify">A tech enthusiast hailing{" "}
                    <span className="font-semibold dark:text-yellow-300">from Mumbai</span>{" "}but happily stranded{" "}
                    <span className="font-semibold dark:text-yellow-300">in Pune</span>
                    . Armed with a BCA and a shiny PG degree in Data Science and
                    Analytics, I’m basically a glorified spreadsheet wizard who
                    occasionally ventures into AI and breaks it for sport. My
                    curiosity has a knack for leading me astray, think of me as
                    the adventurous coder who&apos;s always one click away from
                    unleashing chaos ⚆ _ ⚆
                </p>
                <a href="/Aaditya_Pandagle_Resume.pdf" download="Aaditya_Pandagle_Resume.pdf">
                    <button className="text-[11px] md:text-sm font-semibold bg-zinc-200 hover:bg-zinc-300 py-2 px-3 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md md:mt-4 mt-3 duration-200">
                        Download Resume
                    </button>
                </a>
            </div>

            {/* Image that changes based on Dark Mode */}
            <img 
                src={isDarkMode ? "/luna.jpg" : "/dog_piano.jpg"} 
                alt="Aaditya Pandagle" 
                className="rounded-lg md:w-1/3 hidden lg:block h-[235px] object-cover scale-x-[-1]"
            />
        </div>
    );
}