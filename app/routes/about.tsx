import { MetaFunction } from "@remix-run/react";
import Transition from "~/components/transition";

export const meta: MetaFunction = () => {
  return [
    { title: "About fudge-fantastic" },
    { name: "description", content: "Peculiarly Bizarre" },
  ];
};

export default function About() {
    return (
        <Transition>
            <div className="mx-6"> 
                <div className="py-3 px-4 rounded-lg border border-zinc-900 dark:border-zinc-400">
                  <h1 className="font-semibold text-lg">About Me</h1>
                  <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores sit mollitia est, voluptatum illum ad! Rerum laudantium nisi aliquam eos laborum aut sapiente laboriosam est iure deleniti, qui veritatis.</p>
                </div>
            </div>
        </Transition>
    );
}