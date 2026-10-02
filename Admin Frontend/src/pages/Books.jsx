import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Books() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/book/allbook")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteBook = (id) => {

    const conf = confirm("Arw you want to delete the book?")

    if (conf) {
      axios.delete(`http://localhost:3000/api/book/deletebook/${id}`)
        .then((res) => {
          alert(res.data.message);
          setBooks(prev =>
            prev.filter(book => book._id !== id)
          );
        })
        .catch((err) => console.log(err))
    } else {
      return
    }
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />

      <div className="flex-1 p-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800">
            Books Management
          </h1>

          <div className="mt-3 ml-20 h-1 w-70 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>

          <p className="mt-4 text-lg text-gray-500">
            Manage and organize your library books efficiently.
          </p>
        </div>

        {/* Search & Add Button */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search by title or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <svg
              className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
              />
            </svg>
          </div>

          <button
            type="button"
            onClick={() => navigate("/addbook")}
            className="px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            + Add Book
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 mt-8 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-700">
              Books List
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    Cover
                  </th>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    Author
                  </th>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left font-bold uppercase text-sm">
                    Description
                  </th>
                  <th className="px-6 py-4 text-center font-bold uppercase text-sm">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-center font-bold uppercase text-sm">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {books.map((book) => (
                  <tr
                    key={book._id}
                    className="border-t border-gray-100 hover:bg-blue-50 transition-all duration-200"
                  >
                    <td className="px-6 py-4">
                      <img
                        src={`http://localhost:3000/images/${book.image_url}`}
                        alt={book.title}
                        className="w-16 h-20 object-cover rounded-lg shadow-md border"
                      />
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {book.title}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {book.author}
                    </td>

                    <td className="px-6 py-4">

                      {book.category}

                    </td>

                    <td className="px-6 py-4 text-gray-600 max-w-xs">
                      <div className="truncate">
                        {book.discription}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center font-semibold text-gray-700">
                      {book.quantity}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">

                        <div className="pt-2 px-2" onClick={() => navigate(`/editbook/${book._id}`)}>
                          <svg class="w-6.5 h-6.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                          </svg>
                        </div>
                        <div className="pt-2 px-1" onClick={() => deleteBook(book._id)}>
                          <svg class="w-6 h-6 text-red-600  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                          </svg>
                        </div>

                        <div className="pt-2 px-2" onClick={() => navigate(`/viewbook/${book._id}`)}>
                          <svg className="w-7 h-7 text-blue-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                            <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </div>

                      </div>
                    </td>
                  </tr>
                ))}

                {books.length === 0 && (
                  <tr>
                    <td
                      colSpan="7"
                      className="text-center py-10 text-gray-500"
                    >
                      No books available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Books;