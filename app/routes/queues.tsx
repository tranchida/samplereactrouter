import { Link } from "react-router";

const queues = [
    {
        id: 1,
        name: "queue1",
        description: "Queue 1",
    },
] satisfies { id: number, name: string, description: string }[];

export default function Queues() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Queues</h1>
            <div className="flex flex-col items-center justify-center h-full pt-10">
                {queues.map((queue) => (
                    <Link to={`/queue/${queue.name}`} key={queue.id} className="bg-gray-200 dark:bg-gray-600 rounded-lg border-2 hover:bg-gray-500 border-black dark:border-white p-4">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{queue.name}</h2>
                    </Link>
                ))}
            </div>
        </div>
    )
}