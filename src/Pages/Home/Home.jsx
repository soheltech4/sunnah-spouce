import React from 'react';
import Search from './Search/Search';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='pt-24'>
            <Banner></Banner>
            <Search></Search>
        </div>
    );
};

export default Home;