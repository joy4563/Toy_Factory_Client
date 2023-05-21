import React from 'react';

const GalleryImage = ({ image }) => {
  if (!image) {
    return 'component <GalleryImage /> needs the "image" property';
  }
  return (
    <div className="glass p-2 rounded">
      <div className="overflow-hidden h-full rounded-sm">
        <img
          className="
            hover:scale-[105%] 
            transition-all 
            object-cover 
            object-center 
            h-full
          "
          src={image.img}
          alt={`gallery-img-${image.id}`}
        />
      </div>
    </div>
  );
};

export default GalleryImage;
