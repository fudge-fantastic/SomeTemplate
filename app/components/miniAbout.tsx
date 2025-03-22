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
                            <div >
                                About me
                            </div>
                            <div
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {isHovered ? <div className="text-3xl">😀</div> : <div className="text-3xl">🙂</div>}
                            </div>
                        </div>
                        Born in <span className="text-red-500 font-bold">Mumbai</span>, exiled to <span className="text-red-500 font-bold">Pune</span>, and now just loitering around in the void of tech. 
                        Got myself a <span className="text-green-500 font-bold">BCA</span> and a <span className="italic">fancy</span> <span className="text-green-500 font-bold">PG in Data Science and Analytics</span> degree. 
                        I <span className="font-semibold">sketch human anatomy</span> purely for <span className="italic font-semibold">artistic</span> reasons ⚆ _ ⚆ of course, and occasionally <span className="font-semibold">compose lofi and orchestral tracks</span> because my brain refuses to stick to one obsession.
                        When I’m not busy breaking my own code, I’m either drowning in music or pretending to be intellectual by reading books. 
                        I workout so my brain doesn&apos;t completely collapse from the crimes I commit against logic and clean code.
                    </div>
                </div>
            </div>
        </div>
    );
}
