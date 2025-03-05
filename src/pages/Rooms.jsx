import React from "react";
import img1 from "../assets/room1.jpg";
import img2 from "../assets/room2.jpg";
import img3 from "../assets/room3.jpg";
import img4 from "../assets/room4.jpg";
import img5 from "../assets/room5.jpg";
import img6 from "../assets/room6.jpg";
import img7 from "../assets/room7.jpg";
import img8 from "../assets/room8.jpg";
import img9 from "../assets/room9.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import AppButton from "../components/AppButton";

const roomImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const Rooms = () => {
  return (
    <div className="mt-10">
      <div className="section_title_container text-center">
        <Typography className="font-mono">LUXURY RESORT</Typography>
        <div className="section_title">
          <Typography
            className="font-serif mb-2"
            color="blue-gray"
            variant="h2"
          >
            Choose a Room
          </Typography>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-10">
        {roomImages.map((image, index) => (
          <Card key={index} className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={image} alt={`room ${index + 1}`} />
            </CardHeader>
            <CardBody>
              <div className="room_content text-center">
                <Typography className="room_price">From $90 / Night</Typography>
                <div className="room_type">double</div>
                <div className="room_title">
                  <Typography variant="h4">Deluxe Suite</Typography>
                </div>
                <div className="room_text">
                  <p>
                    Praesent fermentum ligula in dui imper diet, vel tempus
                    nulla ultricies. Phasellus at commodo ligula.
                  </p>
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <AppButton
                className="rounded-none w-30"
                title="Book now"
              ></AppButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
