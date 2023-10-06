import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import SocialLogin from '../../components/SocialLogin'

const Login = () => {

  const handleLogin = (e) =>{
    e.preventDefault();
    console.log("login")
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
  }
  return (
    <div className='max-w-6xl mx-auto'>
      <Navbar />
      <div className='w-1/2 mx-auto text-center'>
        <h2 className='font-bold text-3xl text-center my-5'>Login</h2>
        <form onSubmit={handleLogin} className='flex flex-col gap-5'>
          <input name='email' type="email" placeholder="Type your Email" className="input input-bordered input-success w-full " />
          <input name='password' type="text" placeholder="Type Password" className="input input-bordered input-success w-full " />
          <button type='submit' className='bg-orange-500 text-white py-3 px5'>Login</button>
        </form>
        <p>Don't have an account? <Link to="/register" className='text-blue-800 font-bold'>Register</Link></p>
      </div>
      <SocialLogin />
    </div>
  )
}

export default Login