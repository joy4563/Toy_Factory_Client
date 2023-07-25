import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import NewArrival from './NewArrival';
import AboutUs from './AboutUs';
import Catagories from './Catagories';



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Gallery></Gallery>
            <NewArrival></NewArrival>
            <AboutUs></AboutUs>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;