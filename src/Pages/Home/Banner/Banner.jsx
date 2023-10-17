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
        <div className='p-5'>
            <div className='md:flex justify-between flex-row-reverse'>
                <div className='md:w-4/5'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/fSKnF62/Banner-6.jpg" className="w-full rounded-md" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide6" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/QNF0MQy/Banner-1.jpg" className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/jrzgTDs/Banner-2.jpg" className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/yNBQjtr/Banner-3.jpg" className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/XjkPFmb/Banner-1.jpg" className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide6" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide6" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/ZWWYQjT/Banner-4.jpg" className="w-full rounded-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 pr-5'>
                    <h1 className='uppercase text-xl font-bold bg-orange-400 mb-3 pl-2 rounded-tr-full'>Our Language Camp</h1>
                    <div className='grid gap-y-2 text-2 text-lg'>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left rounded-tr-full' >Arabic</button>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Japanese</button>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >English</button>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Benglali</button>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Turkish</button>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Hindi</button>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Urdu</button>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Farshi</button>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left' >Hindi</button>
                        <button className='bg-gray-200 pl-2 hover:bg-gray-300 w-full text-left rounded-br-full' >Chainese</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;