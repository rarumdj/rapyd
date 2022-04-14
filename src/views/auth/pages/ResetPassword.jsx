import React from "react";
import AuthNavBar from "../components/AuthNavBar";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../../../components/form-input/Input";
import { motion } from "framer-motion";
import SideAd from "../containers/SideAd";

const ResetPassword = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .test("passwordRequirements", "Include (a-z, A-Z, 0-9, @#$)", (value) =>
        [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
          pattern.test(value)
        )
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    mode: "all",
    reValidateMode: "all",
    defaultValues: {
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
        <SideAd />
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
                    <Input
                      error={errors.password}
                      dirtyField={dirtyFields.password}
                      formHook={register("password", { required: true })}
                      name={"Password"}
                      inputType={"passoword"}
                    />

                    <Input
                      error={errors.confirmPassword}
                      dirtyField={dirtyFields.confirmPassword}
                      formHook={register("confirmPassword", { required: true })}
                      name={"Confirm Password"}
                      inputType={"passoword"}
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-600 md:text-base text-sm">
                      Use at least 8 characters including a number, an uppercase
                      and a lowercase letter
                    </p>
                  </div>
                  <div className="md:mt-10 mt-8">
                    <a
                      type="button"
                      href="/forgot-password/success"
                      className="bg-blue-700 p-3 rounded-xl w-full text-white md:text-xl text-lg font-bold text-center"
                    >
                      Reset Password
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

export default ResetPassword;
