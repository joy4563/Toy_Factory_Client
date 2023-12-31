import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProviders";
import logo from '../assets/logo.jpg'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const picture = user?.photoURL;
    // console.log(user.photoURL);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => {
                console.error(error);
            });
    };

    // hoover
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className="mb-1">
            <div className="flex justify-between items-center content-center flex-col gap-3 md:flex-row  bg-primary text-primary-content px-5 md:px-16 py-3">
                <div className="flex items-center">
                    <p className="">
                        <img
                            src={logo}
                            alt=""
                            className="h-16 w-16 rounded-full p-1 bg-white"
                        />
                    </p>
                    <p className="btn btn-ghost normal-case text-lg md:text-xl  hover:text-2xl text-yellow-200">
                        Avengers Assemble
                    </p>
                </div>
                <div className="">
                    <div className="  ">
                        <nav className="flex flex-wrap items-center md:flex md:flex-row md:flex-nowrap">
                            {" "}
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? " px-4 py-4 rounded-md bg-green-500 normal-case text-xl mr-2 font-bold"
                                        : "normal-case mr-2 font-semibold text-lg bg-sky-500 px-4 py-3 rounded-md  "
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/allToys"
                                className={({ isActive }) =>
                                    isActive
                                        ? " px-4 py-4 rounded-md bg-green-500 normal-case text-xl mr-2 font-bold my-8"
                                        : "normal-case mr-2 font-semibold text-lg bg-sky-500 px-4 py-3 rounded-md my-6"
                                }
                            >
                                All Toys
                            </NavLink>
                            <>
                                {user ? (
                                    <>
                                        <NavLink
                                            to="/myToys"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? " px-4 py-4 rounded-md bg-green-500 normal-case text-xl mr-2 font-bold"
                                                    : "normal-case mr-2 font-semibold text-lg bg-sky-500 px-4 py-3 rounded-md my-6"
                                            }
                                        >
                                            My Toys
                                        </NavLink>
                                        <NavLink
                                            to="/addToy"
                                            className={({ isActive }) =>
                                                isActive
                                                    ? " px-4 py-4 rounded-md bg-green-500 normal-case text-xl mr-2 font-bold"
                                                    : "normal-case mr-2 font-semibold text-lg bg-sky-500 px-4 py-3 rounded-md  "
                                            }
                                        >
                                            Add a Toy
                                        </NavLink>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </>
                            <NavLink
                                to="/blogs"
                                className={({ isActive }) =>
                                    isActive
                                        ? " px-4 py-4 rounded-md bg-green-500 normal-case text-xl mr-2 font-bold"
                                        : "normal-case mr-2 font-semibold text-lg bg-sky-500 px-4 py-3 rounded-md my-6"
                                }
                            >
                                Blogs
                            </NavLink>
                        </nav>
                    </div>
                </div>

                <div className="flex items-center flex-col gap-2 md:flex-row">
                    {user ? (
                        <>
                            <p className="flex items-center  ">
                                <span>
                                    {isHovering && (
                                        <span>{user?.displayName}</span>
                                    )}
                                </span>{" "}
                                <span
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                    className="text-black bg-white rounded-full p-1 ml-2"
                                >
                                    <span>
                                        {picture ? (
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={picture}
                                                alt=""
                                            />
                                        ) : (
                                            <FaUser className="h-6 w-6"></FaUser>
                                        )}
                                    </span>
                                </span>
                            </p>

                            <button
                                onClick={handleLogOut}
                                className="btn  ml-2 text-white bg-gradient-to-r from-green-500 to-pink-500 hover:bg-gradient-to-l  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="btn  ml-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Log In
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
