import React from "react";
import { carhero } from "../assets/images";

const Hero = () => {
  return (
    <section className="bg-blue-700 pt-20  min-h-screen">
      <div className="flex flex-col md:flex-row lg:pl-24 items-center">
        <div className="basis-2/5 space-y-6 md:mt-20 mt-0 lg:mr-8 px-6">
          <h1 className="text-white font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            It’s your Car <br />
            Own it
          </h1>
          <p className="text-white text-sm sm:text-base">
            We provide people better and faster ways to get cars they need for
            commercial purposes.
          </p>
          <button className="hover:-translate-y-1 transition-all duration-500 ease-in-out py-2 px-4 rounded-lg font-bold text-center bg-white text-blue-700">
            Get Started
          </button>
        </div>
        <div className="basis-3/5 mt-10 ">
          <img src={carhero} alt="hero_banner" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
