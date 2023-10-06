import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import  { AuthContext } from '../../components/AuthProvider/AuthContext'

const Blogs = () => {
  const {user}= useContext(AuthContext);
  console.log("user here", user)
  return (
    <div className='max-w-6xl mx-auto text-center'>
      <Navbar />
      <div className='w-1/3 mx-auto items-center '>
        <img className='w-30 h-30 rounded-full mx-auto' src={user?.photoURL} alt="" />
        <h2>User : <span className='text-orange-500 font-bebas text-lg pb-3'>{user?.displayName}</span> </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sapiente reprehenderit ipsa amet! Eligendi id aperiam dignissimos suscipit blanditiis quidem.</p>
        <button className='font-bold text-3xl text-blue-700 py-2'>Email: {user?.email}</button>
      </div>
    </div>
  )
}

export default Blogs