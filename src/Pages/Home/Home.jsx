import React from 'react';
import Banner from '../../components/Banner/Banner';
import LuxuryStates from '../../components/LuxuryStates/LuxuryStates';

const Home = () => {
    return (
        <div className='relative'>
            <Banner></Banner>
            <LuxuryStates></LuxuryStates>
        </div>
    );
};

export default Home;