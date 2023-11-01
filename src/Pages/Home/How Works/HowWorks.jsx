import React from 'react';
import { FaPhone, FaPhoneVolume, FaSistrix, FaUserPlus } from 'react-icons/fa';

const HowWorks = () => {
    return (
        <div className='md:mt-80 mt-52 mb-32 grid grid-cols-1 items-center justify-center'>
            <h1 className='md:text-5xl text-3xl font-bold text-center px-5'><span className='text-rose-600'>How</span> Sunnah Spouse Works</h1>
            <div className='md:flex gap-5 grid justify-center items-center mt-16 mb-56'>
                <div className='border shadow-md hover:shadow-lg bg-white p-10 bg-opacity-50 rounded-2xl w-72'>
                    <div className='flex justify-center items-center'>
                        <FaUserPlus className='text-8xl text-black'></FaUserPlus>
                    </div>
                    <h1 className='text-black text-center mt-2 text-3xl font-semibold'>Create Biodata</h1>
                    <h1 className='text-black text-center mt-2 font-semibold'>You can easily make biodata with free of cost</h1>
                </div>
                <div className='border shadow-md hover:shadow-lg bg-white p-10 bg-opacity-50 rounded-2xl w-72'>
                    <div className='flex justify-center items-center'>
                        <FaSistrix className='text-8xl text-black'></FaSistrix>
                    </div>
                    <h1 className='text-black text-center mt-2 text-3xl font-semibold'>Search Biodata</h1>
                    <h1 className='text-black text-center mt-2 font-semibold'>Search biodata which type you want</h1>
                </div>
                <div className='border shadow-md hover:shadow-lg bg-white p-10 bg-opacity-50 rounded-2xl w-72'>
                    <div className='flex justify-center items-center'>
                        <FaPhone className='text-8xl text-black'></FaPhone>
                    </div>
                    <h1 className='text-black text-center mt-2 text-3xl font-semibold'>Verify User</h1>
                    <h1 className='text-black text-center mt-2 font-semibold'>We will contact with your guardian and verify</h1>
                </div>
                <div className='border shadow-md hover:shadow-lg bg-white p-10 bg-opacity-50 rounded-2xl w-72'>
                    <div className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/hgMK3ZP/ring-icon.png" className='w-24' alt="" />
                    </div>
                    <h1 className='text-black text-center mt-2 text-3xl font-semibold'>Get Married</h1>
                    <h1 className='text-black text-center mt-2 font-semibold'>After complete all you can get married</h1>
                </div>

            </div>
        </div>
    );
};

export default HowWorks;