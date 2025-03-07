import React from "react";
import Rooms from "./Rooms";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import BookingTabs from "../components/BookingTabs";
import { CarouselCustomNavigation } from "../components/CarouselCustomNavigation";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BookingTabs />
      <Rooms />
      <CarouselCustomNavigation />
      <Newsletter />
    </div>
  );
};

export default Home;

