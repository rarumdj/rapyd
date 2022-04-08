import React from "react";
import { Link } from "react-router-dom";
import { carhero } from "../../assets/images";

const Hero = () => {
  return (
    <section id="home" className="bg-blue-700 pt-20 2xl:h-full md:h-screen sm:h-full h-full">
      <div className="flex flex-col md:flex-row lg:pl-24 items-center">
        <div className=" space-y-6 md:mt-20 mt-0 lg:mr-8 px-6">
          <h1 className="text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            It’s your Car <br />
            Own it
          </h1>
          <p className="text-white text-sm sm:text-base">
            We provide people better and faster ways to get cars they need for
            commercial purposes.
          </p>
          <p className="hover:-translate-y-1 transition-all duration-500 ease-in-out">
            <Link
              to="/register"
              className=" py-3  px-4 rounded-lg font-bold text-center bg-white text-blue-700"
            >
              Get Started
            </Link>
          </p>
        </div>
        <div className=" ml-auto mt-10 ">
          <img src={carhero} alt="hero_banner" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
