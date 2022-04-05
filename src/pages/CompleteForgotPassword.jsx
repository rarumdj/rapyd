import React from "react";
import { Icon } from "@iconify/react";
import { logoBlue, Thumbsup } from "../assets/images";
import AuthNavBar from "../components/AuthNavBar";

const CompleteForgotPassword = () => {
  return (
    <section className="bg-slate-100 min-h-screen">
      <div className="flex lg:flex-row flex-col">
        <div className="basis-[45%] hidden min-h-screen h-[916px] w-full bg-Onboarding bg-cover bg-no-repeat lg:flex pl-16 pr-12 pb-12">
          <div className="rounded-lg px-10 py-4 mt-auto bg-blue-700 mx-auto">
            <p className="md:text-lg text-sm font-bold text-white text-center">
              Get Some of the Best Cars For your Business with affordable Rate
            </p>
          </div>
        </div>
        <div className="basis-[55%]">
          <div className="flex">
            <AuthNavBar />
          </div>
          <div className="lg:pl-16 sm:px-10 px-4 lg:pr-24 py-8 space-y-8 lg:mt-0 mt-14">
            <div className="bg-white rounded-2xl xl:px-16 lg:px-8 px-4 xl:py-10  py-8 flex items-center justify-center ">
              <div className="w-full">
                <img
                  src={Thumbsup}
                  alt="shield"
                  className="h-auto max-w-full object-scale-down my-3"
                />
                <div className="w-11/12 max-w-md h-full">
                  <div className="space-y-5">
                    <div className="space-y-1 ">
                      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
                        Great, We sent an email to reset your Password
                      </h1>
                      <p className="md:text-base text-sm text-gray-600">
                        We just sent you an email with a link to reset your
                        password. Please click on the link to reset your
                        password.
                      </p>
                    </div>
                  </div>
                  <div className="md:mt-10 mt-8">
                    <button className="bg-blue-700 p-3 rounded-xl w-full text-white md:text-xl text-lg font-bold ">
                      Back to Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteForgotPassword;
