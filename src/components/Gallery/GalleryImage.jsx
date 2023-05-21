import React from 'react';

const GalleryImage = ({ image }) => {
  return (
    <div className="glass p-2 rounded">
      <div className="overflow-hidden h-full">
        <img
          style={{ objectFit: 'cover' }}
          className="rounded hover:scale-[102%] transition-all object-cover object-center h-full"
          src={image.img}
          alt={`gallery-img-${image.id}`}
        />
      </div>
    </div>
  );
};

export default GalleryImage;
