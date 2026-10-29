import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

function Reply() {

    const navigate = useNavigate();
    const location = useLocation();
    const query = location.state?.query

    const [replyMsg,setReplyMsg] = useState(query.reply || "")


    const sendReply = () =>{
        axios.put(`http://localhost:3000/api/query/replyquery/${query._id}`,{reply:replyMsg})
        .then((res) => {
            alert(res.data.message)
            navigate("/queries")
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-indigo-50 px-6 py-8">
            {/* Header */}
            <div className="flex justify-end">
                <div onClick={() => navigate("/queries")} className="flex justify-center bg-red-600 w-15 px-3 py-2 text-white text-lg border rounded-2xl hover:bg-red-500">
                    <svg className="w-7 h-7 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                    </svg>

                </div>
            </div>
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800">Reply Query</h2>

                <div className="flex justify-center mt-4">
                    <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-3xl px-8 py-8 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-gray-100">
                    <form>
                        <label htmlFor='subject' className="font-semibold text-lg text-gray-700">Subject</label>
                        <input
                        type='text'
                        id='subject'
                        value={query.subject}
                        className="w-full px-4 py-3 mt-1 border bg-gray-200 border-gray-300 rounded-lg mb-3"        
                        disabled
                        />
                        
                        <label htmlFor='msg' className='text-gray-700 font-semibold text-lg '>Query Message</label>
                        <textarea
                        id='msg'
                        rows={5}
                        value={query.message}
                        disabled
                        className= 'w-full bg-gray-200 px-4 py-3 mt-1 border border-gray-300 rounded-lg mb-3'
                        />
                        <label htmlFor='reply' className='text-gray-700 font-semibold text-lg '>Reply Message</label>
                        <textarea
                        id='reply'
                        rows={5}
                        value={replyMsg}
                        onChange={(e) => setReplyMsg(e.target.value)} 
                        className= 'w-full px-4 py-3 mt-1 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300'
                        />
                    </form>

                    <button 
                    type="button"
                    onClick={sendReply}
                    className='px-4 py-3 bg-blue-500 rounded-2xl text-white text-md hover:bg-blue-600 font-semibold   '
                    >Send Reply
                    </button>
                    <br />
                </div>

            </div>


        </div>
    )
}

export default Reply
