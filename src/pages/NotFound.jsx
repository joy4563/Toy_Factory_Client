import React from 'react';
import { Link } from 'react-router-dom';
import notFoundBg from '../assets/images/404-error-bg.png';
import { BiChevronRight } from 'react-icons/bi';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div>
        <div>
          <img src={notFoundBg} alt="" />
        </div>
        <div className="text-4xl text-center">
          <div className="text-red-400 font-bold">Opps!!</div>
          Page not Found
        </div>
        <div className="mt-5 flex justify-center">
          <Link to="/">
            <button className="btn btn-error">
              GO HOME
              <BiChevronRight className="text-xl font-bold" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
