import { useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

function AdminProfile() {
  const [tab, setTab] = useState('view');

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Sidebar />

      <div className="min-w-0 flex-1">
        <Topbar />

        {/* Centered Main Content */}
        <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8">

          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              Admin Profile
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              View your details, edit your profile, or change your password.
            </p>

            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
          </div>

          {/* Tabs */}
          {/* Tabs */}
          <div className="mb-6 w-full">
            <div className="grid w-full grid-cols-3 gap-2 rounded-xl border border-gray-200 bg-white p-2 shadow-sm">

              {[
                ['view', 'View Profile'],
                ['edit', 'Edit Profile'],
                ['password', 'Change Password'],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  className={`min-w-0 rounded-lg px-2 py-3 text-xs font-semibold transition-all duration-200 sm:px-4 sm:py-3.5 sm:text-sm ${tab === key
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                >
                  {label}
                </button>
              ))}

            </div>
          </div>
          {/* Profile Content Box */}
          <div className="w-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">

          

            {/* Card Body */}
            <div className="p-6 sm:p-8">

              {tab === 'view' && (
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-700">
                    Personal Information
                  </h3>

                  {/* Add your admin profile details here */}
                  <p className="text-sm text-gray-500">
                    Your profile information will appear here.
                  </p>
                </div>
              )}

              {tab === 'edit' && (
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-700">
                    Edit Profile
                  </h3>

                  {/* Add your edit profile form here */}
                  <p className="text-sm text-gray-500">
                    Update your personal information here.
                  </p>
                </div>
              )}

              {tab === 'password' && (
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-gray-700">
                    Change Password
                  </h3>

                  {/* Add your password change form here */}
                  <p className="text-sm text-gray-500">
                    Update your account password here.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AdminProfile;