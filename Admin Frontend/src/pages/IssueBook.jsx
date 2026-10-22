import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import Topbar from './Topbar'


function IssueBook() {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get(`http://localhost:3000/api/issuebook/allrequest`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))

  }, [])

  const issueBook = (id) =>{
    const cnf = confirm("Are you sure you want to issue this book?")
    if(!cnf) return ;

    axios.put(`http://localhost:3000/api/issuebook/confirmbook/${id}`)
    .then((res) =>{
      alert(res.data.message)
    })
    .catch ((err) => console.log(err))
  }

  const rejectBook = (id) =>{
    const cnf = confirm("Are you sure you want to reject this book request?")
    if(!cnf) return ;

    axios.put(`http://localhost:3000/api/issuebook/rejectbook/${id}`)
    .then((res) =>{
      alert(res.data.message)
    })
    .catch ((err) => console.log(err))

  }
  const returnBook = (id) =>{
    const cnf = confirm("Are you sure you want to mark this book as returned?")
    if(!cnf) return ;

    axios.put(`http://localhost:3000/api/issuebook/returnbook/${id}`)
    .then((res) =>{
      alert(res.data.message)
    })
    .catch ((err) => console.log(err))

  }

  const deleteRecord = (id) =>{
    const cnf = confirm("Are you sure you want to delete this record permanently?")
    if(!cnf) return ;

    axios.delete(`http://localhost:3000/api/isuuebook/deleterecord/${id}`)
    .then((res) => console.log(res.data.message))
    .catch((err) => console.log(err))

  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="my-8  px-10 ">
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
              <thead className="bg-gradient-to-r from-blue-100 to-indigo-50 text-gray-700">
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

                    <td className="px-6 py-4 font-bold">
                      {request.status}
                    </td>

                    <td className="px-6 py-4">
                      {request.requestDate}
                    </td>

                    <td className="px-6 py-4">
                      
                    {
                      request.status === "returned" ? 
                      <div className='flex justify-center '>
                      <button
                          type="button"
                          onClick={() => deleteRecord(request._id)}
                          className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold shadow-sm hover:bg-red-700 hover:shadow-md active:scale-95 transition-all duration-200"
                          >
                          Delete Record
                        </button>
                      </div>
                      :
                            request.status === "pending" ?
                            
                            <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() =>issueBook(request._id)}
                          className="px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-semibold shadow-sm hover:bg-green-700 hover:shadow-md active:scale-95 transition-all duration-200"
                          >
                          Issue
                        </button>

                        <button
                          type="button"
                          onClick={() => rejectBook(request._id)}
                          className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold shadow-sm hover:bg-red-700 hover:shadow-md active:scale-95 transition-all duration-200"
                          >
                          Reject
                        </button>
                        </div>
                        :

                        <button
                        type="button"
                        onClick={() => returnBook(request._id)}
                        className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow-sm hover:bg-blue-700 hover:shadow-md active:scale-95 transition-all duration-200"
                        >
                          Returned
                        </button>

                        }
                          
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
