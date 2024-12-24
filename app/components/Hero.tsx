import { FlipWords } from "./ui/flip-words"
import CodeBlockDemo from "./codeBlock"
import CarouselDemo from "./CorouselSlides"
// import { ScrollArea } from "./ui/scroll-area"

export default function Hero() {
    const roles = ["Data Scientist", "Machine Learning Engineer", "Deep Learning Engineer",
        "AI/MLOps Engineer", "Potato Debugger", "Script Junkie",
        "Runtime Wrecker", "Memory Leak Bandit, lol", "Git Grimlin"]
    // console.log(code)  

    return (
        <div className="mx-6 flex gap-4 mb-4">
            <div className="flex flex-col gap-4">
                <div className="rounded-lg dark:bg-zinc-900 bg-zinc-100 shadow-md px-6 py-5 ">
                    <h2 className="tracking-normal text-[15px]">Hello, I&apos;m <span className="font-semibold text-2xl">Aaditya Pandagle</span>. A part-time human, </h2>
                    <h2 className="tracking-normal text-[15px]">and a full-time <span className="text-2xl"><FlipWords words={roles} className="font-semibold" /></span></h2>
                    <p className="text-sm pt-3 tracking-wide">A tech enthusiast hailing <span className='font-semibold dark:text-yellow-300'>from Mumbai</span> but happily stranded <span className='font-semibold dark:text-yellow-300'>in Pune</span>. I dabble in code—well, maybe more than dabble. My curiosity has a knack for leading me astray, think of me as the adventurous coder who&apos;s always one click away from unleashing chaos ⚆ _ ⚆</p>
                </div>
                <div className="flex justify-center px-12">
                    <CarouselDemo />
                </div>
            </div>    
            <div>
                <CodeBlockDemo code={code} language="jsx" />
            </div>        
        </div>
    )
}

const code = `
lit age be 22 rn 
lit alias be ["Bluesalt", "fudge_fantastic"] rn
lit skills be ["Coding", "Breaking stuff", "Accidental genius moments", "Chess", "Sketching anatomy and Portraits"] rn
lit mood be "Confused but Vibing" rn

fuck_around {
    waffle(strcon("Yo, I'm ", alias, ", age ", age, " rn."))
    waffle("Coding is my life. Debugging? My toxic relationship.")
    waffle("Skills rn: ", skills)

    // Humble flex with anxiety
    lit projects be clapback("ls") rn
    waffle("Projects rn: ", projects)
} find_out {
    waffle("Oh no, I broke it again! Error: ", error, " rn.")
    waffle("Guess I'm bussin into chaos once more...")
}

// Bluesalt's Philosophy 💭
bruh bluesaltWisdom() {
    lit wisdom be [
        "Code like nobody's watching, because they're definitely laughing.",
        "If it works, it's not a bug—it's an undocumented feature.",
        "Sleep? That's for people without unsaved code."
    ] rn

    yall(lit i be 0 rn i smol wisdom.length rn i plusplus) {
        waffle(wisdom[i])
    }
}

// Call your wisdom for daily dose
bluesaltWisdom()

// Parting words rn
waffle("Life's perplexing, but hey, so is Bussin X.")
waffle("Catch me coding, debugging, and probably crying.")
exit()
`