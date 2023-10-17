import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Banner = () => {

    return (
        <div>
            <div className='md:flex justify-between flex-row-reverse'>
                <div className='md:w-4/5'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/Cz7bLxJ/Banner-1.jpg" className="w-full rounded-md" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/D5wvK2f/2018-11-21-59050-1542791893-large.jpg" className="w-full rounded-md" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/QJBk6c2/Banner-3.jpg" className="w-full rounded-md" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/H2HzPVN/Banner-5.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/ZHCCkNv/Banner-4.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/r5N73LB/Banner-2.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
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
        </div>
    );
};

export default Banner;