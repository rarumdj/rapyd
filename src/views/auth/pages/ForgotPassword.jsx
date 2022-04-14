import React from "react";
import { Icon } from "@iconify/react";
import AuthNavBar from "../components/AuthNavBar";
import { Shield } from "../../../assets/images";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../components/form-input/Input";
import { motion } from "framer-motion";
import SideAd from "../containers/SideAd";

const ForgotPassword = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    mode: "all",
    reValidateMode: "all",
    defaultValues: {
      email: "",
    },
    criteriaMode: "firstError",
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  };

  const { register, formState } = useForm(formOptions);
  const { errors, dirtyFields } = formState;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7 } }}
      exit={{ opacity: 0, transition: { duration: 0.7 } }}
      className="bg-slate-100 min-h-screen"
    >
      <div className="flex lg:flex-row flex-col">
        <SideAd />
        <div className="basis-[55%]">
          <div className="flex">
            <AuthNavBar />
          </div>
          <div className="lg:pl-16 sm:px-10 px-4 lg:pr-24 py-8 space-y-8 lg:mt-0 mt-14">
            <div className="bg-white rounded-2xl xl:px-16 lg:px-8 px-4 xl:py-10  py-8 flex items-center justify-center ">
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
                  src={Shield}
                  alt="shield"
                  className="h-auto max-w-full object-scale-down my-3"
                />
                <div className="space-y-1 mb-6 w-11/12 max-w-md">
                  <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
                    Forgot Password
                  </h1>
                  <p className="md:text-base text-sm text-gray-600">
                    Please enter your email address below to reset your password
                  </p>
                </div>
                <form className="w-11/12 max-w-md h-full">
                  <div className="space-y-5">
                    <Input
                      error={errors.email}
                      dirtyField={dirtyFields.email}
                      formHook={register("email", { required: true })}
                      name={"Email Address"}
                      inputType={"email"}
                    />
                  </div>
                  <div className="md:mt-10 mt-8">
                    <a
                      type="button"
                      href="/password-reset"
                      className="bg-blue-700 p-3 rounded-xl w-full text-white md:text-xl text-lg font-bold text-center"
                    >
                      Continue
                    </a>
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

export default ForgotPassword;
