import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import BestClass from './Best Class/BestClass';

const Home = () => {
    return (
        <div className='pt-24'>
            <Banner></Banner>
            <About></About>
            <BestClass></BestClass>
        </div>
    );
};

export default Home;