const queues = [
    {
        id: 1,
        name: "queue1",
        description: "Queue 1",
    },
    {
        id: 2,
        name: "queue2",
        description: "Queue 2",
    },
] satisfies { id: number, name: string, description: string }[];

import { Link, useParams } from "react-router";

export default function Queue() {
    const { name } = useParams();

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Queue {name}</h1>
            <div className="flex flex-col items-center justify-center h-full pt-10">
                {queues.map((queue) => (
                    <div key={queue.id} className="bg-gray-200 dark:bg-gray-600 rounded-lg border-2 hover:bg-gray-500 border-black dark:border-white p-4">
                        <Link to={`/queue/${queue.name}`} className={`text-lg font-bold text-gray-900 dark:text-white ${name === queue.name ? 'text-blue-600 dark:text-blue-300' : ''}`}>
                            {queue.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}