
import React from "react";
import Rooms from "./Rooms";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import BookingTabs from "../components/BookingTabs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BookingTabs />
      <Rooms />
      <Newsletter />
    </div>
  );
};

export default Home;


