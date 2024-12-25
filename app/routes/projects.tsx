import Transition from "~/components/transition";

export default function Projects() {
    return (
        <Transition>
            <div className="mx-6 md:flex gap-4">
                <div className="dark:bg-zinc-900 p-4 rounded-md bg-zinc-200">
                    <h1 className="text-2xl">Data Science</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos officia mollitia illo pariatur hic delectus neque eius qui voluptate amet officiis, rem adipisci, reiciendis magni assumenda illum voluptates corporis?</p>
                </div>
                <div className="dark:bg-zinc-900 p-4 rounded-md bg-zinc-200">
                    <h1>Data Science</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos officia mollitia illo pariatur hic delectus neque eius qui voluptate amet officiis, rem adipisci, reiciendis magni assumenda illum voluptates corporis?</p>
                </div>
            </div>
        </Transition>
    );
}