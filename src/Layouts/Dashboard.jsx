import React, { useContext } from 'react';
import { FaCog, FaRegEdit, FaUser, FaUsers } from 'react-icons/fa';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Dashboard = () => {

    const location = useLocation()
    const {user} = useContext(AuthContext)
    console.log(user)

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
                <ul className="menu text-lg min-h-full text-base-content">
                    <div className='p-5 pl-10 grid grid-cols-1 justify-between items-center'>
                        <img src={user?.photoURL} className='w-20 rounded-full justify-center items-center' alt="" />
                    </div>
                    <div>
                        <li>
                            <Link to="myprofile"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/myprofile' ? 'active-link bg-white' : ''}`}>
                                <FaUser className='text-purple-600' />My Prfile
                            </Link>
                        </li>
                        <li>
                            <Link to="edit-biodata"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === '/dashboard/edit-biodata' ? 'active-link bg-white' : ''}`}>
                                <FaRegEdit className='text-purple-600' />Edit Biodata
                            </Link>
                        </li>
                        <li>
                            <Link to="setting"
                                className={`px-3  bg-opacity-20 rounded hover:duration-1000 
                            ${location.pathname === 'dashboard/setting' ? 'active-link bg-white' : ''}`}>
                                <FaCog className='text-purple-600' />Setting
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;