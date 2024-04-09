import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import useAuth from '../Hooks/useAuth';
import Loader from '../Pages/Loader/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Root = () => {
    const { loading } = useAuth()

    return (
        <div className='bg-gradient-to-r from-[#0C1022] font-work to-[#1ABA9B]'>
            <Navbar></Navbar>
            {
                loading ? <Loader></Loader> : <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Root;