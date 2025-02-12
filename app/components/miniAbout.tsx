import { Link } from "@remix-run/react";

export default function MiniAbout() {
    return (
        <div className="mx-3 md:mx-6 md:pt-2 pt-1">
            <div className="flex gap-4">
                <img  src="/dog_piano.jpg"  alt="Aaditya Pandagle" className="rounded-lg md:w-2/5 hidden lg:block h-[200px] object-cover"/>
                <div className="md:text-justify text-xs md:text-sm text-justify dark:bg-zinc-900 border bg-zinc-50 border-zinc-950 py-3 px-4 rounded-lg sm:h-[210px] lg:h-[200px] lg:w-3/5">
                        <div>
                            <h2 className="text-xl md:text-2xl font-semibold mb-2">About me :D</h2>
                            A tech enthusiast hailing{" "}
                            <span className="font-semibold dark:text-yellow-300">from Mumbai</span>{" "}but happily stranded{" "}
                            <span className="font-semibold dark:text-yellow-300">in Pune</span>
                            . Armed with a BCA and a shiny PG degree in Data Science and
                            Analytics, I’m basically a glorified spreadsheet wizard who
                            occasionally ventures into AI and breaks it for sport. My
                            curiosity has a knack for leading me astray, think of me as
                            the adventurous coder who&apos;s always one click away from
                            unleashing chaos ⚆ _ ⚆
                        </div>
                        <Link to="/about">
                            <button className="text-[11px] md:text-sm font-semibold bg-zinc-200 hover:bg-zinc-300 py-2 px-3 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-md md:mt-4 mt-3 duration-200">
                                Know More!
                            </button>
                        </Link>
                </div>
            </div>
        </div>
    )

}