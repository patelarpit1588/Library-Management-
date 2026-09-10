import { useState } from "react";
import bgImage from "../assets/bg_image.avif";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
        phone: "",
    });

    const submit = () => {

        if(data.name === "") return alert("Enter name")
        if(data.email === "") return alert("Enter email")
        if(data.password === "") return alert("Enter password")
        if(data.cpassword === "") return alert("Enter confirm password")
        if(data.password !== data.cpassword) return alert("Confirm password does not match")
        if(data.phone === "") return alert("Enter phone no.")
        if(Number(data.phone.length) != 10) return alert("Phone no. must be of 10 digits only")

        axios.post(`http://localhost:3000/api/users/signup`,{
            name : data.name,
            email : data.email,
            password : data.password,
            phone : data.phone
        })
        .then((res) =>{
            alert(res.data.message)
            navigate("/login")
        })
        .catch((err) => console.log(err))

    };

    return (
        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 w-full max-w-lg mx-4">
                <div className="backdrop-blur-md bg-white/15 border border-white/20 rounded-3xl px-8 py-4 shadow-2xl">
                    <h2 className="text-4xl font-bold text-white text-center mb-2">
                        SignUp
                    </h2>

                    <p className="text-center text-gray-200 mb-8">
                        Fill details to create account
                    </p>
                    <form>
                        <div className="mb-5">
                            <label className="block text-white font-medium mb-2">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={data.name}
                                onChange={(e) =>
                                    setData({ ...data, name: e.target.value })
                                }
                                className="w-full px-4 cursor-pointer py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
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
                                className="w-full px-4 py-3 cursor-pointer rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="mb-5">
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
                        <div className="mb-5">
                            <label className="block text-white font-medium mb-2">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter password again"
                                value={data.cpassword}
                                onChange={(e) =>
                                    setData({ ...data, cpassword: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl cursor-pointer bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-white font-medium mb-2">
                                Phone No.
                            </label>

                            <input
                                type="number"
                                placeholder="Enter password again"
                                value={data.phone}
                                onChange={(e) =>
                                    setData({ ...data, phone: e.target.value })
                                }
                                className="w-full px-4 py-3 rounded-xl cursor-pointer bg-white/20 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 [&::-webkit-outer-spin-button]:appearance-none
                             [&::-webkit-inner-spin-button]:appearance-none
                             [appearance:textfield]"
                            />
                        </div>


                        <button
                            type="button"
                            onClick={submit}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:scale-[1.02] transition duration-300 shadow-lg"
                        >
                            SignUp
                        </button>
                        <div className="mt-5 text-center">
                            <p className="text-gray-200">
                                Already have an account ?{" "}
                                <span
                                    onClick={() => navigate("/login")}
                                    className="text-blue-400 font-semibold cursor-pointer hover:text-blue-300"
                                >
                                    Sign in
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
