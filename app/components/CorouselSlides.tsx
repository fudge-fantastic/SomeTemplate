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
  {id: 1,name: "Tis HomePage itself", path: "/" },
  {id: 2,name: "About", path: "/about" },
  {id: 3,name: "Projects", path: "/projects" },
  {id: 4,name: "Skills", path: "/skills" },
  {id: 5,name: "Blog", path: "/blog" },
  {id: 6,name: "Contact", path: "/contact" },
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
        {navLinks.map((link) => (
          <CarouselItem key={link.id}>
            <div className="p-0">
              <Card>
                <CardContent className="flex flex-row aspect-square items-center justify-center p-6 shadow-md bg-zinc-50 dark:bg-zinc-900 rounded-md">
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
