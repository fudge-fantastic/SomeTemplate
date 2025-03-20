import { MetaFunction } from "@remix-run/react";
import Transition from "~/components/transition";

export const meta: MetaFunction = () => {
  return [
    { title: "About fudge-fantastic" },
    { name: "description", content: "Peculiarly Bizarre" },
  ];
};

export default function About() {
    const dummyData = "A tech enthusiast hailing from Mumbai but happily stranded in Pune. Armed with a BCA and a shiny PG degree in Data Science and Analytics, I’m basically a glorified tech wizard who occasionally ventures into AI and breaks it for sport. My curiosity has a knack for leading me astray, think of me as the adventurous coder who's always one click away from unleashing chaos ⚆ _ ⚆"
    return (
        <Transition>
            <div className="md:mx-6 mx-3 min-h-screen"> 
                <div className="py-3 px-4 rounded-lg border border-zinc-900 dark:border-zinc-400">
                  <h1 className="font-semibold md:text-2xl text-xl mb-2">About Me</h1>
                  <p className="text-sm">{dummyData}</p>
                </div>
            </div>
        </Transition>
    );
}