import React from 'react';

const GalleryImage = ({ image }) => {
  return (
    <div className="bg-white p-2 rounded shadow">
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
