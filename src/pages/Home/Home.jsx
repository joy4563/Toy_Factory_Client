import React from 'react';
import Carousel from './Carousel/Carousel';
import Gallery from '../../components/Gallery/Gallery';
import ShopByCategory from '../../components/ShobByCategory/ShopByCategory';

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Carousel />
        <Gallery />
        <ShopByCategory />
      </div>
    </div>
  );
};

export default Home;
