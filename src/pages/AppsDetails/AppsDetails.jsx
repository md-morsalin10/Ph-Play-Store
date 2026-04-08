import React, { useContext } from 'react';
import { BiSolidLike } from 'react-icons/bi';
import { FiDownload } from 'react-icons/fi';
import { IoMdStar } from 'react-icons/io';
import { useLoaderData, useParams } from 'react-router';
import RatingChart from '../../components/RatingChart/RatingChart';
import { InstallAppsContext } from '../../context/InstallAppsContext';

const AppsDetails = () => {
    const params = useParams()
    const appData = useLoaderData();
    const filteredApps = appData.find((app) => app.id == params.id);
    const {installApps, setInstallApps} = useContext(InstallAppsContext)
    
    const { ratings, downloads, ratingAvg, reviews, size, description, companyName, title, image } = filteredApps
    
    
    const handleInstall =()=>{
        setInstallApps([...installApps, filteredApps]);
        
    }
    // console.log(installApps);
    

    return (
        <div className='container mx-auto pt-10 '>
            <div className='flex justify-baseline gap-4 p-6 pt-4 border bg-base-300 border-slate-300 rounded-2xl'>
                <div>
                    <img src={image} className='h-75 w-75 object-contain rounded-3xl' alt="" />
                </div>
                <div className='space-y-8'>
                    <div className='space-y-2'>
                        <h2 className='text-[#001931] font-bold text-3xl'>{title}</h2>
                        <span className='text-[#627382] flex gap-2'>Developed By:<p className='text-purple-600'>{companyName}</p></span>
                    </div>
                    <hr className='text-gray-300' />
                    <div className='grid grid-cols-3 gap-10'>
                        <div className='flex flex-col justify-center items-center'>
                            <FiDownload className='text-purple-600 font-bold text-6xl' />
                            <p className='text-[#001931]'>Downloads</p>
                            <h2 className='text-5xl font-bold text-[#001931]'>{downloads}</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <IoMdStar className='text-[#FF8811] font-bold text-6xl' />
                            <p className='text-[#001931]'>Rating</p>
                            <h2 className='text-5xl font-bold text-[#001931]'>{ratingAvg}</h2>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <BiSolidLike className='text-purple-600 font-bold text-6xl' />
                            <p className='text-[#001931]'>Review</p>
                            <h2 className='text-5xl font-bold text-[#001931]'>{reviews}</h2>
                        </div>
                    </div>
                    <button onClick={()=>handleInstall()} className='btn bg-green-500 text-white'>Install Now ({size}MB)</button>
                </div>
            </div>
            <div>
                <RatingChart ratings={ratings}></RatingChart>
            </div>
            <div className='space-y-3 pt-5'>
                <p className='text-2xl font-semibold text-[#001931]'>Description</p>
                <p className='text-[#627382]'>{description}</p>
            </div>
        </div>
    );
};

export default AppsDetails;