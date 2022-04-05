import React from "react";
import { slide1 } from "../../assets/images";

const Testimonial = () => {
  return (
    <section className="py-20 lg:pl-24 pl-8 flex justify-center">
      <div className="w-screen max-w-[100rem]">
        <h1 className="text-4xl font-extrabold mt-16">Testimonials</h1>
        <div className="md:block hidden relative mt-24">
          <div className="absolute rounded-xl lg:w-96 w-60 lg:h-[781.77px] h-[640px] bg-[#FDE6E7] right-[10.4em] -top-28 -z-50" />
          <div className="flex gap-0">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-blue-700 bg-ourCar bg-cover lg:h-96 h-72 rounded-tl-md rounded-bl-md xl:p-14 p-7">
                <p className="text-white xl:text-base text-sm">
                  I have been driving as a commercial driver for over 5 years
                  but the exceptional service and ease of getting a car from
                  Rapyd was amazing. I look forward to the day I'll have the
                  original documents as I already own this car in my mind.
                </p>
                <h3 className="text-white lg:text-2xl text-xl font-bold xl:mt-14 mt-7">
                  Kenedy James
                </h3>
              </div>
              <ul className="flex space-x-4 absolute bottom-0">
                <li className="h-3 w-3 rounded-full border-2 border-blue-700 bg-blue-700" />
                <li className="h-3 w-3 rounded-full border-2 border-blue-700" />
                <li className="h-3 w-3 rounded-full border-2 border-blue-700" />
                <li className="h-3 w-3 rounded-full border-2 border-blue-700" />
              </ul>
            </div>
            <div className="ml-auto">
              <div className="flex gap-4">
                <div className="lg:w-96 w-60 lg:h-[509.8px] h-96">
                  <img
                    src={slide1}
                    alt=""
                    className="object-cover h-full w-full rounded-md"
                  />
                </div>
                <div className="lg:w-[150px] w-24 lg:h-[509.8px] h-96">
                  <img
                    src={slide1}
                    alt=""
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="lg:w-[150px] w-24 lg:h-[509.8px] h-96">
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
      </div>
    </section>
  );
};

export default Testimonial;
