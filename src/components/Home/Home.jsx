import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import NewArrival from './NewArrival';
import AboutUs from './AboutUs';
import Catagories from './Catagories';
import setTitle from '../../Hook/TitleHook';



const Home = () => {
    setTitle("Home")
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Gallery></Gallery>
            <NewArrival></NewArrival>
            <AboutUs></AboutUs>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;