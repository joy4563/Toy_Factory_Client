import React from 'react';

const CarouselSlide = ({ slide }) => {
  if (!slide) {
    return 'Required object "Slide" not provided';
  }

  return (
    <div id={`slide${slide.id}`} className="carousel-item relative w-full">
      <img
        alt={`carousel-img-${slide.id}`}
        src={slide.img}
        className="w-full h-[550px]"
        style={{ objectFit: 'cover' }}
      />
      <div
        className="absolute
          flex 
          justify-between 
          transform 
          -translate-y-1/2 
          left-5 
          right-5 
          top-1/2
        "
      >
        <a href={`#slide${slide.prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${slide.next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselSlide;
