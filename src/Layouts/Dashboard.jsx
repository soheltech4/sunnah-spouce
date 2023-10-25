import React, { useContext } from 'react';
import { FaBars, FaBox, FaHome, FaLayerGroup, FaLocationArrow, FaShoppingCart, FaUser, FaUsers } from 'react-icons/fa';
import { Link, Outlet, useLocation } from 'react-router-dom';
import useCart from '../Hooks/useCart';
import { AuthContext } from '../Provider/AuthProvider';


const Dashboard = () => {

    const [cart] = useCart()
    const location = useLocation()
    const { user } = useContext(AuthContext)

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
            </div>
            <label className="flex-none lg:hidden">
                <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </label>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu text-lg min-h-full bg-purple-200 text-base-content">
                    <div className='p-5 pl-10 grid grid-cols-2 justify-between items-center'>
                        <img src={user?.photoURL} className='w-20 rounded-full items-center pb-2' alt="" />
                        <p className='uppercase font-bold text-2xl'>{user?.displayName}</p>
                    </div>
                    <div>
                        <li>
                            <Link to="myprofile"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === 'dashboard/myprofile' ? 'active-link' : ''}`}>
                                <FaUser className='text-purple-600' />My Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="allclass"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === 'dashboard/allclass' ? 'active-link bg-white' : ''}`}>
                                <FaUsers className='text-purple-600' />All Classes
                            </Link>
                        </li>
                        <li>
                            <Link to="users"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === 'dashboard/users' ? 'active-link bg-white' : ''}`}>
                                <FaUsers className='text-purple-600' />All Users
                            </Link>
                        </li>
                        <li>
                            <Link to="mycart"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/mycart' ? 'active-link bg-white' : ''}`}>
                                <FaShoppingCart className='text-purple-600' />My Cart<span className="badge badge-accent font-bold">{cart?.length || 0}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="addclass"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/addclass' ? 'active-link bg-white' : ''}`}>
                                <FaBox className='text-purple-600' />Add Class
                            </Link>
                        </li>
                        <li>
                            <Link to="myclass"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/myclass' ? 'active-link bg-white' : ''}`}>
                                <FaLayerGroup className='text-purple-600' />My Class
                            </Link>
                        </li>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <li>
                            <Link to="/"
                                className={`px-3 bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/' ? 'active-link bg-white' : ''}`}>
                                <FaHome className='text-purple-600' />Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/allclass"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/allclass' ? 'active-link bg-white bg-opacity-30 ' : ''}`}>
                                <FaBars className='text-purple-600' />All Class
                            </Link>
                        </li>
                        <li>
                            <Link to="contact"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/contact' ? 'active-link bg-white bg-opacity-30 ' : ''}`}>
                                <FaLocationArrow className='text-purple-600' />Contact
                            </Link>
                        </li>
                        <Link to={"/"}><img className='w-64 mt-36 p-5 fixed' src="https://i.ibb.co/dgRsk50/logo.png" alt="" /></Link>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;