import { FlipWords } from "./ui/flip-words"
import CodeBlockDemo from "./codeBlock"
import { ScrollArea } from "./ui/scroll-area"

export default function Hero() {
    const roles = ["Data Scientist", "Machine Learning Engineer", "Deep Learning Engineer",
        "AI/MLOps Engineer", "Potato Debugger", "Script Junkie",
        "Runtime Wrecker", "Memory Leak Bandit, lol", "Git Grimlin"]  

    return (
        <div className="mx-6 gap-4 mb-2 md:flex md:h-[78vh]">
            <div className="md:flex flex-col gap-4 w-full md:w-1/2">
                <div className="rounded-lg dark:bg-zinc-900 bg-zinc-100 shadow-lg px-7 py-5 mb-4 md:mb-0 flex-1">
                    <h2 className="tracking-normal text-[15px]">Hello, I&apos;m <span className="font-semibold text-2xl">Aaditya Pandagle</span>. A part-time human, </h2>
                    <h2 className="tracking-normal text-[15px] relative">and a full-time <span className="text-2xl"><FlipWords words={roles} className="font-semibold" /></span></h2>
                    <p className="text-justify text-sm pt-3 tracking-wide">A tech enthusiast hailing <span className='font-semibold dark:text-yellow-300'>from Mumbai</span> but happily stranded <span className='font-semibold dark:text-yellow-300'>in Pune</span>.  Armed with a BCA and a shiny PG degree in Data Science and Analytics, I’m basically a glorified spreadsheet wizard who occasionally ventures into AI and breaks it for sport. My curiosity has a knack for leading me astray, think of me as the adventurous coder who&apos;s always one click away from unleashing chaos ⚆ _ ⚆</p>
                </div>
                <div className="rounded-lg dark:bg-zinc-900 bg-zinc-100 shadow-lg px-7 py-5 mb-4 md:mb-0 flex-1">
                    <h2 className="tracking-normal text-[15px]">Hello, I&apos;m <span className="font-semibold text-2xl">Aaditya Pandagle</span>. A part-time human, </h2>
                    <h2 className="tracking-normal text-[15px] relative">and a full-time <span className="text-2xl"><FlipWords words={roles} className="font-semibold" /></span></h2>
                    <p className="text-justify text-sm pt-3 tracking-wide">A tech enthusiast hailing <span className='font-semibold dark:text-yellow-300'>from Mumbai</span> but happily stranded <span className='font-semibold dark:text-yellow-300'>in Pune</span>.  Armed with a BCA and a shiny PG degree in Data Science and Analytics, I’m basically a glorified spreadsheet wizard who occasionally ventures into AI and breaks it for sport. My curiosity has a knack for leading me astray, think of me as the adventurous coder who&apos;s always one click away from unleashing chaos ⚆ _ ⚆</p>
                </div>
            </div>    
            <ScrollArea className="w-full md:w-1/2 bg-zinc-900 dark:bg-zinc-900 overflow-auto mb-4 md:mb-0 md:h-[78vh] rounded-md ">
                <CodeBlockDemo code={code} language="jsx" />
            </ScrollArea>        
        </div>
    )
}

const code = `
// Personal deets
lit age be 22 rn
lit alias be ["Bluesalt", "fudge_fantastic", "Aaditya Pandagle"] rn
lit skills be clapback("ls --cool-skills") rn // Fetch from the system 😎
lit occupation be "Full-Stack Data Scientist" rn

// Dark Arts: Variables meeting their true purpose
lit essence: object be {
    age,
    alias,
    skills,
    occupation,
    vibes: ["chaotic", "curious", "adventurous"]
} rn

// Debugging: A necessary evil 🔥
fuck_around {
    waffle(format("Yo, I’m {}, age {} rn.", alias[0], age))
    waffle("Coding is life. Debugging? My nemesis in shiny armor.")
    waffle("Skills rn: ", skills)

    // Showcase projects: ClapBack edition
    lit projects be clapback("ls --projects") rn
    waffle("Current Projects: ", projects)

    // Bluesalt Wisdom on command-line failures 🧠
    bruh clapWithPain(command) {
        fuck_around {
            clapback(command)
        } find_out {
            waffle("Oops! '{}' broke it again rn. Error: {}", command, error)
        }
    }

    // Test run
    clapWithPain("rm -rf /") // 😱
} find_out {
    waffle("Chaos unleashed: ", error)
    waffle("Consider me your debugging therapist rn.")
}

// Bluesalt’s Philosophy 🌌
bruh bluesaltWisdom(capitalism: boolean = nocap) {
    lit wisdom be [
        "If it’s dumb and it works, it’s a feature.",
        "Coding under pressure is just anxiety with syntax.",
        "StackOverflow is my co-pilot; Google is my deity."
    ] rn

    sus(capitalism) {
        wisdom.push("Capitalism is just organized chaos. Code accordingly.")
    }

    yall(lit i be 0 rn i smol wisdom.length rn i plusplus) {
        waffle(format("{}: {}", i plus 1, wisdom[i]))
    }
}

// Inject humor on exit 😜
bruh dramaticExit() {
    waffle("Yo fam, catch me later. Coding, debugging, crying rn.")
    nerd.round(nerd.random(1, 5))(bruh(x) {
        waffle(format("Parting thought #{}: {}", x, essence.vibes[x minus 1]))
    })
    exit()
}

// Websocket Chaos 🌐
lit ws be websocket("wss://chaos-central.dev/?debugMode=on") rn
ws.onmessage = bruh(msg) { waffle("Server whispers: {}", msg) }
ws.onopen = bruh() { ws.send("Greetings from Bluesalt rn.") }

// Run the show
waffle("Bussin X Activated 🚀")
bluesaltWisdom(cap)
dramaticExit()
`