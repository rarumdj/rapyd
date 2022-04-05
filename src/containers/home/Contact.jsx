import React from "react";
import { hashdynamic } from "../../assets/images";

const Contact = () => {
  return (
    <section className="bg-Contact md:bg-right-top bg-scroll bg-top bg-repeat-y bg-auto py-20 px-6 lg:px-16">
      <div className="flex md:flex-row flex-col gap-6 items-center">
        <div className="basis-1/3">
          <img src={hashdynamic} alt="" className="h-full w-full" />
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
