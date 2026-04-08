import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import hero from "../../assets/hero.png"

const Banner = () => {
    return (
        <div className='text-center space-y-6 pt-14'>
            <h2 className='text-5xl text-[#001931] font-bold'>We Build <br /> <span className='bg-linear-to-r font-bold from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h2>

            <p className='max-w-[50%] mx-auto text-[#627382]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className=''>
                <button className='btn mr-2 bg-linear-to-tr from-[#632EE3] to-[#9F62F2] text-white '><FaGooglePlay /> Google Play</button>
                <button className='btn bg-linear-to-tr from-[#632EE3] to-[#9F62F2] text-white '><FaAppStoreIos /> App Store</button>
            </div>
            <div className='flex justify-center'>
                <img src={hero} alt="" />
            </div>
        </div>
    );
};

export default Banner;