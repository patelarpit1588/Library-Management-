import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState,useEffect } from 'react'
import axios from "axios"
import { useParams,useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Viewbook() {
    
    const id = useParams().id;
    const navigate = useNavigate();
    const userId = useSelector((state) => state.auth.userData.id)
    
    const [book,setBook] = useState({
        title:"",
        author:"",
        image_url :"",
        discription:"",
        category:"",
        quantity:""
    })
    const [msg,setMsg] = useState(null)

    useEffect(() =>{
        axios.get(`http://localhost:3000/api/book/singlebook/${id}`)
        .then((res) =>{
            setBook(res.data)
        })
        .catch((err) => console.log(err))

    },[])

    const requestBook = () =>{

        const cnfresult = confirm(`Submit a borrow request for ${book.title}`)

        if(cnfresult) {
            axios.post(`http://localhost:3000/api/issuebook/issuerequest`, { book: id, user: userId })
            .then((res) => setMsg("Book request submitted successfully.") )
            .catch((err) => console.log(err))
        }
    }
 
  return (
    <div className='flex flex-col  min-h-screen w-full '>
        <Navbar />

        <div className='flex-1 flex justify-center gap-20 px-20 bg-gray-100 py-10'>
        
                <div>
                <img 
                src={`http://localhost:3000/images/${book.image_url}`}
                alt={book.title}
                className='rounded-2xl h-70 w-60 cover '
                />
                </div>

                <div>
                    <p className='text-blue-500 text-lg'>{book.category}</p>

                    <h3 className='text-3xl font-semibold mt-2'>{book.title}</h3>
                    <p className='text-lg text-gray-500 mt-1'>by {book.author}</p>

                    <p className='mt-4 bg-green-100 text-green-700 w-fit px-3 py-2 rounded-xl'>{book.quantity} copies available</p>
                
                    <p className='mt-2' >{book.discription} </p>

                    { 
                        msg ? <div className='mt-4 text-lg pl-2 bg-emerald-50 text-emerald-800 border-emerald-100'>
                            {msg}

                            </div>
                              : null
                    }
                    

                    <div className='mt-5'>
                        <button
                        type='button'
                        className='px-4 py-2 bg-green-800 hover:bg-green-900 rounded-2xl text-white text-lg '
                        onClick={requestBook}
                        >
                            Request Book</button>
                        <button
                        type='button'
                        className='px-4 py-2 ml-4 bg-white hover:cursor-pointer border-2 border-green-700 rounded-2xl text-lg '
                        onClick={() => navigate("/books")}
                        >
                            Back to Books</button>
                            </div>    
                </div>
            
        </div>

      <Footer />
    </div>
  )
}

export default Viewbook
