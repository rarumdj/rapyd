import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { logoBlue } from "../assets/images";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AuthNavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "hidden",
      },
    },
  };

  return (
    <header className="lg:bg-transparent bg-white py-4 px-6 lg:py-4 lg:px-16 lg:static fixed top-0 w-full z-50 ">
      <nav className="flex flex-row justify-between items-center">
        <div className="z-50">
          <Link to="/">
            <img
              src={logoBlue}
              alt="logo"
              className="object-scale-down lg:w-full w-20 "
            />
          </Link>
        </div>
        <div>
          <button
            className="-translate-y-4 -translate-x-8 lg:hidden block absolute z-50"
            onClick={handleClick}
          >
            <Icon
              icon={click ? "ep:close" : "charm:menu-hamburger"}
              fontSize={30}
              className="text-gray-600 invert"
            />
          </button>
          <aside>
            <motion.nav
              initial={false}
              animate={click ? "open" : "closed"}
              variants={variants}
              className={`lg:hidden block bg-blue-700 absolute top-0 left-0 right-0 bottom-0 min-h-screen`}
            >
              <div className="flex flex-col justify-center h-full items-center min-w-full px-8">
                <div className="space-y-16 w-full max-w-md">
                  <ul className="flex flex-col space-y-10 items-center text-white font-semibold">
                    <li>
                      <a
                        className="cursor-pointer"
                        href="/#eligibility"
                        onClick={() => setClick(false)}
                      >
                        About us
                      </a>
                    </li>
                    <li>
                      <a
                        className="cursor-pointer"
                        href="/#contact"
                        onClick={() => setClick(false)}
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className="cursor-pointer"
                        href="/#testimonial"
                        onClick={() => setClick(false)}
                      >
                        Testimonial
                      </a>
                    </li>
                    <li>
                      <a
                        className="cursor-pointer"
                        href="/#ourcar"
                        onClick={() => setClick(false)}
                      >
                        Our Cars
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col space-y-4 items-center min-w-full font-semibold">
                    <li>
                      <Link
                        type="button"
                        className="h-11 w-full flex justify-center items-center rounded-lg border-2 text-white"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        type="button"
                        className="h-11 w-full flex justify-center items-center rounded-lg bg-white text-blue-700"
                        to="/register"
                      >
                        Get Started
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.nav>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default AuthNavBar;
