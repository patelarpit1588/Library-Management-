import { useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { login } from '../store/authSlice';
import { useDispatch } from 'react-redux';

function AdminProfile() {

  const dispatch = useDispatch()
  const [tab, setTab] = useState('view');

  const [oldpass, setOldpass] = useState("")
  const [newpass, setNewpass] = useState("")
  const [conpass, setConpass] = useState("")

  const adminData = useSelector((state) => state.auth.userData)

  const adminName = adminData?.name || 'Admin';

  const [editData, setEditData] = useState({
    name: adminData?.name || '',
    email: adminData?.email || '',
    phone: adminData?.phone || ''
  })

  const editProfile = () => {

    axios.put(`http://localhost:3000/api/admin/editprofile/${adminData.id}`, { name: editData.name, email:  editData.email, phone: editData.phone })
    .then((res) => {
      alert(res.data.message)
      dispatch(login({
        id:adminData.id,
        name:editData.name,
        email:editData.email,
        phone:editData.phone
      }))
    })
    .catch((err) => console.log(err))
  }
  const changePass = () => {
    axios.post(`http://localhost:3000/api/admin/getpassword/${adminData.id}`)
      .then((res) => {

        const adminpass = res.data.password

        if (adminpass === oldpass) {
          if (newpass === conpass) {
            axios.put(`http://localhost:3000/api/admin/changepassword/${adminData.id}`, {newPassword: newpass })
              .then((res) => {
                alert(res.data.message)
                setOldpass("")
                setNewpass("")
                setConpass("")
              })
              .catch((err) => console.log(err))
          } else {
            alert("Password and Confirm Password do not match")
          }
        } else {
          alert("Old Password is incorrect")
        }

      })
      .catch((err) => console.log(err))
  }




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
                <div className='flex-1'>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-700">
                    Personal Information
                  </h3>
                  <p className='text-md text-gray-600 font-semibold'>Name :</p>

                  <div className='flex mt-2'>
                    <div className="flex h-15 w-15 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-sm">
                      {adminName.charAt(0).toUpperCase()}
                    </div>


                    <div className="hidden text-left sm:block">
                      <p className="text-lg font-semibold text-gray-800 px-3 py-4">
                        {adminName}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className='text-md mt-9 text-gray-600 font-semibold'>Email :</p>
                    <p className='text-lg font-semibold '>{adminData.email} </p>
                  </div>

                  <div>
                    <p className='text-md mt-10 text-gray-600 font-semibold'>Phone :</p>
                    <p className='text-lg font-semibold '>{adminData.phone} </p>
                  </div>


                </div>
              )}

              {tab === 'edit' && (
                <div>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-700">
                    Edit Profile
                  </h3>

                  <div className='flex flex-col '>
                    <label className='text-md text-gray-600 mt-1 font-semibold' htmlFor='name'>Name:</label>
                    <input
                      type="text"
                      id='name'
                      className="w-1/3 px-2 py-1 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      required
                    />

                    <label className='text-md text-gray-600 mt-8 font-semibold' htmlFor='email'>Email:</label>
                    <input
                      type="text"
                      id='email'
                      className="w-1/3 px-2 py-1 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      value={editData.email}
                      onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      required
                    />

                    <label className='text-md text-gray-600 mt-8 font-semibold' htmlFor='phone'>Phone:</label>
                    <input
                      type="number"
                      id='phone'
                      className="w-1/3 px-2 py-1 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300  [&::-webkit-outer-spin-button]:appearance-none
                             [&::-webkit-inner-spin-button]:appearance-none
                             [appearance:textfield]"
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={editProfile}
                      className="px-4 py-3 rounded-2xl w-1/6 mt-12 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                    >
                      Edit Profile
                    </button>

                  </div>
                </div>
              )}

              {tab === 'password' && (
                <div>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-700">
                    Change Password
                  </h3>

                  <div className='flex flex-col'>

                    <label htmlFor='oldpass' className='text-md text-gray-600 mt-2 font-semibold'>Old Password:</label>
                    <input
                      type='password'
                      id='oldpass'
                      className="w-1/3 px-2 py-1 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      value={oldpass}
                      onChange={(e) => setOldpass(e.target.value)}
                      required
                    />
                    <label htmlFor='newpass' className='text-md text-gray-600 mt-8 font-semibold'>New Password:</label>
                    <input
                      type='password'
                      id='newpass'
                      className="w-1/3 px-2 py-1 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      value={newpass}
                      onChange={(e) => setNewpass(e.target.value)}
                      required
                    />
                    <label htmlFor='conpass' className='text-md text-gray-600 mt-8 font-semibold'>Confirm Password:</label>
                    <input
                      type='password'
                      id='conpass'
                      className="w-1/3 px-2 py-1 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      value={conpass}
                      onChange={(e) => setConpass(e.target.value)}
                      required
                    />

                    <button
                      type="button"
                      onClick={changePass}
                      className="px-2 py-3 rounded-2xl w-1/5 mt-12 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                    >
                      Change Password
                    </button>


                  </div>

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