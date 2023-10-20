import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import { FaCheckCircle } from "react-icons/fa";

const About = () => {
    return (
        <div className='grid md:grid-cols-2 mt-20 mb-20 p-5 md:p-16 justify-center items-center'>
            <div className='md:flex justify-between md:gap-x-20'>
                <div className='md:w-3/4 text-center md:text-left pb-5'>
                    <h1 className='text-3xl font-bold pb-5'>WE ARE THE BEST <span className='text-purple-700'>SUMMER CAMP!</span></h1>
                    <p className='text-lg'>Foreign Language Camp is for Boys and Girls.
                        Nestled on the sandy beaches of beautiful Lake Ossipee amidst the White Mountains of New Hampshire, Camp offers a summer experience rich in fun, friendship, learning and adventure. Campers range in age from seven to fifteen.</p>
                </div>
                <div className='pb-5 w-1/2'>
                    <h1 className='text-3xl font-bold text-center md:text-left pb-5'>FACILITIES</h1>
                    <div className='text-md'>
                        <p className='flex items-center gap-x-1 pb-2'><FaCheckCircle className='text-orange-600' />BOYS & GIRLS</p>
                        <p className='flex items-center gap-x-1 pb-2'><FaCheckCircle className='text-orange-600' />AGES 7-15</p>
                        <p className='flex items-center gap-x-1 pb-2'><FaCheckCircle className='text-orange-600' />TEAM & INDIVIDUAL LEARNING</p>
                        <p className='flex items-center gap-x-1 pb-2'><FaCheckCircle className='text-orange-600' />PERFORMING & CREATIVE</p>
                        <p className='flex items-center gap-x-1 pb-2'><FaCheckCircle className='text-orange-600' />WATERFRONT ACTIVITIES</p>
                        <p className='flex items-center gap-x-1 pb-2'><FaCheckCircle className='text-orange-600' />SPECIAL EVENTS & TRIPS</p>
                        <p className='flex items-center gap-x-1'><FaCheckCircle className='text-orange-600' />PROFESSIONAL STAFF</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co/D7GqdKL/1.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co/1zH7bqv/2.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co/NycQPt7/7.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co/vY8d2WS/6.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co/g7Kv4g2/3.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co/NtYJqb4/4.jpg" alt="" /> </SwiperSlide>
                    <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co/GsVC6DF/5.jpg" alt="" /> </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default About;