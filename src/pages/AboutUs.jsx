import React from "react";
import AboutImg from "../assets/about.jpg";
import aboutIntro from "../assets/aboutIntro.jpg";
import milestone from "../assets/milestones.jpg";
import AppButton from "../components/AppButton";

function AboutUs() {
  return (
    <div className="container mx-auto">
      <div
        style={{ backgroundImage: `url(${AboutImg})` }}
        className="bg-cover bg-center bg-no-repeat h-80 md:h-[400px] w-full flex justify-center flex-col items-center text-white"
      >
        <div className="font-bold mb-2 scale-x-120">LUXURY RESORT</div>
        <div className="text-3xl sm:text-4xl md:text-5xl font-sans md:font-serif font-bold transform scale-y-130">
          About Us
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center bg-[#FFFFFF] mt-80 md:mt-30">
        <div className="flex flex-col text-left w-full md:flex-1 px-4 md:px-0">
          <div className="tracking-widest mb-2 text-[#7E7E7E] font-bold">
            LUXURY RESORT
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold scale-y-120 text-[#333333] font-sans md:font-serif">
            About the Samira
          </h1>
          <p className="text-[#8F8F8F] text-xl sm:text-2xl mt-3">
            Praesent fermentum ligula in dui imperdiet, vel tempus nulla
            ultricies. Phasellus at commodo ligula. Nullam molestie volutpat
            sapien, a dignissim tortor laoreet quis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
          </p>
        </div>

        <div className="flex justify-center md:justify-end w-full  md:flex-[2] mt-6 md:mt-0">
          <img src={aboutIntro} alt="aboutIntro" />
        </div>
      </div>
      <div className="text-start">
        <u className="mt-8  text-xl sm:text-2xl text-[#5A2360] tracking-widest ">
          View Rooms
        </u>
        <div className="mt-8 h-">
          {" "}
          <AppButton  title="Book your Stay"  className="w-35"/>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${milestone})` }}
        className="relative bg-cover bg-center bg-no-repeat h-80 md:h-[700px] w-full flex justify-center flex-col items-center text-white mt-15"
      >
        <div className="absolute inset-0 bg-[#070707] opacity-60 ">
          <div className="mt-25 ml-20 z-20">
            <h1 className="font-bold text-6xl text-white ">
              Some Fun Facts About Us
            </h1>
            <p className="font-bold text-2xl text-white mt-15">
              Praesent fermentum ligula in dui imperdiet, vel tempus nulla
              ultricies. Phasellus at commodo ligula. Nullam molestie volutpat
              sapien, a dignissim tortor laoreet quis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
            <div className="flex mt-15">
              <div>
                <h1 className="font-bold text-9xl">25</h1>
                <p className="font-bold text-2xl">Suites</p>
              </div>
              <div className="ml-25">
                <h1 className="font-bold text-9xl">80</h1>
                <p className="font-bold text-2xl">Rooms</p>
              </div>
              <div className="ml-25">
                <h1 className="font-bold text-9xl">3</h1>
                <p className="font-bold text-2xl">Pools</p>
              </div>
              <div className="ml-25">
                <h1 className="font-bold text-9xl">52</h1>
                <p>Employee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
