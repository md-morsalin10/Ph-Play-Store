import React, { Suspense } from 'react';
import Banner from '../../components/HomeSection/Banner';
import RatingSection from '../../components/HomeSection/RatingSection';
import TrendingApps from '../../components/HomeSection/TrendingApps';
import { HashLoader, } from 'react-spinners';

const appsPromise = fetch("/data.json").then(res=> res.json())
const HomePage = () => {
    return (
        <div>
            <Banner/>
            <RatingSection/>
            <Suspense fallback={<div className='flex justify-center items-center pt-3'><HashLoader color='#632EE3' /></div>}>
                <TrendingApps appsPromise={appsPromise}/>
            </Suspense>
        </div>
    );
};

export default HomePage;