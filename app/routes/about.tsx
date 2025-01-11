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
            <div>
                <h1>About</h1>
            </div>
        </Transition>
    );
}