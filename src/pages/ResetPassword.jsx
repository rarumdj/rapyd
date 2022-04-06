import React from "react";
import { Icon } from "@iconify/react";
import AuthNavBar from "../components/AuthNavBar";

const ResetPassword = () => {
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
            <div className="bg-white rounded-2xl xl:px-16 lg:px-8 px-4 xl:py-16  py-8 flex flex-col items-center justify-center">
              <div>
                <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6 ">
                  Reset Password
                </h1>
                <form className="w-11/12 max-w-md h-full">
                  <div className="space-y-5">
                    <fieldset className="border border-solid rounded-xl border-gray-300 px-3 h-16 relative">
                      <legend className="md:text-base text-sm px-2 md:leading-none leading-none">
                        Password
                      </legend>
                      <input
                        type="text"
                        className="w-full outline-none pl-2 pr-6 h-full focus:outline-none text-gray-400 text-sm"
                      />
                      <Icon
                        icon={"carbon:view-filled"}
                        fontSize={20}
                        color="000"
                        className="absolute inset-y-0 right-0 m-3"
                      />
                    </fieldset>

                    <fieldset className="border border-solid rounded-xl border-gray-300 px-3 h-16 relative">
                      <legend className="md:text-base text-sm px-2 md:leading-none leading-none">
                        Confirm Password
                      </legend>
                      <input
                        type="text"
                        className="w-full outline-none pl-2 pr-6 h-full focus:outline-none text-gray-400 text-sm"
                      />
                      <Icon
                        icon={"carbon:view-filled"}
                        fontSize={20}
                        color="000"
                        className="absolute inset-y-0 right-0 m-3"
                      />
                    </fieldset>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-600 md:text-base text-sm">
                      Use at least 8 characters including a number, an uppercase
                      and a lowercase letter
                    </p>
                  </div>
                  <div className="md:mt-10 mt-8">
                    <a type="button" href="/forgot-password/success" className="bg-blue-700 p-3 rounded-xl w-full text-white md:text-xl text-lg font-bold text-center">
                      Reset Password
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
