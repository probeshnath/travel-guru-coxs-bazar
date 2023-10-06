import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import bgImage from '../../../public/images/Rectangle 1.png'
import Swiper from '../../components/Swiper'
import { AuthContext } from '../../components/AuthProvider/AuthContext'


const Home = () => {

const {loading} = useContext(AuthContext)

if(loading){
  return <h2>Loading....</h2>
}

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImage}) ` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex flex-col text-center text-neutral-content">
                    <Navbar />
                    <div className="max-w-md flex gap-4">
                        <div>
                            
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                        <div>
                            <Swiper />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;