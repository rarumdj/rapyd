import React from "react";
import { Icon } from "@iconify/react";
import AuthNavBar from "../components/AuthNavBar";
import { motion } from "framer-motion";
import { MailPng } from "../../../assets/images";
import SideAd from "../containers/SideAd";

const VerifyEmail = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
      className="min-h-screen overflow-x-clip bg-slate-100"
    >
      <div className="flex lg:flex-row flex-col min-h-screen">
        <SideAd />
        <div className="basis-[55%] min-h-screen">
          <div className="flex">
            <AuthNavBar />
          </div>
          <div className="lg:pl-16 sm:px-10 px-4 lg:pr-24 py-8 space-y-8 lg:mt-0 mt-14">
            <div className="bg-white rounded-2xl xl:px-16 lg:px-8 px-4 xl:py-16  py-8 flex flex-col items-center justify-center">
              <div className="w-full">
                <a href="/login" className="inline-flex items-center">
                  <Icon
                    icon={"ic:sharp-arrow-back-ios"}
                    fontSize={20}
                    color="000"
                    className="mr-2"
                  />
                  Back
                </a>
                <img
                  src={MailPng}
                  alt="shield"
                  className="h-auto max-w-full object-scale-down my-2"
                />
                <div className="space-y-1 mb-4 w-11/12 max-w-md">
                  <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
                    Verify Email{" "}
                  </h1>
                  <p className="md:text-base text-sm text-gray-600">
                    You will need to verify your email to complete registration
                  </p>
                </div>
                <form className="w-11/12 max-w-md h-full">
                  <div className="space-y-5">
                    <div className="flex flex-row space-x-2 w-full">
                      <input
                        maxLength={1}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        type="text"
                        className="border border-solid rounded-lg border-gray-300 p-2 md:h-14 md:w-14 h-10 w-10 outline-none focus:outline-none text-gray-400 text-xl font-bold text-center"
                      />
                      <input
                        maxLength={1}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        type="text"
                        className="border border-solid rounded-lg border-gray-300 p-2 md:h-14 md:w-14 h-10 w-10 outline-none focus:outline-none text-gray-400 text-xl font-bold text-center"
                      />
                      <input
                        maxLength={1}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        type="text"
                        className="border border-solid rounded-lg border-gray-300 p-2 md:h-14 md:w-14 h-10 w-10 outline-none focus:outline-none text-gray-400 text-xl font-bold text-center"
                      />
                      <input
                        maxLength={1}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        type="text"
                        className="border border-solid rounded-lg border-gray-300 p-2 md:h-14 md:w-14 h-10 w-10 outline-none focus:outline-none text-gray-400 text-xl font-bold text-center"
                      />
                      <input
                        maxLength={1}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        type="text"
                        className="border border-solid rounded-lg border-gray-300 p-2 md:h-14 md:w-14 h-10 w-10 outline-none focus:outline-none text-gray-400 text-xl font-bold text-center"
                      />
                    </div>
                    <p className="text-sm text-gray-600">
                      An email has been sent to johndoe@gmail.com with a code to
                      verify your account.
                      <br />
                      <br />
                      If you have not received the email after few minutes,
                      please check your spam.
                    </p>
                  </div>
                  <div className="md:mt-5 mt-6">
                    <button className="bg-blue-700 p-3 rounded-xl w-full text-white md:text-xl text-lg font-bold ">
                      Verify
                    </button>
                    <p className="mt-4 text-center md:text-base text-sm">
                      <a href="/" className="underline text-blue-700 font-bold">
                        Resend Email
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default VerifyEmail;
