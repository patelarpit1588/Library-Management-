import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Queries() {

    const navigate = useNavigate();

    const [queries, setQueries] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/query/allqueries`)
            .then((res) => {
                setQueries(res.data)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Sidebar />

            <div className="flex-1">

                <Topbar />

                <div className='flex-1 p-10'>

                    <div className="">
                        <h1 className="text-5xl font-bold text-gray-800">
                            Query Management
                        </h1>

                        <div className="mt-3 ml-20 h-1 w-68 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                        <p className="mt-4 text-lg text-gray-500">
                            View and reply user queries.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white shadow-xl border border-gray-100 mt-8 overflow-hidden">
                        <div className="px-6 py-5 border-b border-gray-100">
                            <h2 className="text-2xl font-semibold text-gray-700">
                                Queries List
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                            name
                                        </th>
                                        <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                            email
                                        </th>
                                        <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                            subject
                                        </th>
                                        <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                            message
                                        </th>
                                        <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                            Actions
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>
                                    {queries.map((query) => (
                                        <tr
                                            key={query._id}
                                            className="border-t border-gray-100 hover:bg-blue-50 transition-all duration-200"
                                        >

                                            <td className="px-6 py-4 font-semibold text-gray-800">
                                                {query.name}
                                            </td>

                                            <td className="px-6 py-4">
                                                {query.email}
                                            </td>

                                            <td className="px-6 py-4 text-gray-600">
                                                {query.subject}
                                            </td>

                                            <td className="px-6 py-4 text-gray-600 max-w-xs">
                                                <div className="truncate">
                                                    {query.message}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600 max-w-xs">
                                                <div className="truncate">
                                                    {query.status}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">
                                                <button
                                                    type="button"
                                                    onClick={() => navigate(`/reply/${query._id}`, {
                                                        state: { query },
                                                    })}
                                                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition-all duration-200"
                                                >
                                                    Reply
                                                </button>

                                            </td>
                                        </tr>
                                    ))}

                                    {queries.length === 0 && (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="text-center py-10 text-gray-500"
                                            >
                                                No queries Found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Queries
