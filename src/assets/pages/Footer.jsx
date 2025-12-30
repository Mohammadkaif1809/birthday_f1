import React from "react";
import { useEffect, useState } from "react";


import AppStore from "../images/app-store.svg";
import GooglePlay from "../images/google-play.svg";
import DropDown from "../images/dropdown.svg";
import RacingLine from "./Racingline.jsx";
import Logo from "../images/download.svg";

import Fb from "../images/fb.svg";
import X from "../images/x.svg";
import Insta from "../images/insta.svg";
import Yt from "../images/yt.svg";

const Footer = () => {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const setMode = (mode) => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setOpen(false);
  };


  return (
    <div>
      <div className="h-[330px]">

        {/* TOP SECTION */}
        <div className="px-6 sm:px-10 pt-7">
          <div className="flex flex-col sm:flex-row justify-between gap-6">

            {/* TITLE */}
            <h2 className="
             pl-6 sm:pl-3
              uppercase
              text-[16px] sm:text-[38px]
              font-extrabold
              tracking-[0.05em]
            ">
              Download the Official F1 App
            </h2>

            {/* APP STORE BUTTONS */}
            <ul className="flex gap-6">
              <li>
                <img
                  className="
                    bg-black p-2 rounded-[5px]
                    cursor-pointer
                    transition-all duration-300
                    hover:opacity-70
                  "
                  src={AppStore}
                  alt=""
                />
              </li>
              <li>
                <img
                  className="
                    bg-black p-2 rounded-[5px]
                    cursor-pointer
                    transition-all duration-300
                    hover:opacity-70
                  "
                  src={GooglePlay}
                  alt=""
                />
              </li>
            </ul>
          </div>

          {/* NAV LINKS */}
          <ul className="
            mt-6
            font-bold
            flex flex-wrap
            gap-x-4 gap-y-3
            justify-between
          ">
            {[
              "Schedule",
              "Drivers",
              "News",
              "Teams",
              "Fantasy & Gaming",
              "Cookie Preferences",
            ].map((item) => (
              <li
                key={item}
                className="
                  relative cursor-pointer px-4 py-1 
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-[#e10600]
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </li>
            ))}

            <li className="flex items-center gap-1 cursor-pointer">
              More
              <img className="w-5" src={DropDown} alt="" />
            </li>
          </ul>
        </div>

        {/* LOGO + RACING LINE */}
        <div className="flex items-center">
          <div className="mt-10 pl-6 sm:pl-14">
            <img className="h-[18px]" src={Logo} alt="" />
          </div>

          <div className="mt-10 ml-6 sm:ml- w-[87%]">
            <RacingLine height={20} color="#e10600" />
          </div>
        </div>

        {/* SOCIALS + BUTTON */}
        <div className="px-6 sm:px-13 pt-8 flex justify-between items-center">

          {/* SOCIAL ICONS */}
          <ul className="flex gap-3">
            {[Fb, X, Insta, Yt].map((icon, i) => (
              <li
                key={i}
                className="
                  p-2 rounded-full
                  cursor-pointer
                  transition-all duration-300
                  hover:bg-gray-200
                "
              >
                <img className="w-[20px]" src={icon} alt="" />
              </li>
            ))}
          </ul>

          {/* DISPLAY MODE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="border-2 flex items-center gap-2 rounded-full px-5 py-[5px] font-bold transition-all duration-200 hover:bg-gray-100 active:scale-95"
          >
            Display mode
            <img className="w-5" src={DropDown} alt="" />
          </button>
          {open && (
            <div className="absolute mt-2 right-0 w-40 rounded-xl border bg-white shadow-lg z-50">
              <button
                onClick={() => setMode("light")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                ☀ Light mode
              </button>
              <button
                onClick={() => setMode("dark")}
                className="w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                🌙 Dark mode
              </button>
            </div>
          )}


        </div>

        {/* COPYRIGHT */}
        <div className="opacity-75 text-xs pl-6 sm:pl-14 pt-7">
          © 2003-2025 Formula One World Championship Limited
        </div>

      </div>
    </div>
  );
};

export default Footer;

