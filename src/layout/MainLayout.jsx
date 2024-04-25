import React from 'react';
import '../App.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import HeadContact from '../components/HeadContact';

const MainLayout = () => {
    return (
        <div>
            {/* <HeadContact></HeadContact> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;