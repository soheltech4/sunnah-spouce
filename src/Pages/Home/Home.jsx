import React from 'react';
import Banner from './Banner/Banner';
import CreateBiodata from './Create Biodata/CreateBiodata';
import Statistics from './Statistics/Statistics';

const Home = () => {
    return (
        <div className='pt-24'>
            <Banner></Banner>
            <CreateBiodata></CreateBiodata>
            <Statistics></Statistics>
        </div>
    );
};

export default Home;