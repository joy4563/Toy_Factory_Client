import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import bg from '../assets/images/main-bg.jpg';

const RootLayout = () => {
  return (
    <div
      className="
        bg-cover 
        bg-no-repeat 
        bg-top 
        min-h-screen 
        w-full 
        overflow-x-hidden 
        bg-fixed
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
