import { MetaFunction } from "@remix-run/react";
import Transition from "~/components/transition";

export const meta: MetaFunction = () => {
  return [
    { title: "About fudge-fantastic" },
    { name: "description", content: "Peculiarly Bizarre" },
  ];
};

export default function About() {
    const dummyData = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sit mollitia est, voluptatum illum ad! Rerum laudantium nisi aliquam eos laborum aut sapiente laboriosam est iure deleniti, qui veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sit mollitia est, voluptatum illum ad! Rerum laudantium nisi aliquam eos laborum aut sapiente laboriosam est iure deleniti, qui veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sit mollitia est, voluptatum illum ad! Rerum laudantium nisi aliquam eos laborum aut sapiente laboriosam est iure deleniti, qui veritatis."
    return (
        <Transition>
            <div className="md:mx-6 mx-3"> 
                <div className="py-3 px-4 rounded-lg border border-zinc-900 dark:border-zinc-400">
                  <h1 className="font-semibold md:text-2xl text-xl mb-2">About Me</h1>
                  <p className="text-sm">{dummyData}</p>
                </div>
            </div>
        </Transition>
    );
}