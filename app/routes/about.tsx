import { MetaFunction } from "@remix-run/react";
import TimelineLayout from "~/components/TimeLine/timeline-layout";
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
                <TimelineLayout />
            </div>
        </Transition>
    );
}