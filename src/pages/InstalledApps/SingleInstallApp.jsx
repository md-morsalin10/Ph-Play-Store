import React, { useContext } from 'react';
import { FiDownload } from 'react-icons/fi';
import { IoStarSharp } from 'react-icons/io5';
import { InstallAppsContext } from '../../context/InstallAppsContext';

const SingleInstallApp = ({ iApp }) => {
    const { installApps, setInstallApps } = useContext(InstallAppsContext);

    const handleUninstall = (iApp) => {
        const filterApp = installApps.filter(ap => ap.id != iApp.id);
        setInstallApps(filterApp);
    }

    const { downloads, ratingAvg, size, title, image } = iApp
    
    return (
        <div className='flex justify-between items-center p-5 border my-4 border-gray-300 rounded-2xl bg-white m-3'>
            <div className='flex justify-center items-center gap-3'>
                <div>
                    <img src={image} className='h-20 w-20 rounded-2xl' alt="" />
                </div>
                <div>
                    <h2 className='text-xl font-medium text-[#001931]'>{title}</h2>
                    <div className='flex gap-5'>
                        <h2 className='flex items-center text-green-500 font-bold'><FiDownload className='text-green-500 font-bold' /> {downloads}</h2>
                        <h2 className='flex items-center text-orange-500 font-bold'><IoStarSharp /> {ratingAvg}</h2>
                        <p className='text-[#627382]'>{size}MB</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleUninstall(iApp)} className='btn bg-[#00D390] text-white'>Uninstall</button>
            </div>
        </div>
    );
};

export default SingleInstallApp;