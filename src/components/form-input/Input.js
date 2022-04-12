import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Input = ({ error, dirtyField, formHook, name, inputType }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      {(inputType === "text") |
      (inputType === "tel") |
      (inputType === "email") ? (
        <fieldset
          className={`${
            error
              ? "border-red-500"
              : !error && dirtyField
              ? "border-green-500"
              : "border-gray-300 focus-within:border-blue-700"
          } border-2  border-solid rounded-xl px-3 h-16 relative`}
        >
          <legend className="md:text-base text-sm px-2 md:leading-none leading-none">
            {name}
          </legend>
          <input
            {...formHook}
            type={inputType}
            autoComplete={inputType === "email" ? "email" : ""}
            className="w-full outline-none pl-2 pr-6 h-full focus:outline-none text-gray-400 "
          />

          <Icon
            icon={
              !error && dirtyField
                ? "teenyicons:tick-circle-solid"
                : error
                ? "bxs:error-circle"
                : ""
            }
            fontSize={20}
            className={`${
              !error && dirtyField
                ? "text-green-500"
                : error
                ? "text-red-500"
                : ""
            } absolute inset-y-0 right-0 m-3`}
          />
          {error && (
            <label htmlFor={inputType} className="text-red-500 text-xs">
              {error?.message}
            </label>
          )}
        </fieldset>
      ) : (
        <fieldset
          className={`${
            error
              ? "border-red-500"
              : !error && dirtyField
              ? "border-green-500"
              : "border-gray-300 focus-within:border-blue-700"
          } border-2  border-solid rounded-xl px-3 h-16 relative`}
        >
          <legend className="md:text-base text-sm px-2 md:leading-none leading-none">
            {name}
          </legend>
          <input
            {...formHook}
            autoComplete="current-password"
            type={passwordShown ? "text" : "password"}
            className="w-full outline-none pl-2 pr-12 h-full focus:outline-none text-gray-400 "
          />
          <Icon
            icon={passwordShown ? "carbon:view" : "carbon:view-off"}
            fontSize={20}
            className="absolute inset-y-0 right-0 m-3"
            onClick={togglePassword}
          />

          <Icon
            icon={
              !error && dirtyField
                ? "teenyicons:tick-circle-solid"
                : error
                ? "bxs:error-circle"
                : ""
            }
            fontSize={20}
            className={`${
              !error && dirtyField
                ? "text-green-500"
                : error
                ? "text-red-500"
                : ""
            } absolute inset-y-0 right-6 m-3`}
          />
          {error && (
            <label htmlFor={inputType} className="text-red-500 text-xs">
              {error?.message}
            </label>
          )}
        </fieldset>
      )}
    </>
  );
};

export default Input;
