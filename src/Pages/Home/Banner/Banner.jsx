import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='md:flex justify-between flex-row-reverse'>
            <div className='md:w-4/5'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide><img src="https://i.ibb.co/Cz7bLxJ/Banner-1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/D5wvK2f/2018-11-21-59050-1542791893-large.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/QJBk6c2/Banner-3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/H2HzPVN/Banner-5.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/ZHCCkNv/Banner-4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/r5N73LB/Banner-2.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='md:w-1/3 px-5'>
                <h1 className='uppercase text-xl font-bold bg-orange-400'>Our Language Camp</h1>
                <div className='grid gap-y-2 text-2'>
                    <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Arabic</button>
                    <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Japanese</button>
                    <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >English</button>
                    <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Hindi</button>
                    <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Chainese</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;