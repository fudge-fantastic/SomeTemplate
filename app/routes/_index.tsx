/* eslint-disable react-hooks/exhaustive-deps */
import type { MetaFunction } from "@remix-run/node";
import Cards from "~/components/cards";
import Hero from "~/components/Hero";
import Transition from "~/components/transition";

export const meta: MetaFunction = () => {
  return [
    { title: "fudge-fantastic" },
    { name: "description", content: "What the fuck is oatmeal!" },
  ];
};

export default function Index() {
  return (
    <Transition>
      <Hero />
      <Cards />
    </Transition>
  );
}


