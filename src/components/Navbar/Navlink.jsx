import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = ({ link }) => {
  return (
    <li
      className="
        flex
        justify-center
        content-center
        ml-4 
        border-b-2 
        border-transparent 
        hover:border-b-2 
        hover:border-gray-900 
        transition-all 
        py-4
      "
    >
      <Link className="text-lg font-semibold" to={link.path}>
        {link.text}
      </Link>
    </li>
  );
};

export default Navlink;
