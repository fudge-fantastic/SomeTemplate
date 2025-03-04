import Transition from "~/components/transition";

export default function Blogs() {
    return (
        <Transition>
            <div className="mx-3 md:mx-6 min-h-screen">
                <div className="p-32 dark:bg-zinc-900 bg-zinc-50 border border-zinc-50 shadow-lg rounded-md text-center dark:border-none">
                    <h1 className="text-2xl font-semibold">This is the Blog page!</h1>
                    <p className="text-sm text-zinc-400">Currently, my keyboard is on fire 🔥 as I craft some epic blogs. Stay tuned!</p>
                </div>
            </div>
        </Transition>
    );
}