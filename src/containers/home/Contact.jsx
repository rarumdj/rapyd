import React from "react";
import { hashdynamic } from "../../assets/images";

const Contact = () => {
  return (
    <section id="contact" className="bg-Contact md:bg-right-top bg-scroll bg-top bg-repeat-y bg-cover md:mt-60 mt-0 py-10 px-6 lg:px-16 flex justify-center">
      <div className="flex md:flex-row flex-col gap-6 items-center w-screen max-w-[100rem]">
        <div className="basis-1/3">
          <img src={hashdynamic} alt="" className="object-scale-down h-full w-full" />
        </div>
        <div className="basis-4/6 space-y-8">
          <h1 className="md:text-4xl text-3xl font-extrabold">Contact Us</h1>
          <p className="md:text-base text-sm">
            To get a hire purchase car from us, or discuss how we can work
            together, reach out to us.
            <br />
            <br />
            For drivers: call us on 080 3300 0345 or Message us on WhatsApp. For
            corporate and partnership enquires, send us an email:
            info@getrapyd.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
