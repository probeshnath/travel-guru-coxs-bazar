import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import SocialLogin from '../../components/SocialLogin'
import { AuthContext } from '../../components/AuthProvider/AuthContext'


const Register = () => {
  const {register} = useContext(AuthContext)

  const handleregister = (e) =>{
    e.preventDefault();
    console.log("clicked")
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(name , email, password, photo)
    register(email,password)
    .then((result) =>{
      console.log(result.user)
    })
    .catch((error) =>{
      console.log(error)
    })
  }
  return (
    <div className='max-w-6xl mx-auto'>
    <Navbar />
    <div className='w-1/2 mx-auto text-center'>
    <h2 className='font-bold text-3xl text-center my-5'>Register</h2>
      <form className='flex flex-col gap-5' onSubmit={handleregister}>
        <input type="text" name='name' placeholder="Type Name" className="input input-bordered input-success w-full " />
        <input type="email" name='email' placeholder="Type your Email" className="input input-bordered input-success w-full " />
        <input type="text" name='password' placeholder="Type Password" className="input input-bordered input-success w-full " />
        <input type="text" name='photo' placeholder="Enter Photo URL" className="input input-bordered input-success w-full " />
        <button type='submit' className='bg-orange-500 text-white py-3 px5'>Register</button>
      </form>
      <p>Already have an account? <Link to="/login" className='text-blue-800 font-bold'>Login</Link></p>
    </div>
    <SocialLogin />
  </div>
  )
}

export default Register