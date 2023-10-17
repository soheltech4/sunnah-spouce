import React from 'react';
import { Link } from 'react-router-dom';
import { FaSistrix } from "react-icons/fa";
const Navbar = () => {

    const Nav =
        <>
            <Link to="/" className={`px-3 hover:bg-white hover:text-black rounded hover:duration-1000 ${location.pathname === '/' ? 'active-link font-bold underline text-black' : ''}`}>Home</Link>
            <Link to="/" className={`px-3 hover:bg-white hover:text-black rounded hover:duration-1000 ${location.pathname === '/shop' ? 'active-link text-black' : ''}`}>All Class</Link>
            <Link to="/" className={`px-3 hover:bg-white hover:text-black rounded hover:duration-1000 ${location.pathname === '/blogs' ? 'active-link text-black' : ''}`}>Blogs</Link>
            <Link to="/" className={`px-3 hover:bg-white hover:text-black rounded hover:duration-1000 ${location.pathname === '/about' ? 'active-link text-black' : ''}`}>About Us</Link>
            <Link to="/" className={`px-3 hover:bg-white hover:text-black rounded hover:duration-1000 ${location.pathname === '/contact' ? 'active-link text-black' : ''}`}>Contact</Link>
        </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Nav}
                        </ul>
                    </div>
                    <img className='w-48' src="https://i.ibb.co/dgRsk50/logo.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className=''>
                        <div className='flex text-sm justify-center items-center gap-x-5 '>
                            <p className='underline'>Enroll online or call us (1800) 000 8808</p>
                            <div className="relative">
                                <input type="text" placeholder="Search Languages Class" className="input input-bordered w-full text-sm h-8 pr-16" />
                                <button className="absolute top-0 right-0 rounded-l-none h-8 pr-3"><FaSistrix /></button>
                            </div>
                        </div>
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
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;