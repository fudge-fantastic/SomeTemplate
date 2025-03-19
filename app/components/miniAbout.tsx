import { Link } from "@remix-run/react";
import { useState } from "react";

export default function MiniAbout() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="mx-3 md:mx-6 pt-2">
            <div className="flex gap-4">
                <img
                    src="/dog_piano.jpg"
                    alt="Aaditya Pandagle"
                    className="rounded-lg md:w-2/5 hidden lg:block h-[210px] object-cover"
                />
                <div className="md:text-justify text-xs md:text-sm text-justify dark:bg-zinc-900 border bg-zinc-50 border-zinc-950 py-3 px-4 rounded-lg lg:w-3/5">
                    <div>
                        <div className="text-xl md:text-2xl font-semibold mb-2 flex items-center gap-1">
                            <Link to="/about" className="hover:underline underline-offset-2 " >
                                About me
                            </Link>
                            <Link to="/about"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {isHovered ? <div className="text-3xl">😀</div> : <div className="text-3xl">🙂</div>}
                            </Link>
                        </div>
                        A tech enthusiast hailing{" "}
                        <span className="font-semibold dark:text-yellow-300">from Mumbai</span>{" "}but happily stranded{" "}
                        <span className="font-semibold dark:text-yellow-300">in Pune</span>.
                        Armed with a BCA and a shiny PG degree in Data Science and
                        Analytics, I’m basically a glorified tech wizard who
                        occasionally ventures into AI and breaks it for sport. My
                        curiosity has a knack for leading me astray, think of me as
                        the adventurous coder who&apos;s always one click away from
                        unleashing chaos ⚆ _ ⚆
                        <br /><br /><br />
                        <span className="font-semibold">You can explore my lore by clicking on the blud who&apos;s smiling or the &apos;About Me&apos;.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
