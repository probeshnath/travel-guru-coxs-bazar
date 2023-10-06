import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Contact = () => {
  return (
    <div className='max-w-6xl mx-auto'>
    <Navbar />
    <div className='w-1/2 mx-auto text-center'>
    <h2 className='font-bold text-3xl text-center my-5'>Contact Us</h2>
      <form className='flex flex-col gap-5' >
        <input type="text" name='name' placeholder="Type Name" className="input input-bordered input-success w-full " />
        <input type="email" name='email' placeholder="Type your Email" className="input input-bordered input-success w-full " />
        <input type="text" name='password' placeholder="Type Password" className="input input-bordered input-success w-full " />
        <input type="text" name='photo' placeholder="Enter Photo URL" className="input input-bordered input-success w-full " />
        <button type='submit' className='bg-orange-500 text-white py-3 px5'>Submit</button>
      </form>
    </div>
  </div>
  )
}

export default Contact