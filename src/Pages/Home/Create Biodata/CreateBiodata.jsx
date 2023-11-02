import React from 'react';
import { Link } from 'react-router-dom';

const CreateBiodata = () => {
    return (
        <div className='md:mt-80 mt-36 md:mb-80 mb-36 grid grid-cols-1 items-center justify-center'>
            <h1 className='md:text-5xl text-3xl font-bold text-center px-5'><span className='text-rose-600'>Create Your Biodata</span> in Our Website completely free of cost</h1>
            <div className='flex gap-2 justify-center items-center'>
                <Link to="/dashboard" href="#_" class="mt-16 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span class="relative text-white md:text-4xl md:p-5"> + Create Your Biodata</span>
                </Link>            
            </div>
        </div>
    );
};

export default CreateBiodata;