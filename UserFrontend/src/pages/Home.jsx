import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "./Navbar"
import home_image from "../assets/home_image.png"
import booklogo from "../assets/booklogo.png"
import learnlogo from "../assets/learnlogo.png"
import heartlogo from "../assets/heartlogo.png"
import peoplelogo from "../assets/peoplelogo.png"
import axios from "axios"
import Footer from './Footer'
function Home() {

  const navigate = useNavigate();
  const [books, setBooks] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3000/api/book/allbook`)
      .then((res) => {
        setBooks(res.data)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />

      <div
        className="w-full h-[500px] bg-cover bg-center bg-no-repeat py-10 px-20"
        style={{ backgroundImage: `url(${home_image})` }}
      >
        <h2 className='text-xl text-gray-300 font-semibold'>WELCOME TO LIBRAHUB</h2>
        <div className="text-white text-5xl font-bold mt-4">
          <p>Discover Knowledge</p>

          <p className='mt-4'>
            Build a <span className="text-green-200">Better You</span>
          </p>
        </div>

        <div className='text-lg text-gray-100 font-semibold mt-8'>

          <p>Explore a vast collections of books, learn new skills and fuel your imagination. </p>
          <p>Your next grat read is just a click away</p>
        </div>

        <div>
          <button
            className='bg-green-800 text-white text-lg px-2 py-2 mt-5 border-green-900 rounded-lg'
            type="button"
          >
            Explore Books
          </button>
        </div>

      </div>

      <div className='flex px-4 py-3 justify-center bg-gray-100 w-full h-40 gap-15 mb-5'>

        <div className="flex items-center gap-3">

          <img src={booklogo}
            className='cover w-30 h-30'
          />
          <div>
            <h4 className='text-xl font-bold '>Wide Collection</h4>
            <p className='text-md text-gray-500 font-semibold'>
              Large number of books acress <br />
              various categories
            </p>
          </div>

        </div>
        <div className="flex items-center gap-3">

          <img src={peoplelogo}
            className='cover w-30 h-32'
          />
          <div>
            <h4 className='text-xl font-bold '>Easy Access</h4>
            <p className='text-md text-gray-500 font-semibold'>
              Search and find your <br />
              favorite books easily
            </p>
          </div>

        </div>
        <div className="flex items-center gap-3">

          <img src={learnlogo}
            className='cover w-30 h-30'
          />
          <div>
            <h4 className='text-xl font-bold '>learn & Grow</h4>
            <p className='text-md text-gray-500 font-semibold'>
              Gain Knowledge anytime, <br />
              anywhere
            </p>
          </div>

        </div>
        <div className="flex items-center gap-3">

          <img src={heartlogo}
            className='cover w-30 h-30 '
          />
          <div>
            <h4 className='text-xl font-bold '>For a Better Tomorrow</h4>
            <p className='text-md text-gray-500 font-semibold'>
              Reading build a brighter and <br />
              smarter you
            </p>
          </div>

        </div>


      </div>

      <div className="px-6 md:px-12 py-8">
  {/* Section Header */}
  <div className="flex justify-between mb-8">
    <div>
      <h2 className="text-4xl font-bold text-gray-800">
      Books Collection
    </h2>
    <p className="text-gray-500 mt-2">
      Discover and explore our latest books.
    </p>
    </div>
    <div className='text-lg mt-6 text-green-500 hover:cursor-pointer' onClick={() => navigate("/books")}>
      View all 
    </div>
  </div>

  {/* Books Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {books.slice(0,4).map((book) => (
      <div
        key={book._id}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      >
        {/* Image */}
        <div className="bg-gray-100 flex justify-center p-4">
          <img
            src={`http://localhost:3000/images/${book.image_url}`}
            alt={book.title}
            className="h-56 w-40 object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 truncate">
            {book.title}
          </h3>

          <p className="text-gray-600 mt-1">
            {book.author}
          </p>

          <span className="inline-block mt-2 px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
            {book.category}
          </span>

          <button
            type="button"
            onClick={() => navigate(`/viewbook/${book._id}`)}
            className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl font-medium transition"
          >
            View Details
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
      <Footer />

    </div>
  )
}

export default Home
