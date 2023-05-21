import React from 'react';
import Container from '../../../components/Container';
import { carouselImages } from '../../../constants';
import CarouselSlide from './CarouselSlide';

const Carousel = () => {
  return (
    <Container>
      <div className="p-3 glass rounded-lg">
        <div className="carousel w-full">
          {carouselImages.map((image, idx, array) => {
            // if current = first, then prev = last
            const prev = idx ? idx : array.length;
            // if current = last then next = first
            const next = idx + 1 === array.length ? 1 : idx + 2;
            return <CarouselSlide slide={{ ...image, prev, next }} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Carousel;
