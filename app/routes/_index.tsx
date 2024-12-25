import type { MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Transition from "~/components/transition";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Transition>
        <div>
          <Hero />
        </div>
      </Transition>
    </div>
  );
}


