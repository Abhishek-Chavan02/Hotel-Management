import React from 'react';
import sam from '../assets/stars.png';

const Footer = () => {
    return (
        <footer className="bg-[#FFFFFF] text-black p-6 mt-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="mb-4 md:mb-0 text-center md:text-left ml-7">
                    <p className='ml-3'>HOTEL</p>
                    <h2 className="text-xl font-bold font-serif">Samira</h2>

                    <img src={sam} alt="sam" className='w-[40px] ml-2' />
                    <p className="text-sm">&copy; 2025 All rights reserved.</p>
                    <p className="text-sm">Made with love by Colorlib</p>
                    <p className="text-sm">This template is made with </p>
                </div>
                {/* Middle Section */}
                <div className="mb-4 md:mb-0 text-center">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#home" className="hover:text-purple-500 ">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-purple-500">About Us</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-purple-500">Rooms</a>
                        </li>

                        <li>
                            <a href="#contact" className="hover:text-purple-500">News</a>
                        </li>
                        
                    </ul>
                    <div className='mt-5 flex flex-col items-center md:items-start'>
                        <p>Praesent fermentum ligula in dui imperdiet,vel tempus</p>
                        <p>nulla ultricies. Phasellus at commodo ligula.</p>
                    </div>
                </div>
                {/* Right Section */}
                <div className="text-left">
                    <p className="text-[15px]">Address : 481 Creekside Lane Avila CA 93424</p>
                    <p className="text-[15px]">Email: yourmail@gmail.com</p>
                    <p className="text-[15px]">Phone: +53 345 7953 32453</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;