import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
// import rootBg from '../assets/images/root-bg.jpg';
import bg from '../assets/images/main-bg.jpg';

const RootLayout = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-top min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
