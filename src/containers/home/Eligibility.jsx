import React from "react";
import { righteligibility } from "../../assets/images";

const Eligibility = () => {
  return (
    <section id="eligibility" className="py-24 px-6 lg:px-16 flex justify-center">
      <div className="flex md:flex-row flex-col gap-8 w-screen max-w-[100rem]">
        <div className="basis-1/2">
          <h1 className="text-4xl font-extrabold mb-6">Eligibility</h1>
          <p className="mb-4">
            To apply for a hire purchase car from us, you'll need to meet our
            eligibility criteria, and we continue to review it on an ongoing
            basis to keep up with industry best practices. <br /> <br />
            Our basic eligibility requirements are listed below, however our
            compliance team may request for more information during the
            application process.
          </p>
          <div>
            <ul className="lg:text-base text-sm space-y-2 mb-3">
              <li className="flex flex-nowrap items-center w-full p-4 bg-white rounded-md shadow-lg shadow-gray-200/50">
                <span>
                  <div className="h-2.5 w-2.5 mr-3 rounded-full bg-cyan-400" />
                </span>
                Drivers must have a clean and no criminal record.
              </li>
              <li className="flex flex-nowrap items-center w-full p-4 bg-white rounded-md shadow-lg shadow-gray-200/50">
                <span>
                  <div className="h-2.5 w-2.5 mr-3 rounded-full bg-cyan-400" />
                </span>
                Driver must have active Bolt and Uber accounts.
              </li>
              <li className="flex flex-nowrap items-center w-full p-4 bg-white rounded-md shadow-lg shadow-gray-200/50">
                <span>
                  <div className="h-2.5 w-2.5 mr-3 rounded-full bg-cyan-400" />
                </span>
                Drivers must be over 25 years with minimum a of 5 years driving experience.
              </li>
              <li className="flex flex-nowrap items-center w-full p-4 bg-white rounded-md shadow-lg shadow-gray-200/50">
                <span>
                  <div className="h-2.5 w-2.5 mr-3 rounded-full bg-cyan-400" />
                </span>
                Drivers must be able to read and write in English language.
              </li>
              <li className="flex flex-nowrap items-center w-full p-4 bg-white rounded-md shadow-lg shadow-gray-200/50">
                <span>
                  <div className="h-2.5 w-2.5 mr-3 rounded-full bg-cyan-400" />
                </span>
                Drivers must be able to make a security deposit.
              </li>
              <li className="flex flex-nowrap items-center w-full p-4 bg-white rounded-md shadow-lg shadow-gray-200/50">
                <span>
                  <div className="h-2.5 w-2.5 mr-3 rounded-full bg-cyan-400" />
                </span>
                Drivers must have eligible guarantors with a clean and no criminal record.
              </li>
            </ul>
          </div>
          <p>Please visit the <a href="/" className="text-blue-700 underline font-bold">FAQ</a> page to get more information…</p>
        </div>
        <div className="basis-1/2 ml-auto mt-8">
          <img src={righteligibility} alt="hero_banner" className="" />
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
