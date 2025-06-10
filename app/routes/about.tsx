export default function About() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-black dark:text-white text-center">About</h1>
            <div className="w-full overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full">
                    <thead className="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-slate-900">
                        <tr>
                            <th className="px-2.5 py-2 text-start font-medium">
                                Name
                            </th>
                            <th className="px-2.5 py-2 text-start font-medium">
                                Employed
                            </th>
                            <th className="px-2.5 py-2 text-start font-medium">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="group text-sm text-slate-800 dark:text-white">
                        <tr className="border-b border-slate-200 last:border-0">
                            <td className="p-3">
                                John Michael
                            </td>
                            <td className="p-3">
                                Manager
                            </td>
                            <td className="p-3">
                                23/04/18
                            </td>
                            <td className="p-3">
                                <a href="#" className="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b border-slate-200 last:border-0">
                            <td className="p-3">
                                Alexa Liras
                            </td>
                            <td className="p-3">
                                Developer
                            </td>
                            <td className="p-3">
                                23/04/18
                            </td>
                            <td className="p-3">
                                <a href="#" className="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b border-slate-200 last:border-0">
                            <td className="p-3">
                                Laurent Perrier
                            </td>
                            <td className="p-3">
                                Executive
                            </td>
                            <td className="p-3">
                                19/09/17
                            </td>
                            <td className="p-3">
                                <a href="#" className="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
                                    Edit
                                </a>
                            </td>   
                        </tr>
                        <tr className="border-b border-slate-200 last:border-0">
                            <td className="p-3">
                                Michael Levi
                            </td>
                            <td className="p-3">
                                Developer
                            </td>
                            <td className="p-3">
                                24/12/08
                            </td>
                            <td className="p-3">
                                <a href="#" className="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
                                    Edit
                                </a>
                            </td>
                        </tr>
                        <tr className="border-b border-slate-200 last:border-0">
                            <td className="p-3">
                                Richard Gran
                            </td>
                            <td className="p-3">
                                Manager
                            </td>
                            <td className="p-3">
                                04/10/21
                            </td>
                            <td className="p-3">
                                <a href="#" className="font-sans antialiased text-sm text-slate-800 font-medium hover:text-slate-600">
                                    Edit
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}