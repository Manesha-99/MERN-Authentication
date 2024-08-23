import { useSelector } from 'react-redux'
import React from 'react'

const Profile = () => {
  const {currentUser} = useSelector((state)=> state.user);
  return (
    <div className='max-w-lg p-3 mx-auto'>
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" className="flex flex-col gap-4">
        <img src={currentUser.profilePicture} alt="profile" className='self-center object-contain w-24 h-24 rounded-full cursor-pointer'/>
        <input defaultValue={currentUser.username} type="text" placeholder='Username' id='username' className="p-3 rounded-lg bg-slate-100" />
        <input defaultValue={currentUser.email} type="email" placeholder='Email' id='email' className="p-3 rounded-lg bg-slate-100" />
        <input type="password" placeholder='Password' id='password' className="p-3 rounded-lg bg-slate-100" />
        <button className="p-3 text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-80">Update</button>
      </form>
      <div className="flex justify-between mt-5">
      <span className="text-red-700 cursor-pointer">Delete Account</span>
      <span className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
    </div>
  )
}

export default Profile