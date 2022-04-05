import React from "react";
import {
  Contact,
  Eligibility,
  Hero,
  OurCar,
  Testimonial,
} from "../containers/home";

const Home = () => {
  return (
    <>
      <Hero />
      <Eligibility />
      <OurCar />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
