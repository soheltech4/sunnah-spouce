import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const location = useLocation()

    const handlelogout = () => {
        logout()
    }

    const Nav =
        <>
            <Link to="/" className={`px-3 hover:font-bold hover:underline hover:duration-5000 ${location.pathname === '/' ? 'active-link font-bold underline text-black' : ''}`}>Home</Link>
            <Link to="/" className={`px-3 hover:font-bold hover:underline hover:duration-5000 ${location.pathname === '/about' ? 'active-link font-bold underline text-black' : ''}`}>About Us</Link>
            <Link to="/" className={`px-3 hover:font-bold hover:underline hover:duration-5000 ${location.pathname === '/blogs' ? 'active-link font-bold underline text-black' : ''}`}>Blogs</Link>
            <Link to="/" className={`px-3 hover:font-bold hover:underline hover:duration-5000 ${location.pathname === '/contact' ? 'active-link font-bold underline text-black' : ''}`}>Contact</Link>
        </>

    return (
        <div className=''>
            <div className="rounded-full bg-purple-50-50 bg-opacity-50 shadow-md z-10 navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Nav}
                        </ul>
                    </div>
                    <img className='w-72' src="https://i.ibb.co/f9pdFJG/logo-copy.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className=''>
                        <div className='justify-center flex'>
                            <ul className="menu menu-horizontal uppercase">
                                {Nav}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-center">
      
                        <div className="dropdown dropdown-end">
                            {user ?
                                <>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle ">
                                        <div className="rounded-full">
                                            <img className='rounded-full' src={user?.photoURL} alt="" />
                                        </div>
                                    </label>

                                </>
                                :
                                <>
                                    <Link to="/login"><p className='flex justify-center items-center' href=""><FaUserCircle className='text-4xl hover:text-purple-700'></FaUserCircle></p></Link>
                                </>

                            }
                            {user ?
                                <>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link to="/dashboard" className="justify-between">
                                                {user?.displayName}
                                            </Link>
                                        </li>
                                        <li><button onClick={handlelogout}>Logout</button></li>
                                    </ul>
                                </>
                                :
                                <>
                                </>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;