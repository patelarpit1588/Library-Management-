import { useState } from "react";
import bgImage from "../assets/bg_image.avif";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const submit = () => {
        axios.post(`http://localhost:3000/api/users/login`,{
            email : data.email,
            password : data.password
        })
        .then((res) =>{
            alert(res.data.message)

            if(res.data.token){ 
                localStorage.setItem("token" , res.data.token)
                navigate("/")
            }
})
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 w-full max-w-md mx-4">
                <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-3xl p-8 shadow-2xl">
                    <h2 className="text-4xl font-bold text-white text-center mb-2">
                        Welcome Back
                    </h2>

                    <p className="text-center text-gray-200 mb-8">
                        Sign in to continue
                    </p>

                    <div className="mb-5">
                        <label className="block text-white font-medium mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl cursor-pointer bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-white font-medium mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl cursor-pointer bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>


                    <button
                        type="button"
                        onClick={submit}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:scale-[1.02] transition duration-300 shadow-lg"
                    >
                        Login
                    </button>
                    <div className="mt-5 text-center">
                        <p className="text-gray-200">
                            Don't have an account?{" "}
                            <span
                                onClick={() => navigate("/signup")}
                                className="text-blue-400 font-semibold cursor-pointer hover:text-blue-300"
                            >
                                Sign Up
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;