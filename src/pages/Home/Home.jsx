import React from 'react';
import Carousel from './Carousel/Carousel';
import Gallery from '../../components/Gallery/Gallery';

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Carousel />
        <Gallery />
      </div>
    </div>
  );
};

export default Home;
