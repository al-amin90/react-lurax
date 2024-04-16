import React, { useEffect } from 'react';
import LuxuryStates from '../../components/LuxuryStates/LuxuryStates';
import Banner2 from '../../components/Banner/Banner2';
import JoinUs from '../../components/JoinUs/JoinUs';
import FAQ from '../../components/FAQ/FAQ';

const Home = () => {
    useEffect(() => {
        document.title = "Home - LURAXRE"
    }, [])

    return (
        <div className='relative bg-white'>
            <Banner2></Banner2>
            <LuxuryStates></LuxuryStates>
            <JoinUs></JoinUs>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;