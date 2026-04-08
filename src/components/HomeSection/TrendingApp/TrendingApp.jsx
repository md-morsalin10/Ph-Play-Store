import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { MdOutlineStarPurple500 } from 'react-icons/md';

const TrendingApp = ({app}) => {
    // console.log(app);
    
    return (
        <div className='border border-gray-300 bg-base-200 rounded-2xl space-y-2 p-4'>
            <div className='flex justify-center items-center h-55 bg-white rounded-2xl m-2'>
                <img src={app.image} className='h-45 w-45 object-contain' alt="" />
            </div>
            <div>
                <h2 className='text-[#001931] text-xl font-medium'>{app.companyName}</h2>
            </div>
            <div className='flex justify-between'>
                <p className='flex items-center gap-1 text-green-500 font-bold'><FiDownload /> {app.downloads}</p>
                <p className='flex items-center gap-1 text-[#FF8811] font-bold'><MdOutlineStarPurple500 /> {app.ratingAvg}</p>
            </div>
        </div>
    );
};

export default TrendingApp;