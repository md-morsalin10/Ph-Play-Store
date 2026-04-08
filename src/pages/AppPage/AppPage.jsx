import React from 'react';
import { Link, useLoaderData } from 'react-router';
import TrendingApp from '../../components/HomeSection/TrendingApp/TrendingApp';

const AppPage = () => {
    const appsData = useLoaderData()
    // console.log("apps", appsData);

    return (
        <div>
            <div className='container mx-auto py-10'>
                <div className='text-center space-y-4'>
                    <h2 className='text-4xl font-bold text-[#001931] '>Our All Applications</h2>
                    <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div>
                    <h2 className='text-[#001931] text-xl font-bold'>({appsData.length}) Apps Found</h2>
                </div>
                <div className='grid grid-cols-4 gap-6 p-5'>
                    {
                        appsData.map((app, ind) => <TrendingApp key={ind} app={app}></TrendingApp>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppPage;