import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Footer from './Footer'


function MyBooks() {

    const [books, setBooks] = useState([])
    const id = useSelector((state) => state.auth.userData.id)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/issuebook/userbooks/${id}`)
            .then((res) => {
                setBooks(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

   return (
    <div className="flex min-h-screen flex-col">

        <Navbar />

        <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">

                {books.map((book) => (
                    <div
                        key={book._id}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="bg-gray-100 flex justify-center p-4">
                            <img
                                src={`http://localhost:3000/images/${book.book.image_url}`}
                                alt={book.book.title}
                                className="h-56 w-40 object-cover rounded-xl"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800 truncate">
                                {book.book.title}
                            </h3>

                            <p className="mt-1 text-gray-600">
                                {book.book.author}
                            </p>

                            <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                                {book.book.category}
                            </span>

                            <br />

                            <p
                                className={`inline-block mt-3 px-3 py-1 text-sm font-semibold rounded-full ${
                                    book.status?.toLowerCase() === "pending"
                                        ? "bg-yellow-100 text-yellow-700"
                                        : book.status?.toLowerCase() === "issued"
                                        ? "bg-blue-100 text-blue-700"
                                        : book.status?.toLowerCase() === "returned"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-gray-100 text-gray-700"
                                }`}
                            >
                                {book.status}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>

        <Footer />

    </div>
);
}

export default MyBooks
