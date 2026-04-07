import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/SharedSection/Navbar';
import Footer from '../components/SharedSection/Footer';

const RootLayout = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default RootLayout;