import React, { useEffect } from 'react';
import LuxuryStates from '../../components/LuxuryStates/LuxuryStates';
import Banner2 from '../../components/Banner/Banner2';

const Home = () => {
    useEffect(() => {
        document.title = "Home - LURAXRE"
    }, [])

    return (
        <div className='relative'>
            <Banner2></Banner2>
            <LuxuryStates></LuxuryStates>
        </div>
    );
};

export default Home;