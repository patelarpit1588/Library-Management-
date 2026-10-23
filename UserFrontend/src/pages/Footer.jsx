import { Link } from "react-router-dom"
import Logo from "../assets/Logo.png"
import copyright from "../assets/copyright.svg"

function Footer() {
  return (
    <div className='flex justify-between px-15 h-17 w-screen bg-green-900 border-t-2 border-green-500 '>
         <div className="px-3 py-1">
            <img 
            src={Logo}
            alt="Logo"
            className="h-full w-auto cover "
            />
        </div>
        <div className="flex justify-center mt-5 gap-5 text-white text-lg">
            <Link to="/" className=" hover:text-green-500">Home</Link>
            <Link to="/books" className=" hover:text-green-500">Books</Link>
            <Link to="/about" className=" hover:text-green-500">About</Link>
            <Link to="/mybooks" className=" hover:text-green-500">My Books</Link>
            <Link to="/profile" className=" hover:text-green-500">Profile</Link>
        </div>
       <div className=" flex items-center gap-2 text-lg text-white"> <img src={copyright} alt="Copyright" className="h-5 w-5 brightness-0 invert" />
        <p>2026 LibraHub. All rights reserved.</p> </div>
    </div>
  )
}

export default Footer
