import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

function Users() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/users/alluser`)
            .then((res) =>{
                setUsers(res.data)
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
            User Management
          </h1>

          <div className="mt-3 ml-20 h-1 w-68 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>

                <div className="rounded-3xl bg-white shadow-xl border border-gray-100 mt-8 overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-100">
                        <h2 className="text-2xl font-semibold text-gray-700">
                            Users List
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700">
                                <tr>
                                    <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                       id
                                    </th>
                                    <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                        name
                                    </th>
                                    <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                        email
                                    </th>
                                    <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                                        phone no.
                                    </th>
                                  
                                </tr>
                            </thead>

                            <tbody>
                                { users.map((user) => (
                                    <tr
                                        key={user._id}
                                        className="border-t border-gray-100 hover:bg-blue-50 transition-all duration-200"
                                    >
                                      
                                        <td className="px-6 py-4 font-semibold text-gray-800">
                                            {user._id}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600">
                                            {user.name}
                                        </td>

                                        <td className="px-6 py-4">
                                            {user.email}
                                        </td>

                                        <td className="px-6 py-4 text-gray-600 max-w-xs">
                                            <div className="truncate">
                                                {user.phone}
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                                {users.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan="7"
                                            className="text-center py-10 text-gray-500"
                                        >
                                            No Users Found.
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

export default Users
