import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import BestClass from './Best Class/BestClass';
import Instructor from './Instructor/Instructor';

const Home = () => {
    return (
        <div className='pt-24'>
            <Banner></Banner>
            <About></About>
            <BestClass></BestClass>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;