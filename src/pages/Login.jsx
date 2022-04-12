import React from "react";
import { Icon } from "@iconify/react";
import AuthNavBar from "../components/AuthNavBar";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../components/form-input/Input";
import { motion } from "framer-motion";

const Login = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    mode: "all",
    reValidateMode: "all",
    defaultValues: {
      email: "",
      password: "",
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
            <div className="bg-white rounded-2xl xl:px-16 lg:px-8 px-4 xl:py-10 py-8 flex flex-col items-center justify-center">
              <div className="w-full">
                <a href="/login" className="inline-flex items-center mb-10">
                  <Icon
                    icon={"ic:sharp-arrow-back-ios"}
                    fontSize={20}
                    color="000"
                    className="mr-2"
                  />
                  Back
                </a>
                <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6 ">
                  Register for Rapyd as a Driver
                </h1>
                <form className="w-11/12 max-w-md h-full">
                  <div className="space-y-6">
                    <Input
                      error={errors.email}
                      dirtyField={dirtyFields.email}
                      formHook={register("email", { required: true })}
                      name={"Email Address"}
                      inputType={"email"}
                    />

                    <Input
                      error={errors.password}
                      dirtyField={dirtyFields.password}
                      formHook={register("password", { required: true })}
                      name={"Password"}
                      inputType={"passoword"}
                    />
                  </div>
                  <div className="mt-3">
                    <a
                      href="/forgot-password"
                      className="underline text-blue-700 md:text-base text-sm font-bold"
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <div className="md:mt-10 mt-8">
                    <button className="bg-blue-700 p-3 rounded-xl w-full text-white md:text-xl text-lg font-bold ">
                      Login to Account
                    </button>
                    <p className="mt-4 text-center md:text-base text-sm">
                      Don't Have an Account?{" "}
                      <a
                        href="/register"
                        className="underline text-blue-700 font-bold"
                      >
                        Register
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

export default Login;
