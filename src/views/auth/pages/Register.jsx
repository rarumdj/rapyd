import React from "react";
import { Icon } from "@iconify/react";
import AuthNavBar from "../components/AuthNavBar";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Input from "../../../components/form-input/Input";
import { motion } from "framer-motion";
import SideAd from "../containers/SideAd";

const Register = () => {
  // form validation rules
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .min(11, "Phone must be at least 11 characters")
      .required("Phone number is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required")
      .test("passwordRequirements", "Include (a-z, A-Z, 0-9, @#$)", (value) =>
        [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
          pattern.test(value)
        )
      ),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    mode: "all",
    reValidateMode: "all",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
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

  // function onSubmit(data) {
  //   // display form data on success
  //   alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
  //   return true;
  // }
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
                      error={errors.firstName}
                      dirtyField={dirtyFields.firstName}
                      formHook={register("firstName", { required: true })}
                      name={"Firstname"}
                      inputType={"text"}
                    />

                    <Input
                      error={errors.lastName}
                      dirtyField={dirtyFields.lastName}
                      formHook={register("lastName", { required: true })}
                      name={"Lastname"}
                      inputType={"text"}
                    />

                    <Input
                      error={errors.phone}
                      dirtyField={dirtyFields.phone}
                      formHook={register("phone", { required: true })}
                      name={"Phone Number"}
                      inputType={"tel"}
                    />

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
                  <div className="md:mt-10 mt-8">
                    <button
                      type="submit"
                      // href="verify-email"
                      className="bg-blue-700 p-3 rounded-xl w-full text-white md:text-xl text-lg font-bold text-center"
                    >
                      Register Account
                    </button>
                    <p className="mt-4 text-center md:text-base text-sm">
                      Already Have an Account?{" "}
                      <a
                        href="/login"
                        className="underline text-blue-700 font-bold"
                      >
                        Login
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

export default Register;
