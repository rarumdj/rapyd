import React from "react";
import { slide1 } from "../../assets/images";

const Testimonial = () => {
  return (
    <section className="pt-20 lg:pl-24 ">
      <h1 className="text-3xl font-extrabold mt-16">Testimonials</h1>
      <div>
        <div className="" />
        <div className="flex gap-0">
          <div className="basis-1/2 flex items-center">
            <div className="bg-blue-700 bg-ourCar bg-cover h-96 rounded-tl-md rounded-bl-md p-14">
              <p className="text-white">
                I have been driving as a commercial driver for over 5 years but
                the exceptional service and ease of getting a car from Rapyd was
                amazing. I look forward to the day I'll have the original
                documents as I already own this car in my mind.
              </p>
              <h3 className="text-white text-2xl font-bold mt-14">Kenedy James</h3>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="flex gap-4">
              <div className="w-96 h-[509.8px]">
                <img
                  src={slide1}
                  alt=""
                  className="object-cover h-full w-full rounded-md"
                />
              </div>
              <div className="w-[150px] h-[509.8px]">
                <img
                  src={slide1}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-[150px] h-[509.8px]">
                <img
                  src={slide1}
                  alt=""
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
