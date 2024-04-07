import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        // 
        <div className='bg-gradient-to-r from-[#0C1022] font-work to-[#838592]'>
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default Root;