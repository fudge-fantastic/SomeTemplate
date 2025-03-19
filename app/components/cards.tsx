export default function Cards() {
    const birthYear = 2003;
    const currentYear = new Date().getFullYear();
    const yearsOfExistence = currentYear - birthYear;

    const cardData = [
        { 
            title: 'Years Of Existence', 
            value: yearsOfExistence.toString() 
        }, 
        { title: 'Years Of Work Experiences', value: '2+' },
        { title: 'Projects Completed', value: '25+' },
        { title: 'Certifications', value: '10+' },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 md:px-6 px-3 py-2">
            {cardData.map((card) => (
                <div key={card.title} className="hover-none md:hover:scale-105 duration-150 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 border border-zinc-950 rounded-md p-3 w-full text-center">
                    <h2 className="md:text-xl text-[20px] font-bold text-gray-800 dark:text-white">{card.value}</h2>
                    <p className="md:text-xs text-[10px] text-gray-600 dark:text-white/60 font-semibold">{card.title}</p>
                </div>
            ))}
        </div>
    );
}
