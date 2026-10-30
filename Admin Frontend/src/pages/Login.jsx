import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login } from "../store/authSlice"
import { useDispatch } from "react-redux"
import axios from "axios";
import loginImage from "../assets/loginImage.png"

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const submit = () => {
        axios.post("http://localhost:3000/api/admin/login", data)
            .then((res) => {
                const responseData = res.data;

                alert(responseData.message);

                if (responseData.token) {
                    
                    const admin = responseData.user;

                    sessionStorage.setItem("token", responseData.token);
                    sessionStorage.setItem("adminData", JSON.stringify(admin));

                    dispatch(login({
                        id:admin._id,
                        name: admin.name,
                        email: admin.email,
                        phone: admin.phone
                    }));
                    navigate("/dashboard");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (

        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full  max-w-lg ">
                <img
                    src={loginImage}
                    alt="Library Management System Admin"
                    className="h-[400px] w-full rounded-l-lg object-cover"
                />
            </div>
            <div className="w-full max-w-md h-100 px-6 py-10 shadow-lg shadow-gray-500 rounded-lg border">
                <h2 className="font-bold text-blue-500 text-3xl mb-5 text-center">
                    Welcom Back
                </h2>
                <h2 className="font-bold text-blue-500 text-2xl mb-5 text-center">
                    Admin Login
                </h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold mb-1">
                        Email
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter email"
                        value={data.email}
                        onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-0 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block font-semibold mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={data.password}
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="button"
                    onClick={submit}
                    className="w-full  bg-blue-700  text-white py-2 mt-2 rounded-md hover:bg-blue-800"
                >
                    Login
                </button>

            </div>
        </div>

    )
}

export default Login
