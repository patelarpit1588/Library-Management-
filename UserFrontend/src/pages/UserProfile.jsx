import {useEffect,useState} from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { login } from '../store/authSlice';
import { useDispatch } from 'react-redux';

function UserProfile() {

  const dispatch = useDispatch();
   const [tab, setTab] = useState('view');

  const [oldpass, setOldpass] = useState("")
  const [newpass, setNewpass] = useState("")
  const [conpass, setConpass] = useState("")


  const userData = useSelector((state) => state.auth.userData)
  const userName = userData.name;

  const [editData,setEditData] = useState({
    name: userData?.name || '',
    email: userData?.email || '',
    phone: userData?.phone || ''
  })

    const editProfile = () => {

    axios.put(`http://localhost:3000/api/users/editprofile/${userData.id}`, { name: editData.name, email:  editData.email, phone: editData.phone })
    .then((res) => {
      alert(res.data.message)
      dispatch(login({
        id:userData.id,
        name:editData.name,
        email:editData.email,
        phone:editData.phone
      }))
      setTab("view")
    })
    .catch((err) => console.log(err))
  }
  const changePass = () => {
    axios.post(`http://localhost:3000/api/users/getpassword/${userData.id}`)
      .then((res) => {

        const userPass = res.data.password

        if (userPass === oldpass) {
          if (newpass === conpass) {
            axios.put(`http://localhost:3000/api/users/changepassword/${userData.id}`, {newPassword: newpass })
              .then((res) => {
                alert(res.data.message)
                setOldpass("")
                setNewpass("")
                setConpass("")
                setTab("view")
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
        <div className="flex min-h-screen flex-col">

        <Navbar />
      <div className="flex-1 mx-auto w-full max-w-4xl px-4 py-10 sm:px-8">

          {/* Page Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
              User Profile
            </h1>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              View your details, edit your profile, or change your password.
            </p>

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
                    ? 'bg-green-700 text-white shadow-md'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-green-700'
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
               <div>
                    <p className='text-md mt-9 text-gray-600 font-semibold'>Name :</p>
                    <p className='text-lg font-semibold '>{userData.name} </p>
                  </div>

                  <div>
                    <p className='text-md mt-9 text-gray-600 font-semibold'>Email :</p>
                    <p className='text-lg font-semibold '>{userData.email} </p>
                  </div>

                  <div>
                    <p className='text-md mt-10 text-gray-600 font-semibold'>Phone :</p>
                    <p className='text-lg font-semibold '>{userData.phone} </p>
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
                      className="px-4 py-3 rounded-2xl w-1/6 mt-12 text-white bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
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
                      className="px-2 py-3 rounded-2xl w-1/5 mt-12 text-white bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
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
      <Footer />
    </div>
  )
}

export default UserProfile
