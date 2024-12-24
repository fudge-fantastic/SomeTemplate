import DarkModeToggler  from "~/components/dark-mode-toggler";


export default function NavBar() {
    return (
        <div className="flex flex-row justify-between items-center px-4 py-3 mx-2">
            <div className="flex flex-row gap-2 items-center">
                <div className="size-7 dark:bg-zinc-800 bg-zinc-900 rounded-md"></div>
                <h1 className="text-lg font-semibold">BlueSalt</h1>
            </div>
            <DarkModeToggler />
        </div>
    );
}