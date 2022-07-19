import React from "react";
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Footer = () => {
  const date = new Date();
  
  return (
    <footer className="bg-blue-700 py-12 px-6 lg:px-16 flex justify-center">
      <div className="flex md:flex-row flex-col justify-between md:items-center md:space-y-0 space-y-4 w-screen max-w-[100rem]">
        <div className="space-y-2">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <p className="text-white md:text-base text-sm">©{date.getFullYear()} Rapyd</p>
        </div>
        <div className="flex md:flex-row flex-col-reverse md:space-x-28 space-x-0">
          <ul className="flex space-x-4 text-white md:text-base text-sm md:mt-0 mt-4">
            <li className="flex w-8 h-8 rounded-full bg-white">
              <a href="/" className="m-auto">
                <Icon icon="bi:twitter" fontSize={16} color="000" />
              </a>
            </li>
            <li className="flex w-8 h-8 rounded-full bg-white">
              <a href="/" className="m-auto">
                <Icon icon="bi:linkedin" fontSize={16} color="000" />
              </a>
            </li>
            <li className="flex w-8 h-8 rounded-full bg-white">
              <a href="/" className="m-auto">
                <Icon icon="bi:facebook" fontSize={16} color="000" />
              </a>
            </li>
            <li className="flex w-8 h-8 rounded-full bg-white">
              <a href="/" className="m-auto">
                <Icon icon="bi:instagram" fontSize={16} color="000" />
              </a>
            </li>
          </ul>
          <ul className="flex md:flex-row flex-col md:space-x-6 space-x-0 md:space-y-0 space-y-1 text-white md:text-base text-sm">
            <li>
              <NavLink to="/policy">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Terms of service</NavLink>
            </li>
            <li>
              <NavLink to="/faqs">FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/">Eligibility</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
