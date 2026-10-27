import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, BookOpen, } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

function ContactUs() {

    const navigate = useNavigate();

    const userData = useSelector((state)=> state.auth.userData)

    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const submit = () => {
        axios.post(`http://localhost:3000/api/query/createquery`, {
            name: userData.name,
            email: userData.email,
            subject: data.subject,
            message: data.message,
        })
            .then((res) => {
                alert(res.data.message)
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="flex-1 min-h-screen bg-gray-100 px-4 py-3 sm:px-8 lg:px-16">

                {/* Page Heading */}
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        Get in Touch with{" "}
                        <span className="text-green-700">Us</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                        Have a question or need help? We are here to assist you.
                        Send us your query and our library team will get back to you.
                    </p>

                    <div className="mx-auto mt-6 flex items-center justify-center gap-3">
                        <div className="h-1 w-12 rounded-full bg-green-700" />
                        <BookOpen size={25} className="text-green-700" />
                        <div className="h-1 w-12 rounded-full bg-green-700" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-5">

                    {/* Contact Information */}
                    <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
                        <h2 className="text-2xl font-bold text-slate-900">
                            Contact Information
                        </h2>

                        <p className="mt-3 leading-7 text-gray-500">
                            Feel free to contact us for any questions, suggestions,
                            or assistance regarding our Library Management System.
                        </p>

                        <div className="mt-8 space-y-5">

                            {/* Email */}
                            <ContactItem
                                icon={<Mail size={23} />}
                                title="Email Us"
                                detail="support@librarysystem.com"
                            />

                            {/* Phone */}
                            <ContactItem
                                icon={<Phone size={23} />}
                                title="Call Us"
                                detail="+91 98765 43210"
                            />

                            {/* Address */}
                            <ContactItem
                                icon={<MapPin size={23} />}
                                title="Our Address"
                                detail="Surat, Gujarat, India"
                            />

                            {/* Working Hours */}
                            <ContactItem
                                icon={<Clock size={23} />}
                                title="Working Hours"
                                detail={
                                    <>
                                        Monday - Saturday
                                        <br />
                                        9:00 AM - 6:00 PM
                                        <br />
                                        Sunday Closed
                                    </>
                                }
                            />
                        </div>

                        {/* Support Note */}
                        <div className="mt-8 rounded-2xl bg-green-50 p-5">
                            <div className="flex items-start gap-3">
                                <div className="rounded-xl bg-green-100 p-2 text-green-700">
                                    <MessageSquare size={22} />
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        Need Help?
                                    </h3>

                                    <p className="mt-1 text-sm leading-6 text-gray-600">
                                        Send us a message using the contact form.
                                        We will be happy to help you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900">
                                Send Us a Message
                            </h2>

                            <p className="mt-3 leading-7 text-gray-500">
                                Fill out the form below and let us know how we can help.
                            </p>
                        </div>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                submit();
                            }}
                            className="mt-8 space-y-6"
                        >
                            {/* Subject */}
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Subject <span className="text-red-500">*</span>
                                </label>

                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={data.subject}
                                    onChange={(e) => setData({ ...data, subject: e.target.value })}
                                    required
                                    placeholder="What is your message about?"
                                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-4 focus:ring-green-50"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-slate-700"
                                >
                                    Your Message <span className="text-red-500">*</span>
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={data.messsage}
                                    onChange={(e) => setData({ ...data, message: e.target.value })}
                                    required
                                    rows={6}
                                    placeholder="Write your message here..."
                                    className="w-full resize-y rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-4 focus:ring-green-50"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-700 px-6 py-4 font-semibold text-white shadow-md shadow-green-700/10 transition duration-300 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-200"
                            >
                                <Send size={19} />
                                Send Message
                            </button>

                            <p className="text-center text-xs text-gray-400">
                                We appreciate your feedback and suggestions.
                            </p>
                        </form>
                <div className="mx-auto mt-10 max-w-7xl">
                    <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
                        <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                                <MessageSquare size={27} />
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                                    Already submitted a query?
                                </h3>

                                <p className="mt-2 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                                    Check your previous queries, track their status, and view
                                    replies from the library administrator.
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => navigate("/myqueries")}
                            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 sm:w-auto"
                        >
                            <MessageSquare size={19} />
                            View My Queries
                        </button>
                    </div>
                </div>
                    </div>
                </div>
            </div>

            {/* My Queries Redirect Section */}


            <div>
                <Footer />
            </div>
        </div>
    );
};

/* Contact Information Item */
const ContactItem = ({ icon, title, detail }) => {
    return (
        <div className="flex items-start gap-4 rounded-2xl bg-[#f5f9f6] p-4 transition hover:bg-green-50">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-700 text-white shadow-sm">
                {icon}
            </div>

            <div className="min-w-0 pt-1">
                <h3 className="font-bold text-slate-900">{title}</h3>

                <div className="mt-1 break-words text-sm leading-6 text-gray-600">
                    {detail}
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
