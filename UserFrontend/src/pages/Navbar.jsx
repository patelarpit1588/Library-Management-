import { useNavigate,NavLink } from "react-router-dom"
import Logo from "../assets/Logo.png"
import { useSelector } from "react-redux"
import { useState } from "react";

function Navbar() {

    const navigate = useNavigate();

    const [showProfile,setShowProfile] = useState(false)
    const authStatus = useSelector((state) => state.auth.authstatus)
    const userData = useSelector((state) => state.auth.userData)

    return (
        <div className="flex justify-between  px-15 bg-gray-50 h-17 w-screen ">
            <div className="px-3 py-1">
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-full w-auto cover "
                />
            </div>
            <div className="flex justify-center mt-5 gap-10 text-lg">
                <NavLink to="/" className={({ isActive }) => ` ${isActive ? 'text-green-500' : 'hover:text-green-500'}`}>Home</NavLink>
                <NavLink to="/books" className={({ isActive }) => ` ${isActive ? 'text-green-500' : 'hover:text-green-500'}`}>Books</NavLink>
                <NavLink to="/mybooks" className={({ isActive }) => ` ${isActive ? 'text-green-500' : 'hover:text-green-500'}`}>My Books</NavLink>
                <NavLink to="/contact" className={({ isActive }) => ` ${isActive ? 'text-green-500' : 'hover:text-green-500'}`}>Contact Us</NavLink>
                <NavLink to="/profile" className={({ isActive }) => ` ${isActive ? 'text-green-500' : 'hover:text-green-500'}`}>Profile</NavLink>
            </div>

            {
                authStatus ?
                    <div className="flex items-center gap-3">

           
                <div className="relative">

                    <button
                        type="button"
                        onClick={() => setShowProfile((prev) => !prev)}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2 transition hover:bg-gray-50"
                    >
                    
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-xl font-bold text-white shadow-sm">
                            {userData.name.charAt(0).toUpperCase()}
                        </div>

                        
                        <div className="hidden text-left sm:block">
                            <p className="text-sm font-semibold text-gray-800">
                                {userData.name.toUpperCase()}
                            </p>
                        </div>

                        <svg
                            className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                                showProfile ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 9-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {showProfile && (
                        <div className="absolute right-0 z-50 mt-3 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-lg">

                            <NavLink
                                to="/profile"
                                onClick={() => setShowProfile(false)}
                                className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM5 21a7 7 0 0 1 14 0"
                                    />
                                </svg>

                                <span>My Profile</span>
                            </NavLink>

                            <div className="mx-3 border-t border-gray-100" />

                            <button
                                type="button"
                                onClick={() => {
                                    setShowProfile(false)
                                    navigate("/logout")
                                }}
                                className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 transition hover:bg-red-50"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        d="M15 12H3m0 0 4-4m-4 4 4 4m5-12h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5"
                                    />
                                </svg>

                                <span>Logout</span>
                            </button>

                        </div>
                    )}
                </div>

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
