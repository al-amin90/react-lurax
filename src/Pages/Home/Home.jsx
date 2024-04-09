import React, { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import LuxuryStates from '../../components/LuxuryStates/LuxuryStates';

const Home = () => {
    useEffect(() => {
        document.title = "Home - LURAXRE"
    }, [])
    return (
        <div className='relative'>
            <Banner></Banner>
            <LuxuryStates></LuxuryStates>
        </div>
    );
};

export default Home;