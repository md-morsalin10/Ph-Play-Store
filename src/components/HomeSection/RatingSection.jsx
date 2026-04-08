import React from 'react';

const RatingSection = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] h-[60vh] text-white flex flex-col justify-center items-center'>
            <div>
                <h2 className='text-center text-3xl font-bold'>Trusted by Millions, Built for You</h2>
            </div>
            <div className='grid grid-cols-3 gap-20 pt-6'> 
                <div className='text-center space-y-2'>
                    <p>Total Downloads</p>
                    <h2 className='font-extrabold text-6xl'>29.6M</h2>
                    <p>21% more than last month</p>
                </div>
                <div className='text-center space-y-2'>
                    <p>Total Reviews</p>
                    <h2 className='font-extrabold text-6xl'>906K</h2>
                    <p>46% more than last month</p>
                </div>
                <div className='text-center space-y-2'>
                    <p>Active Apps</p>
                    <h2 className='font-extrabold text-6xl'>132+</h2>
                    <p>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default RatingSection;