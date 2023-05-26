import React from 'react';

const TabList = ({ title, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`py-1 text-center cursor-pointer ${isActive && 'active-tab'}`}
    >
      {title}
    </div>
  );
};

export default TabList;
