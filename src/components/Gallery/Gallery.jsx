import React from 'react';
import Container from '../Container';
import GalleryImage from './GalleryImage';

import galleryImg1 from '../../assets/images/gallery-1.jpg';
import galleryImg2 from '../../assets/images/gallery-2.jpg';
import galleryImg3 from '../../assets/images/gallery-3.jpg';
import galleryImg4 from '../../assets/images/gallery-4.jpg';
import galleryImg5 from '../../assets/images/gallery-5.jpg';
import galleryImg6 from '../../assets/images/gallery-6.jpg';

const galleryImages = [
  { id: 1, img: galleryImg1 },
  { id: 2, img: galleryImg2 },
  { id: 3, img: galleryImg3 },
  { id: 4, img: galleryImg4 },
  { id: 5, img: galleryImg5 },
  { id: 6, img: galleryImg6 }
];

const Gallery = () => {
  return (
    <Container>
      <div className="divider mt-12 mb-8">
        <div className="text-center text-4xl font-semibold">Gallery</div>
      </div>
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          gap-4 
        "
      >
        {galleryImages.map((image) => (
          <GalleryImage image={image} />
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
