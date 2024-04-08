import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <li><Link className='text-white bg-[#0c102296] font-bold shadow-xl py-2 px-4 rounded border border-gray-500' to="/">Home</Link></li>
        <li><Link className='text-white py-2 px-4' to="/">Update</Link></li>
        <li><Link className='text-white py-2 px-4' to="/">User</Link></li>
    </>


    return (
        <div className='max-w-7xl w-11/12 mx-auto'>
            <div className="navbar  pb-5 pt-7 px-0">
                <div className="navbar-start">
                    <div className="dropdown  z-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-bg-black rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="text-xl text-white font-bold font-montserrat">LURAX<span className='font-normal'>RE</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-4 menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className='flex items-center justify-end'>
                        <div className="dropdown dropdown-end mr-5">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-15 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <Link to="/login">
                            <button className="py-3 hover:bg-[#0c1022c2] px-7 rounded-md border-none text-white bg-[#0C1022]">Login</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;