import React from 'react'
import AboutImg from '../assets/about.jpg'
import aboutIntro from '../assets/aboutIntro.jpg'
import BookingTabs from '../home/BookingTabs'
import BookButton from '../components/BookButton'

function AboutUs() {
    return (
        <div className="container mx-auto">
            <div
                style={{ backgroundImage: `url(${AboutImg})` }}
                className="bg-cover bg-center bg-no-repeat h-80 md:h-[400px] w-full flex flex-col items-center justify-center text-white">
                <div className="font-bold mb-2 scale-x-120">LUXURY RESORT</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-sans md:font-serif font-bold scale-y-130">
                    About Us
                </div>
            </div>

       
            <div className="flex justify-center mt-[-100px]">
                <BookingTabs />
            </div>

            <div className="flex flex-col md:flex-row justify-center bg-[#FFFFFF] mt-80 md:mt-50">
                <div className="flex flex-col text-left w-full md:w-1/2 px-4 md:px-0">
                    <div className="tracking-widest mb-2 text-[#7E7E7E] font-bold">LUXURY RESORT</div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold scale-y-120 text-[#333333] font-sans md:font-serif">
                        About the Samira
                    </h1>
                    <p className="text-[#8F8F8F] text-xl sm:text-2xl mt-3">
                        Praesent fermentum ligula in dui imperdiet, vel tempus nulla ultricies. Phasellus at commodo ligula. Nullam
                        molestie volutpat sapien, a dignissim tortor laoreet quis. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos.
                    </p>
                </div>

                <div className="flex justify-center md:justify-end w-full md:w-1/2 mt-6 md:mt-0">
                    <img src={aboutIntro} alt="aboutIntro" />
                </div>
            </div>

            <div className='text-start'>
                <u className="mt-8 text-xl sm:text-2xl text-[#5A2360] tracking-widest">View Rooms</u>
                <div className='mt-8'><BookButton btnText="Book Your Stay" /></div>
            </div>
        </div>
    )
}

export default AboutUs
