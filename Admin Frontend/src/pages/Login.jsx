import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Login() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const submit = () => {
        axios.post(`http://localhost:3000/api/admin/login`,data)
        .then((res) => {
            const data = res.data

            alert(data.message)
            if(data.token){
                localStorage.setItem("token",data.token)
                navigate("/books")
            }
        })
        .catch((err) => console.log(err))
    }

    return (

        <div className="flex justify-center items-center min-h-screen ">
            <div className="w-full max-w-md p-6 shadow-lg shadow-gray-500 rounded-lg border">
                <h2 className="font-bold text-blue-500 text-3xl mb-5 text-center">
                    Login
                </h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">
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
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">
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
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="button"
                    onClick={submit}
                    className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-500"
                >
                    Login
                </button>

            </div>
        </div>

    )
}

export default Login
