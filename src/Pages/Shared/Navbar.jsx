import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth()

    const navLinks = <>
        <li><NavLink
            className={({ isActive }) => isActive ? 'text-white bg-[#0c102296] font-bold shadow-xl py-2 px-4 rounded border border-gray-500' : 'text-white py-2 px-4'} to="/">Home</NavLink></li>
        <li><NavLink
            className={({ isActive }) => isActive ? 'text-white bg-[#0c102296] font-bold shadow-xl py-2 px-4 rounded border border-gray-500' : 'text-white py-2 px-4'} to="/update">Update</NavLink></li>
        <li><NavLink
            className={({ isActive }) => isActive ? 'text-white bg-[#0c102296] font-bold shadow-xl py-2 px-4 rounded border border-gray-500' : 'text-white py-2 px-4'} to="user">User</NavLink></li>
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
                    <div className=' justify-end'>
                        {
                            user ? <div className='flex items-center'>
                                <div className="dropdown dropdown-end mr-5">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mt-2 avatar">
                                        <div className="w-16 rounded-full">
                                            <img alt="user img" className='' src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                        <li><a>Logout</a></li>
                                        <li><a>Logout</a></li>
                                    </ul>
                                </div>
                                <Link>
                                    <button onClick={() => logout()} className="py-3 hover:bg-[#0c1022c2] px-7 rounded-md border-none text-white bg-[#0C1022]">log Out</button>
                                </Link>
                            </div>
                                : <Link to="/login">
                                    <button className="py-3 hover:bg-[#0c1022c2] px-7 rounded-md border-none text-white bg-[#0C1022]">Login</button>
                                </Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;