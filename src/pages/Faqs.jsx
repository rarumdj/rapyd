import { Icon } from "@iconify/react";
import React from "react";

const Faqs = () => {
  return (
    <section className="bg-slate-100 pb-24 md:pt-32 pt-24 px-6 lg:px-16">
      <div className="space-y-6 w-full max-w-4xl">
        <h1 className="md:text-4xl text-2xl font-extrabold mb-6">
          Privacy Policy
        </h1>
        <div className="flex flex-row gap-4">
            <div className="basis-1/5">
            <form  className="relative  text-gray-600">
        <input
          className="shadow-[0_0px_15px_-6px_rgba(0,0,0,0.2)] bg-white py-4 md:w-96 w-full px-5 pl-12 rounded-md text-xs focus:outline-none"
          type="search"
          placeholder="Search..."
        />
        <span className="absolute left-2 top-0 mt-4 ml-2">
          <Icon
            icon="ant-design:search-outlined"
            fontSize={18}
            className="text-primary"
          />
        </span>
      </form>

            </div>
            <div className="basis-4/5"></div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
