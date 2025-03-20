import { DialogTrigger, Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";


const birthYear = 2003;
const currentYear = new Date().getFullYear();
const yearsOfExistence = currentYear - birthYear;
const cardData = [
    { 
        title: 'Years Of Existence', 
        value: yearsOfExistence.toString(),
        description: "Description about my life",
        someList: [] 
    }, 
    { 
        title: 'Years Of Work Experiences', 
        value: '2+',
        description: "Elaborate such low rate of exp",
        someList:[] 
    },
    { 
        title: 'Projects Completed', 
        value: '25+',
        description: "Flaunt your shit",
        someList:[] 
    },
    { 
        title: 'Certifications', 
        value: '10+',
        description: "Nothing much to Flaunt about this shit",
        someList:[
            // Udemy
            // HackerRank
            // Kaggle 
        ] 
    },
];

export default function Cards() {
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 md:px-6 px-3 py-2">
                {cardData.map((card) => (
                    <div key={card.title} className="flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-950 rounded-md p-3 w-full text-center">
                        <h2 className="md:text-xl text-[20px] font-bold text-gray-800 dark:text-white">{card.value}</h2>
                        <p className="md:text-xs text-[10px] text-gray-600 dark:text-white/60 font-semibold">{card.title}</p>
                    </div>
                ))}
            </div>
            {/* <DialogCards /> */}
        </>
    );
}

// function DialogCards() {
//     return (
//         <Dialog>
//             {cardData.map((card) => (
//                 <div key={card.title}>
//                     <DialogTrigger>{card.title}</DialogTrigger>
//                     <DialogContent>
//                         <DialogHeader>
//                             <DialogTitle>{card.description}</DialogTitle>
//                             <DialogDescription>{card.description}</DialogDescription>
//                         </DialogHeader>
//                     </DialogContent>
//                 </div>
//             ))}
//         </Dialog>
//     )
// }
