import React from "react";
import {
  hondacivic,
  toyotacam03,
  toyotacorolla,
  toyotamatrix,
} from "../assets/images";

const OurCar = () => {
  return (
    <section className="bg-ourCar bg-[#04112C] md:bg-contain bg-auto min-h-screen py-16 px-6 lg:px-16">
      <div className="flex md:flex-row flex-col gap-6">
        <div className="basis-1/3">
          <div className="h-[48%] w-full bg-gray-700 border-b-8 border-blue-700 shadow-lg shadow-blue-700/60 px-10 py-6 flex flex-col justify-center">
            <h1 className="md:text-4xl text-2xl font-extrabold text-white mb-6">Our Cars</h1>
            <p className="text-white md:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              auctor mauris tincidunt purus volutpat eget eget. Tempor tempus
              nullam rutrum lobortis nunc neque faucibus.
            </p>
          </div>
        </div>
        <div className="basis-4/6 grid md:grid-cols-2 gap-6">
          <div className=" h-full w-full bg-gray-700 rounded-xl p-5">
            <div className="h-[64%] w-full bg-[#F9DED3] p-6 mb-9 rounded-lg">
              <img
                src={hondacivic}
                alt=""
                className="object-contain h-full w-full"
              />
            </div>
            <div className="space-y-1 mb-10">
              <h1 className="text-white font-bold md:text-2xl text-xl">
                Honda Civic 2004
              </h1>
              <p className="text-white md:text-base text-sm">
                Automatic • Petrol • 4 Seats
              </p>
            </div>
          </div>

          <div className=" h-full w-full bg-gray-700 rounded-xl p-5">
            <div className="h-[64%] w-full bg-[#E6E8FD] p-6 mb-9 rounded-lg">
              <img
                src={toyotamatrix}
                alt=""
                className="object-contain h-full w-full"
              />
            </div>
            <div className="space-y-1 mb-10">
              <h1 className="text-white font-bold md:text-2xl text-xl">
                Toyoto Matrix 2004
              </h1>
              <p className="text-white md:text-base text-sm">
                Automatic • Petrol • 4 Seats
              </p>
            </div>
          </div>

          <div className=" h-full w-full bg-gray-700 rounded-xl p-5">
            <div className="h-[64%] w-full bg-[#E7ECEA] p-6 mb-9 rounded-lg">
              <img
                src={toyotacorolla}
                alt=""
                className="object-contain h-full w-full"
              />
            </div>
            <div className="space-y-1 mb-10">
              <h1 className="text-white font-bold md:text-2xl text-xl">
                Toyota Corolla 2004
              </h1>
              <p className="text-white md:text-base text-sm">
                Automatic • Petrol • 4 Seats
              </p>
            </div>
          </div>

          <div className=" h-full w-full bg-gray-700 rounded-xl p-5">
            <div className="h-[64%] w-full bg-[#E7ECEA] p-6 mb-9 rounded-lg">
              <img
                src={toyotacam03}
                alt=""
                className="object-contain h-full w-full"
              />
            </div>
            <div className="space-y-1 mb-10">
              <h1 className="text-white font-bold md:text-2xl text-xl">
                Toyota Camry 2003
              </h1>
              <p className="text-white md:text-base text-sm">
                Automatic • Petrol • 4 Seats
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCar;
