import { Link, useNavigate } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { useSelector } from "react-redux"

function Navbar() {

    const navigate = useNavigate();

    const authStatus = useSelector((state) => state.auth.authstatus)
    const userData = useSelector((state) => state.auth.userData)
    const auth = useSelector((state) => state.auth)
    

    console.log(auth);
    console.log(authStatus);
console.log(userData);


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

            {
                authStatus ?
                   <div>
                        <button
                            type="button"
                            className="bg-red-600 hover:bg-red-700 text-white mt-4 px-7 py-2 border rounded-xl "
                            onClick={() => navigate("/login")}
                        >
                            Logout
                        </button>
                    </div>
                    :
                      <div>
                        <button
                            type="button"
                            className="bg-green-800 hover:cursor-pointer text-white mt-4 px-7 py-2 border rounded-xl "
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            className="bg-white text-green hover:cursor-pointer font-bold ml-2 mt-4 px-5 py-1.5 border rounded-xl "
                            onClick={() => navigate("/signup")}
                        >
                            SignUp
                        </button>
                    </div>
                   
            }

        </div>
    )
}

export default Navbar
