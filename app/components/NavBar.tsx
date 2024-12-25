import { Link } from "@remix-run/react";
import DarkModeToggler  from "~/components/dark-mode-toggler";

const navLinks = [
    {href: "/about",name: "About"},
    {href: "/projects",name: "Projects"},
    {href: "/blogs",name: "Blogs"},
    {href: "/contact",name: "Contact? LOL"}
]; 

export default function NavBar() {
    return (
        <div className="flex flex-row justify-between items-center px-4 py-3 mx-2">
            <Link to="/" className="flex flex-row gap-2 items-center">
                <div className="size-7 dark:bg-zinc-800 bg-zinc-900 rounded-md"></div>
                <div className="text-lg font-semibold">BlueSalt</div>
            </Link>
            <div className="flex flex-row gap-0">
                {navLinks.map((link) => (
                    <button key={link.href} className="font-semibold text-sm dark:hover:bg-zinc-800 hover:bg-zinc-200 px-4 py-2 duration-200 rounded-md">
                        <Link to={link.href}>{link.name}</Link>
                    </button>
                ))}
            </div>
            <DarkModeToggler />
        </div>
    );
}