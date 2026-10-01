import { Link , useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.png"

function Navbar() {

    const navigate = useNavigate();

  return (
    <div className="flex justify-between  px-25 bg-gray-50 h-17 w-screen ">
        <div className="px-3 py-1">
            <img 
            src={Logo}
            alt="Logo"
            className="h-full w-auto cover "
            />
        </div>
        <div className="flex justify-center mt-5 gap-10 text-lg">
            <Link to="/" className=" hover:text-green-500">Home</Link>
            <Link to="/books" className=" hover:text-green-500">Books</Link>
            <Link to="/" className=" hover:text-green-500">About</Link>
            <Link to="/" className=" hover:text-green-500">My Books</Link>
            <Link to="/" className=" hover:text-green-500">Profile</Link>
        </div>

        <div className="">
            <button 
            type="button"
            className="bg-green-800 text-white mt-4 px-7 py-2 border rounded-xl "
            onClick={() => navigate("/login")}
            >
                    Login
                </button>
            <button 
            type="button"
            className="bg-white text-green font-bold ml-2 mt-4 px-5 py-1.5 border rounded-xl "
            onClick={() => navigate("/signup")}
            >
                    SignUp
                </button>
        </div>
        
    </div>
  )
}

export default Navbar
