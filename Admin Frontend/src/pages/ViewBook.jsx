import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function ViewBook() {

  const navigate = useNavigate();

  const [book, setBook] = useState({})
  const id = useParams().id

  useEffect(() => {
    axios.get(`http://localhost:3000/api/book/singlebook/${id}`)
      .then((res) => {
        setBook(res.data)
        console.log(res.data);

      })
      .catch((err) => console.log(err))
  }, [])

  return (
  <div className="min-h-screen p-8 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">

    <div className="flex justify-end">
      <div
        onClick={() => navigate("/books")}
        className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-500 hover:scale-105 transition-all duration-200 cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>
      </div>
    </div>

    <div className="text-center mt-4">
      <h1 className="text-4xl font-bold text-gray-800">
        View Book Details
      </h1>

      <div className="flex justify-center mt-4">
        <div className="h-1 w-48 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
      </div>
    </div>

    <div className="flex justify-center mt-10">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">

        <form>
          <div className="flex flex-col lg:flex-row gap-10">
    
            <div className="flex justify-center lg:justify-start">
              <img
                src={`http://localhost:3000/images/${book.image_url}`}
                alt={book.title}
                className="h-96 w-72 object-cover rounded-2xl border-4 border-gray-100 shadow-lg"
              />
            </div>

            <div className="flex-1">

              <label
                htmlFor="title"
                className="block mb-2 text-sm uppercase tracking-wide font-bold text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                value={book.title}
                disabled
                className="w-full mb-5 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl py-3 px-4 shadow-sm"
              />

              <label
                htmlFor="author"
                className="block mb-2 text-sm uppercase tracking-wide font-bold text-gray-600"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                value={book.author}
                disabled
                className="w-full mb-5 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl py-3 px-4 shadow-sm"
              />

              <label
                htmlFor="cat"
                className="block mb-2 text-sm uppercase tracking-wide font-bold text-gray-600"
              >
                Category
              </label>
              <input
                type="text"
                id="cat"
                value={book.category}
                disabled
                className="w-full mb-5 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl py-3 px-4 shadow-sm"
              />

              <label
                htmlFor="qnt"
                className="block mb-2 text-sm uppercase tracking-wide font-bold text-gray-600"
              >
                Quantity
              </label>
              <input
                type="text"
                id="qnt"
                value={book.quantity}
                disabled
                className="w-full mb-5 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl py-3 px-4 shadow-sm"
              />
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="dis"
              className="block mb-2 text-sm uppercase tracking-wide font-bold text-gray-600"
            >
              Description
            </label>

            <textarea
              id="dis"
              value={book.discription}
              disabled
              className="w-full min-h-40 bg-gray-50 text-gray-800 border border-gray-200 rounded-xl py-3 px-4 shadow-sm resize-none"
            />
          </div>
        </form>

      </div>
    </div>
  </div>
);
}

export default ViewBook
