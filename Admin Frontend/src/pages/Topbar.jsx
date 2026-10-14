import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink,useNavigate } from 'react-router-dom';

function Topbar() {

    const navigate = useNavigate();
    const [showProfile, setShowProfile] = useState(false);

    const adminData = useSelector((state) => state.auth.userData);

    const adminName = adminData?.name || 'Admin';

    return (
        <div className="relative flex h-20 w-full items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">

            <div className="flex flex-col justify-center">
                <p className="text-sm text-gray-500">
                    Welcome back,
                </p>

                <h2 className="text-lg font-bold text-gray-800">
                    {adminName} 
                </h2>
            </div>

            <div className="flex items-center gap-3">

           
                <div className="relative">

                    <button
                        type="button"
                        onClick={() => setShowProfile((prev) => !prev)}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2 transition hover:bg-gray-50"
                    >
                    
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white shadow-sm">
                            {adminName.charAt(0).toUpperCase()}
                        </div>

                        
                        <div className="hidden text-left sm:block">
                            <p className="text-sm font-semibold text-gray-800">
                                {adminName}
                            </p>

                            <p className="text-xs text-gray-500">
                                Administrator
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
                                to="/admin/profile"
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
        </div>
    );
}

export default Topbar;

