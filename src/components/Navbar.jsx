import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/hotelLogo.png";

const Navbar = () => {

    const handleLogout = () => {
        localStorage.removeItem("user");
        dispatch(logoutUser());
        navigate("/", { replace: true });
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-[#081123] p-0">
            <div className="flex flex-col items-center flex-shrink-0 text-white mr-6">
                <div className="cursor-pointer font-semibold text-[40px] tracking-tight   rounded-none">
                    <img src={image} alt="sam" className="h-[11vh]  " />
                </div>
            </div>

            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="flex w-full h-full lg:flex-grow items-center lg:w-auto">
                    <div className='hover:bg-[#5A2360] flex items-center h-full text-white hover:text-white mr-4 w-full justify-center'>
                        <Link to={"/"} className="w-full text-center px-2 py-3">
                            HOME
                        </Link>
                    </div>
                    <div className='hover:bg-[#5A2360] flex items-center h-full text-white hover:text-white mr-4 w-full justify-center'>
                        <Link to={"/about-us"} className="w-full text-center px-2 py-3">
                            ABOUT US
                        </Link>
                    </div>
                    <div className='hover:bg-[#5A2360] flex items-center h-full text-white hover:text-white mr-4 w-full justify-center'>
                        <Link to={"/rooms"} className="w-full text-center px-2 py-3">
                            ROOMS
                        </Link>
                    </div>
                    <div className='hover:bg-[#5A2360] flex items-center h-full text-white hover:text-white mr-4 w-full justify-center'>
                        <Link to={"/contact"} className="w-full text-center px-2 py-3">
                            CONTACT
                        </Link>
                    </div>
                    <div className='hover:bg-[#5A2360] flex items-center h-full text-white hover:text-white mr-4 w-full justify-center'>
                        <Link to={"/news"} className="w-full text-center px-2 py-3">
                            NEWS
                        </Link>
                    </div>

                    <div className='hover:bg-[#5A2360] flex items-center h-full text-white hover:text-white mr-4 w-full justify-center'>
                        <Link to={"/profile"} className="w-full text-center px-2 py-3">
                            PROFILE
                        </Link>
                    </div>
                    <div className='bg-[#5A2360] hover:bg-[#D6BAA0] flex items-center h-full text-white hover:text-white mr-4 w-full justify-center'>
                        <Link to="#" className="px-4 py-2 mr-5 rounded-none text-lg  text-white mt-4 lg:mt-0">
                            Book Room
                        </Link>
                    </div>
                    <div className="bg-[#5A2360] hover:bg-[#D6BAA0] flex items-center h-full text-white hover:text-white mr-4 w-full justify-center">
                        <Link to="/" className="px-4 py-2 mr-5 rounded-none text-lg text-white mt-4 lg:mt-0"
                            onClick={handleLogout} >
                            Logout
                        </Link>
                    </div>
                </div>


            </div>
        </nav>
    );
}

export default Navbar;
