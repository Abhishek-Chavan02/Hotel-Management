import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import img1 from "../assets/homeImg1.jpg";
import img2 from "../assets/homeImg2.jpg";
import img3 from "../assets/homeImg3.jpg";
import swimPool from "../assets/swimPool.jpg";
import Review from "./Review";

const HeroSection = () => {
  return (
    <div className="ml-10 mr-10">
      <div className="mt-10">
        <div className="flex gap-100">
          <div className="flex-1 ">
            <Typography className="font-mono text-gray-500 text-left">
              LUXURY RESORT
            </Typography>

            <Typography
              className="text-left font-serif mb-2"
              color="black-light"
              variant="h2"
            >
              Relax in our Hotel
            </Typography>
            <Typography className="text-left mt-4 font-normal !text-lg !text-gray-500">
              Praesent fermentum ligula in dui imperdiet, vel tempus nulla
              ultricies. Phasellus at commodo ligula. Nullam molestie volutpat
              sapien, a dignissim tortor laoreet quis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </Typography>
            {/* color:[#6439a9] */}
            <Typography className="ml-1 underline text-left mt-4 font-normal !text-lg ">
              View Rooms
            </Typography>
            <div className="mt-4 text-left">
              <Button className="rounded-none">Book Your Stay</Button>
            </div>
          </div>

          <div
            className="image-stack"
            style={{ position: "relative", width: "35%" }}
          >
            <div
              className="image-stack__item image-stack__item--bottom"
              style={{
                position: "absolute",
                right: "0",
                top: "0",
                width: "60%",
                zIndex: -1,
              }}
            >
              <img
                src={img3}
                alt=""
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div
              className="image-stack__item image-stack__item--top"
              style={{
                paddingTop: "10px",
                paddingRight: "10%",
                width: "60%",
              }}
            >
              <img
                src={img1}
                alt=""
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div
              className="image-stack__item image-stack__item--top-bottom"
              style={{
                position: "relative",
                width: "60%",
                zIndex: -1,
              }}
            >
              <img
                src={img2}
                alt=""
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="mt-10 bg-gray-800 ">
          <div className="flex gap-30">
            <div className="image-stack flex-1">
              <div className="h-full">
                <img src={swimPool} alt="" className="h-full object-cover" />
              </div>
            </div>
            <div className="flex-1 p-10">
              <Typography className="font-mono text-gray-500 text-left">
                LUXURY RESORT
              </Typography>

              <Typography
                className="text-left font-serif mb-2"
                color="white"
                variant="h2"
              >
                Rooms with private swimming pool
              </Typography>
              <Typography className="text-left mt-4 font-normal !text-lg !text-gray-500">
                Praesent fermentum ligula in dui imperdiet, vel tempus nulla
                ultricies. Phasellus at commodo ligula. Nullam molestie volutpat
                sapien, a dignissim tortor laoreet quis. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.
              </Typography>
              <Typography className="ml-1 underline text-left mt-4 font-normal !text-lg ">
                View Rooms
              </Typography>
              <div className="mt-4 text-left">
                <Review />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
