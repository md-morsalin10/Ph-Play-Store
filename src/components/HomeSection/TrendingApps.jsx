import React, { use } from 'react';
import TrendingApp from './TrendingApp/TrendingApp';
import { Link } from 'react-router';

const TrendingApps = ({appsPromise}) => {
    const appsData = use(appsPromise);
    // console.log(appsData);
    
    return (
        <div className='container mx-auto pt-20'>
            <div className='text-center space-y-4'>
                <h2 className='text-4xl font-bold text-[#001931] '>Trending Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-6 p-5'>
                {
                    appsData.slice(0,8).map((app, ind)=> <TrendingApp key={ind} app={app}></TrendingApp> )
                }
            </div>
            <div className='flex justify-center items-center'>
                <Link to={"/app"}><button className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>View All</button></Link>
            </div>
        </div> 
    );
};

export default TrendingApps;