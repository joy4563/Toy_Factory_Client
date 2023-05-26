import React from 'react';
import Container from '../Container';
import GalleryImage from './GalleryImage';
import { galleryImages } from '../../constants';
import SectionTitle from '../SectionTitle';

const Gallery = () => {
  return (
    <Container>
      <SectionTitle title="Gallery" />
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
          <GalleryImage key={image.id} image={image} />
        ))}
      </div>
    </Container>
  );
};

export default Gallery;
