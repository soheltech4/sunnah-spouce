import React from 'react';

const Statistics = () => {
    return (
        <div className=''>
            <h1 className='md:text-5xl text-3xl text-center font-bold'><span className='text-rose-600'>Sunnah Spouse </span>User Statistics</h1>
            <div className='md:flex grid gap-5 justify-center items-center mt-16 mb-56'>
                <div className='border shadow-md hover:shadow-lg bg-white p-10 bg-opacity-50 rounded-2xl w-72'>
                    <div className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/QYybbm4/male-icon.png" className='w-20 relative left-2 bg-white border rounded-full border-black p-1' alt="" />
                        <img src="https://i.ibb.co/gdh5Rb4/female-icon.png" className='w-20 border rounded-full bg-white border-black p-1' alt="" />
                    </div>
                    <h1 className='text-black text-center mt-2 text-xl font-semibold'>Total Biodatas</h1>
                    <h1 className='text-black text-center mt-2 text-5xl font-semibold'>3,058</h1>
                </div>
                <div className='border shadow-md hover:shadow-lg bg-white p-10 bg-opacity-50 rounded-2xl w-72'>
                    <div className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/QYybbm4/male-icon.png" className='w-20 relative left-2 bg-white border rounded-full border-black p-1' alt="" />
                    </div>
                    <h1 className='text-black text-center mt-2 text-xl font-semibold'>Male Biodatas</h1>
                    <h1 className='text-black text-center mt-2 text-5xl font-semibold'>1,558</h1>
                </div>
                <div className='border shadow-md hover:shadow-lg bg-white p-10 bg-opacity-50 rounded-2xl w-72'>
                    <div className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/gdh5Rb4/female-icon.png" className='w-20 border rounded-full bg-white border-black p-1' alt="" />
                    </div>
                    <h1 className='text-black text-center mt-2 text-xl font-semibold'>Female Biodatas</h1>
                    <h1 className='text-black text-center mt-2 text-5xl font-semibold'>1,500</h1>
                </div>
                <div className='border shadow-md hover:shadow-lg bg-white p-10 bg-opacity-50 rounded-2xl w-72'>
                    <div className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/hgMK3ZP/ring-icon.png" className='w-20 relative bg-white border rounded-full border-black p-1 ' alt="" />
                    </div>
                    <h1 className='text-black text-center text-xl mt-2 font-semibold'>Successfull Marriage</h1>
                    <h1 className='text-black text-center mt-2 text-5xl font-semibold'>500</h1>

                </div>
            </div>
        </div>
    );
};

export default Statistics;