/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navlink from './Navlink';
import Container from '../Container';
import pp from '../../assets/images/pp.jpg';
import { Link } from 'react-router-dom';
import { navLinks } from '../../constants';
import useAuth from '../../hooks/useAuth';
import { FiLogOut } from 'react-icons/fi';

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <Container>
      <div
        className="
          glass
          rounded-lg
          flex
          justify-between
          content-center
          px-6
          md:px-8
        "
      >
        <Link className="logo text-2xl font-bold py-2" to="/">
          <span className="text-orange-600">Toy</span>
          <span className="text-blue-500"> Store</span>
        </Link>
        <div>
          <ul className="flex justify-between content-center">
            {navLinks.map((link) => {
              if (link.auth === 'none') {
                return <Navlink key={link.id} link={link} />;
              }
              if (link.auth === '!user' && !user) {
                return <Navlink key={link.id} link={link} />;
              }
            })}
            <button onClick={logOut} className="btn btn-sm btn-ghost my-3">
              <FiLogOut />
            </button>
            <div className="ml-8 py-1 dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="pp" src={pp} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="glass mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 z-50"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
