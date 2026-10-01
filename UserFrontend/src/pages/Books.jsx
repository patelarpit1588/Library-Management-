import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'

function Books() {

    const navigate = useNavigate()
    const [books,setBook] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:3000/api/book/allbook`)
        .then((res) => 
        setBook(res.data)
    )
    .catch((err)=> console.log(err) )
    },[])

  return (
    <div>
        <Navbar />
    <div className='flex flex-col py-5  px-50 min-h-screen bg-gray-100 w-full '>
        
        <div >
        <h2 className='text-2xl font-semibold'>Books </h2>
            
        <p className='text-md text-gray-500 mt-2'>Search your book by title or category</p>
        </div>


        <div className='relative mt-5'>
            <svg className="absolute mx-3 my-3 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>

            <input 
            type='text'
            className='w-full px-15 py-3 bg-white rounded-2xl border-2 focus:border-blue-500  outline-none'
            placeholder='Serch books...'


            />

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
    {books.map((book) => (
      <div
        key={book._id}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      >
        {/* Image */}
        <div className="bg-gray-200 flex justify-center p-4">
          <img
            src={`http://localhost:3000/images/${book.image_url}`}
            alt={book.title}
            className="h-42 w-28 object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 truncate">
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
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl font-medium transition"
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

export default Books
