import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../public/logo.png';

const Navbar = () => {

    const links = <>
        <li> <NavLink to="/news" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> News </NavLink></li>
        <li> <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Destination </NavLink></li>
        <li> <NavLink to="/blogs" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Blogs </NavLink></li>
        <li> <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> Contact </NavLink></li>
        <li> <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}> <button>Login</button> </NavLink></li>

    </>
    return (
        <div className='max-w-6xl mx-auto' >
                <div className='sticky bg-transparent'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <a className="">
                            <img className='w-[100px]' src={logo} alt="" />
                        </a>
                    </div>
                    <div className="navbar-center ">
                        <div className="form-control w-full">
                            <input type="text" placeholder="Search" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="navbar-end w-full hidden lg:flex">
                        <ul className="menu flex menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
