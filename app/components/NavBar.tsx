import { Link } from "@remix-run/react";
import { IoMenu } from "react-icons/io5";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Button } from "~/components/ui/button";
import DarkModeToggler from "~/components/dark-mode-toggler";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/projects", name: "Projects" },
  { href: "/blogs", name: "Blogs" },
];

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center md:px-3 py-3 mx-3 uppercase">
      <Link to="/" className="flex flex-row gap-1 md:gap-2 items-center">
        <div className="size-6 md:size-7 dark:bg-zinc-800 bg-zinc-900 rounded-md"></div>
        <div className="text-md font-semibold">BlueSalt</div>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-row gap-0">
        {navLinks.map((link) => (
          <Link key={link.href} to={link.href}>
            <Button variant="ghost" className="font-semibold text-xs uppercase">
              {link.name}
            </Button>
          </Link>
        ))}
      </div>

      {/* Mobile Drawer Menu */}
      <div className="flex items-center md:gap-3 gap-2">
        <div className="md:hidden">
            <Drawer>
            <DrawerTrigger asChild>
                <button className="flex items-center text-2xl bg-zinc-200 dark:bg-zinc-800 p-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 duration-200">
                    <IoMenu />
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <div className="p-4">
                        <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link key={link.href} to={link.href}>
                            <Button variant="ghost" className="w-full text-left font-semibold uppercase text-xs">
                                {link.name}
                            </Button>
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </DrawerContent>
            </Drawer>
        </div>

        {/* Dark Mode Toggle */}
        <DarkModeToggler />
      </div>
    </div>
  );
}
