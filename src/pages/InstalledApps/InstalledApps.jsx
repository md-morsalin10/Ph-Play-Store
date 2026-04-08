import React, { useContext } from 'react';
import { InstallAppsContext } from '../../context/InstallAppsContext';
import SingleInstallApp from './SingleInstallApp';

const InstalledApps = () => {
    const { installApps } = useContext(InstallAppsContext);
    console.log(installApps);


    return (
        <div className='bg-base-300 container py-9 mx-auto'>
            {
                installApps.length > 0 &&
                <div className='text-center py-8'>
                    <h2 className='text-4xl font-bold text-[#001931]'>Your Installed Apps</h2>
                    <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
            }
            {
                installApps.length === 0 && <div className='flex justify-center items-center py-15'>
                    <h2 className='text-4xl font-bold text-[#001931]'>No Install Apps Available</h2>
                </div>
            }
            {
                installApps.length > 0 &&
                <div>
                    {
                        installApps.map((iApp, ind) => <SingleInstallApp iApp={iApp} key={ind}></SingleInstallApp>)
                    }
                </div>
            }
        </div>
    );
};

export default InstalledApps;