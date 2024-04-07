import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        // 
        <div className='bg-gradient-to-r from-[#838592] font-work to-[#EAF2F5]'>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;