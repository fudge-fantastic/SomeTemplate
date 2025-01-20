import { FlipWords } from "./ui/flip-words"
// import CodeBlockDemo from "./codeBlock"
// import { ScrollArea } from "./ui/scroll-area"

export default function Hero() {
    const roles = ["Data Scientist", "Machine Learning Engineer", "Deep Learning Engineer",
        "AI/MLOps Engineer", "Potato Debugger", "Script Junkie",
        "Runtime Wrecker", "Memory Leak Bandit, lol", "Git Grimlin"]  

    return (
        <div className="mx-6 gap-4 mb-2">
            <div className="rounded-lg dark:bg-zinc-900 bg-zinc-100 shadow-lg px-7 py-5 mb-4 md:mb-0 flex-1">
                <h2 className="tracking-normal text-[15px]">Hello, I&apos;m <span className="font-semibold text-2xl">Aaditya Pandagle</span>. A part-time human, </h2>
                <h2 className="tracking-normal text-[15px] relative">and a full-time <span className="text-2xl"><FlipWords words={roles} className="font-semibold" /></span></h2>
                <p className="text-justify text-sm pt-3 tracking-wide">A tech enthusiast hailing <span className='font-semibold dark:text-yellow-300'>from Mumbai</span> but happily stranded <span className='font-semibold dark:text-yellow-300'>in Pune</span>.  Armed with a BCA and a shiny PG degree in Data Science and Analytics, I’m basically a glorified spreadsheet wizard who occasionally ventures into AI and breaks it for sport. My curiosity has a knack for leading me astray, think of me as the adventurous coder who&apos;s always one click away from unleashing chaos ⚆ _ ⚆</p>
            </div>
        </div>
    )
}