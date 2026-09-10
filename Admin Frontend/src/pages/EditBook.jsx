import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"

function Books() {

    const navigate = useNavigate();

    const id = useParams().id;

    const [previmage, setPrevImage] = useState(null)
    const [newImage , setNewImage] = useState(null)
    const [data, setData] = useState({
        title: "",
        author: "",
        category: "",
        quantity: "",
        discription: "",
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/api/book/singlebook/${id}`)
            .then((res) => {
                setData(res.data);
                setPrevImage(res.data.image_url);
            })
            .catch((err) => console.log(err))
    }, [])


    const editBook = () => {
        const formData = new FormData();

        formData.append("title", data.title);
        formData.append("author", data.author);
        formData.append("category", data.category);
        formData.append("quantity", data.quantity);
        formData.append("discription", data.discription);

        if (newImage) {
      formData.append("image", newImage);
    }

        axios.put(`http://localhost:3000/api/book/editbook/${id}`, formData)
            .then((res) => {
                alert("Book Updates Successfuly")
                navigate("/books")
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-indigo-50 px-6 py-8">
            {/* Header */}
            <div className="flex justify-end">
                <div onClick={() => navigate("/books")} className="flex justify-center bg-red-600 w-15 px-3 py-2 text-white text-lg border rounded-2xl hover:bg-red-500">
                    <svg className="w-7 h-7 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                    </svg>

                </div>
            </div>
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Edit Book</h2>

                <div className="flex justify-center mt-4">
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>
            </div>

            {/* Form Container */}
            <div className="flex justify-center">
                <div className="w-full max-w-3xl px-8 py-8 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100">
                    <form>
                        {/* Title & Author */}
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="w-full">
                                <label
                                    htmlFor="title"
                                    className="font-semibold text-lg text-gray-700"
                                >
                                    Title
                                </label>
                                <input
                                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData({ ...data, title: e.target.value })
                                    }
                                    id="title"
                                    placeholder="Enter title"
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <label
                                    htmlFor="author"
                                    className="font-semibold text-lg text-gray-700"
                                >
                                    Author
                                </label>
                                <input
                                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                    value={data.author}
                                    onChange={(e) =>
                                        setData({ ...data, author: e.target.value })
                                    }
                                    id="author"
                                    placeholder="Enter Author"
                                    required
                                />
                            </div>
                        </div>

                        {/* Category & Quantity */}
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="w-full">
                                <label
                                    htmlFor="cat"
                                    className="font-semibold text-lg text-gray-700"
                                >
                                    Category
                                </label>
                                <input
                                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                    value={data.category}
                                    onChange={(e) =>
                                        setData({ ...data, category: e.target.value })
                                    }
                                    id="cat"
                                    placeholder="Enter category"
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <label
                                    htmlFor="qnt"
                                    className="font-semibold text-lg text-gray-700"
                                >
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300  [&::-webkit-outer-spin-button]:appearance-none
                             [&::-webkit-inner-spin-button]:appearance-none
                             [appearance:textfield]"
                                    value={data.quantity}
                                    onChange={(e) =>
                                        setData({ ...data, quantity: e.target.value })
                                    }
                                    id="qnt"
                                    placeholder="Enter Quantity"
                                    required
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <label
                                htmlFor="dis"
                                className="font-semibold text-lg text-gray-700"
                            >
                                Description
                            </label>

                            <textarea
                                rows="5"
                                id="dis"
                                placeholder="Enter brief description about book"
                                value={data.discription}
                                onChange={(e) =>
                                    setData({ ...data, discription: e.target.value })
                                }
                                className="w-full px-4 py-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                            />
                        </div>

                        {/* File Upload */}
                        <div className="flex gap-6 mb-6">
                            <div className="w-full">
                                <p className="text-lg font-semibold text-gray-700" >Old coverpage :</p>
                                <img
                                    src={`http://localhost:3000/images/${previmage}`}
                                    className="w-80 h-60 cover border rounden-xl"
                                />
                            </div>

                            <div className="w-full">
                                <p className="text-lg font-semibold text-gray-700 mb-2">
                                    Upload the coverpage of book   <br />
                                    (If you want to change)
                                </p>

                                <input
                                    type="file"
                                    onChange={(e) => setNewImage(e.target.files[0])}
                                    className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-all duration-300 bg-gray-50"
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={editBook}
                                className="px-8 py-3 rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                            >
                                Edit Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Books;