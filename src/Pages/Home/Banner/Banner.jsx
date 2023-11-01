import React from 'react';
import Search from '../Search/Search';

const Banner = () => {
    return (
        <div className='text-center'>
            <img className='absolute opacity-60' src="https://i.ibb.co/bsd1gx2/Banner.png" alt="" />
            <div className='grid justify-center relative top-0 md:top-10 p-5 items-center'>
                <h1 className='md:text-7xl text-center text-4xl font-bold'>Bangladesh Islamic <br /> <span className='text-rose-600'>Matrimony</span></h1>
                <h1 className='text-2xl pt-10'>It is now easy to find a religious life partner in your own district</h1>
                <h1 className='mt-32 mb-32 md:mx-96 border text-xl shadow-md hover:shadow-lg rounded-xl p-5 bg-white bg-opacity-50 text-black'><span className='text-3xl font-bold'>"</span>When a person gets married he has completed half of this dee, so let him fear Allah with regard to the other half<span className='text-3xl font-bold'>"</span> <br /> <span className='text-rose-600'>-(Shu'ab al-Eman 5486)</span> </h1>
            </div>
            <Search></Search>
        </div>
    );
};

export default Banner;