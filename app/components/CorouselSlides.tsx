import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { Link } from "@remix-run/react";

const navLinks = [
  { name: "Tis HomePage itself", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs p-0"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {navLinks.map((link, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 shadow-md bg-zinc-50 dark:bg-zinc-900 rounded-md">
                  <Link to={link.path} className="text-lg font-semibold text-center">{link.name}</Link>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
