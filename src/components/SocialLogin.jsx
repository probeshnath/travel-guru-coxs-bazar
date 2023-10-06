import React, { useContext } from 'react'
import {FaGoogle,FaFacebook,FaGithub,FaTwitter} from 'react-icons/fa'
import { AuthContext } from './AuthProvider/AuthContext';

const SocialLogin = () => {
  const {googleLogin} = useContext(AuthContext);

  const handleGoogleLogin = () =>{
    googleLogin()
    .then((result) =>{
      console.log(result.user)
    })
    .catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className=' mt-5 flex justify-center gap-3'>
        <button onClick={handleGoogleLogin} className='border px-3 py-2 rounded-lg flex items-center gap-3'><FaGoogle /> Google</button>
        <button className='border px-3 py-2 rounded-lg flex items-center gap-3'><FaFacebook /> Facebook</button>
        <button className='border px-3 py-2 rounded-lg flex items-center gap-3'><FaGithub /> Github</button>
        <button className='border px-3 py-2 rounded-lg flex items-center gap-3'><FaTwitter /> Twitter</button>
    </div>
  )
}

export default SocialLogin