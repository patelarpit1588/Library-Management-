import { Link } from "react-router-dom"
import Logo from "../assets/Logo.png"

function Footer() {
  return (
    <div className='flex justify-between px-25 h-17 w-screen bg-green-900 border-t-2 border-green-500 '>
         <div className="px-3 py-1">
            <img 
            src={Logo}
            alt="Logo"
            className="h-full w-auto cover "
            />
        </div>
        <div className="flex justify-center mt-5 gap-5 text-white text-lg">
            <Link to="/" className=" hover:text-green-500">Home</Link>
            <Link to="/" className=" hover:text-green-500">Books</Link>
            <Link to="/" className=" hover:text-green-500">About</Link>
            <Link to="/" className=" hover:text-green-500">Contact</Link>
        </div>
        <div className="text-white text-lg mt-5 ">
            <p>C. 2026 LibraHub. All rights reserverd </p>
        </div>
    </div>
  )
}

export default Footer
