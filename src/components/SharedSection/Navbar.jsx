import React from 'react';
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className=' bg-white shadow-sm'>
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/app"}>Apps</NavLink></li>
                            <li><NavLink to={"/installation"}>Installation</NavLink></li>

                        </ul>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={logo} className='w-10 h-10' alt="" />
                        <h2 className='bg-linear-to-r font-bold from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={"/"} className={({isActive})=> isActive && 'bg-linear-to-r font-bold from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'}>Home</NavLink></li>

                        <li><NavLink className={({isActive})=> isActive && 'bg-linear-to-r font-bold from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'} to={"/app"}>Apps</NavLink></li>

                        <li><NavLink className={({isActive})=> isActive && 'bg-linear-to-r font-bold from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'} to={"/installation"}>Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='bg-linear-to-tr from-[#632EE3] to-[#9F62F2] text-white font-bold btn'> <FaGithub />Contribute</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;