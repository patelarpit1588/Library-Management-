import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'


function IssueBook() {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get(`http://localhost:3000/api/issuebook/allrequest`)
      .then((res) => {
        console.log(res.data);
        setData(res.data)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />

      <div className="flex-1 p-10">

        <div className="mb-8 px-10 ">
          <h1 className="text-5xl font-bold text-gray-800">
            Issue Books
          </h1>

          <div className="mt-3 ml-10 h-1 w-45 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>

          <p className="mt-4 text-lg text-gray-500">
            Assign an book to the active member.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 mt-8 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-700">
              Issue Request List
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full ">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    User Name
                  </th>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    User Email
                  </th>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    User Phone No.
                  </th>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    Book Title
                  </th>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    Book Category
                  </th>
                  <th className="px-6 py-4 text-center font-bold uppercase text-sm">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center font-bold uppercase text-sm">
                    Request Date
                  </th>
                  <th className="px-6 py-4 text-center font-bold uppercase text-sm">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {data.map((request) => (
                  <tr
                    key={request._id}
                    className="border-t border-gray-100 hover:bg-blue-50 transition-all duration-200"
                  >

                    <td className="px-6 py-4">
                      {request.user.name}
                    </td>

                    <td className="px-6 py-4">
                      {request.user.email}
                    </td>

                    <td className="px-6 py-4">
                      {request.user.phone}
                    </td>

                    <td className="px-6 py-4">
                      {request.book.title}
                    </td>

                    <td className="px-6 py-4">
                      {request.book.category}
                    </td>

                    <td className="px-6 py-4">
                      {request.status}
                    </td>

                    <td className="px-6 py-4">
                      {request.requestDate}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-semibold shadow-sm hover:bg-green-700 hover:shadow-md active:scale-95 transition-all duration-200"
                        >
                          Issue
                        </button>

                        <button
                          type="button"
                          className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold shadow-sm hover:bg-red-700 hover:shadow-md active:scale-95 transition-all duration-200"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {data.length === 0 && (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center py-10 text-gray-500"
                    >
                      No request available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IssueBook
