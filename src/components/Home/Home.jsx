import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import NewArrival from './NewArrival';
import AboutUs from './AboutUs';



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Gallery></Gallery>
            <NewArrival></NewArrival>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;