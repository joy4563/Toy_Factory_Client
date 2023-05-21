import React from 'react';

const Container = ({ children }) => {
  return (
    <div
      className="
        container 
        mx-auto 
        my-4 
        md:my-6 
        px-2 
        md:px-4
      "
    >
      {children}
    </div>
  );
};

export default Container;
