import { Icon } from "@iconify/react";
import React from "react";

const Faqs = () => {
  return (
    <section className="bg-slate-100 pb-24 md:pt-32 pt-24 px-6 lg:px-16">
      <div className="space-y-6">
        <h1 className="md:text-4xl text-2xl font-extrabold mb-6">
          FAQs
        </h1>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="basis-1/5 space-y-5">
            <form className="relative  text-gray-600">
              <input
                className="shadow-[0_0px_15px_-6px_rgba(0,0,0,0.2)] bg-white py-4 md:w-96 w-full px-5 pl-12 rounded-md text-xs focus:outline-none"
                type="search"
                placeholder="Search..."
              />
              <span className="absolute left-2 top-0 mt-4 ml-2">
                <Icon
                  icon="ri:search-line"
                  fontSize={18}
                  className="text-primary"
                />
              </span>
            </form>
            <div className="md:flex hidden flex-col h-auto rounded-xl overflow-hidden">
              <div className="h-16 w-full px-6 flex items-center border-b border-gray-300 bg-blue-700">
                <p className="text-base text-white font-semibold">
                  Who is Rapyd Cars?
                </p>
              </div>
              <div className="h-16 w-full px-6 flex items-center border-b border-gray-300 bg-white">
                <p className="text-base text-black font-semibold">
                  What type of cars do you have?
                </p>
              </div>
              <div className="h-16 w-full px-6 flex items-center border-b border-gray-300 bg-white">
                <p className="text-base text-black font-semibold">
                  Are the cars Nigerian or Foreign used?
                </p>
              </div>
              <div className="h-16 w-full px-6 flex items-center border-b border-gray-300 bg-white">
                <p className="text-base text-black font-semibold">
                  Do I have the option to choose the type of car that I want?
                </p>
              </div>
              <div className="h-16 w-full px-6 flex items-center border-b border-gray-300 bg-white">
                <p className="text-base text-black font-semibold">
                  How much do I have to pay to own the car?
                </p>
              </div>
              <div className="h-16 w-full px-6 flex items-center border-b border-gray-300 bg-white">
                <p className="text-base text-black font-semibold">
                  Is making a down payment compulsory?
                </p>
              </div>
              <div className="h-16 w-full px-6 flex items-center border-b border-gray-300 bg-white">
                <p className="text-base text-black font-semibold">
                  What is the mode of repayment? weekly or monthly remittance?
                </p>
              </div>
            </div>
          </div>
          <div className="basis-4/5 space-y-6 w-full">
            <div className="space-y-4 w-full p-6 rounded-lg shadow-lg shadow-slate-300/60 bg-white">
              <h5 className="md:text-xl text-lg font-bold">
                Who is Rapyd Cars?
              </h5>
              <p className="text-gray-600 md:text-base text-sm">
                Rapyd Cars is an innovative Auto finance company that
                specializes in providing vehicles for smart and hardworking
                commercials drivers who want to own their own cars and work for
                themselves.
              </p>
            </div>
            <div className="space-y-4 w-full p-6 rounded-lg shadow-lg shadow-slate-300/60 bg-white">
              <h5 className="md:text-xl text-lg font-bold">
                What type of cars do you have?
              </h5>
              <p className="text-gray-600 md:text-base text-sm">
                We have Pontiac Vibe, Toyota Matrix, Toyota Corolla, Honda
                Civic, Toyota Camry. The year of Manufacture ranges from 2003 –
                2007. These car models were selected based on our research and
                are best suited for commercial use in Nigeria.
              </p>
            </div>
            <div className="space-y-4 w-full p-6 rounded-lg shadow-lg shadow-slate-300/60 bg-white">
              <h5 className="md:text-xl text-lg font-bold">
                Are the cars Nigerian or Foreign used?
              </h5>
              <p className="text-gray-600 md:text-base text-sm">
                All our Cars are Foreign Used. We do not offer Nigerian Used
                Cars unless when a vehicle is being reassigned to a new driver.
              </p>
            </div>
            <div className="space-y-4 w-full p-6 rounded-lg shadow-lg shadow-slate-300/60 bg-white">
              <h5 className="md:text-xl text-lg font-bold">
                Do I have the option to choose the type of car that I want?
              </h5>
              <p className="text-gray-600 md:text-base text-sm">
                Yes, but this is from a list of cars that we have available at
                the time your application was processed.
              </p>
            </div>
            <div className="space-y-4 w-full p-6 rounded-lg shadow-lg shadow-slate-300/60 bg-white">
              <h5 className="md:text-xl text-lg font-bold">
                How much do I have to pay to own the car?
              </h5>
              <p className="text-gray-600 md:text-base text-sm">
                The final price repayable on each cars vary, as this is
                dependent on the choice of car you desire to own. On a general
                note, all our cars are between N3,500,000 – N4,000,000 Naira.
                This means we do not have a car for less than 3.5 million naira
                or a car above 4 million naira.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
