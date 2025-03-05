import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/room1.jpg";
import img2 from "../assets/room2.jpg";
import img3 from "../assets/room3.jpg";
import img4 from "../assets/room5.jpg";
import img5 from "../assets/room6.jpg";
import img6 from "../assets/room7.jpg";
import img7 from "../assets/room8.jpg";
import img8 from "../assets/room4.jpg";
import img9 from "../assets/room9.jpg";
import img10 from "../assets/homeImg1.jpg";
import img11 from "../assets/homeImg2.jpg";
import img12 from "../assets/swimPool.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
];

export function CarouselCustomNavigation() {
  return (
    <div className="rounded-none mb-10 bg-[#282428] bg-opacity-10 p-10">
      <div className="flex overflow-x-auto space-x-1">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`image ${index + 1}`} className="h-60 w-60 object-cover" />
        ))}
      </div>
    </div>
  );
}