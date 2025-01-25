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

    return (
        <div className="mx-2 md:mx-6 gap-4 mb-2">
            <div className="rounded-lg dark:bg-zinc-900 border border-zinc-900 px-4 md:px-7 md:py-5 py-3 pb-4 flex-1">
                <h2 className="tracking-normal text-[14px] md:text-[15px]">
                    Hello, I&apos;m{" "}
                    <span className="font-semibold md:text-2xl text-lg">
                        Aaditya Pandagle
                    </span>
                    . A part-time human,{" "}
                </h2>
                <h2 className="tracking-normal text-[14px] md:text-[15px] relative">
                    and a full-time{" "}
                    <span className="text-lg md:text-2xl">
                        <FlipWords words={roles} className="font-semibold" />
                    </span>
                </h2>
                <p className="md:text-justify text-xs md:text-sm pt-3 text-justify">
                    A tech enthusiast hailing{" "}
                    <span className="font-semibold dark:text-yellow-300">
                        from Mumbai
                    </span>{" "}
                    but happily stranded{" "}
                    <span className="font-semibold dark:text-yellow-300">
                        in Pune
                    </span>
                    . Armed with a BCA and a shiny PG degree in Data Science and
                    Analytics, I’m basically a glorified spreadsheet wizard who
                    occasionally ventures into AI and breaks it for sport. My
                    curiosity has a knack for leading me astray, think of me as
                    the adventurous coder who&apos;s always one click away from
                    unleashing chaos ⚆ _ ⚆
                </p>
            </div>
            {/* <img src="./../../public/old_oil_paint.jpg" alt="birbs" className="rounded-md" /> */}
        </div>
    );
}
