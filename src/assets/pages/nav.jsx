import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Logo from "../images/download.svg";
import fiaLogo from "../images/fia-logo.svg";
import f1Pattern from "../svgpatterns/PatternSection.svg";

import dropdown from "../images/dropdown.svg";
import TV from "../images/v.svg";

const navItems = [
  { label: "Schedule", path: "/schedule", dropdown: true },
  { label: "Results", path: "/results", dropdown: true },
  { label: "Drivers", path: "/drivers", dropdown: true },
  { label: "Teams", path: "/teams", dropdown: true },
  { label: "Fantasy & Gaming", path: "/gaming", dropdown: true },
  { label: "F1 Members Area", path: "/members", dropdown: false },
];


const raceSeries = ["F1", "F2", "F3", "F1 Academy"];

const Navbar = () => {
  const navigate = useNavigate();
  
  const [showTop, setShowTop] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [raceOpen, setRaceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowTop(currentScroll < lastScroll || currentScroll < 60);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    
    <>
      {/* ================= TOP WHITE BAR ================= */}
        <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#F7F4EF] transition-transform duration-300 ${
        showTop ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 h-12 text-[13px] font-semibold uppercase">

        {/* LEFT (UNCHANGED) */}
        <div className="relative flex items-end gap-4 p-[2px]">
          <img src={fiaLogo} alt="FIA" className="h-[22px] mb-1" />
          <span className="h-5 w-px bg-black/30 mb-1 ml-2"  />

          {/* RACE SERIES (UNCHANGED) */}
          <button
            onClick={() => setRaceOpen(!raceOpen)}
            className="
              relative group flex items-center font-bold gap-1 text-[14px]
              px-3 py-1.5 rounded-full
              transition-all duration-200 ease-out
            "
          >
            <span
              className="
                absolute inset-0 rounded-full
                bg-black/10 opacity-0
                group-hover:opacity-100
                transition-opacity duration-200
              "
            />

            <span className="relative z-10 ">Race Series</span>

            <img
              src={dropdown}
              alt=""
              className={`
                relative z-10 h-3
                transition-transform duration-200
                ${raceOpen ? "rotate-180" : "group-hover:rotate-180"}
              `}
            />
          </button>

          {raceOpen && (
            <div className="absolute top-full left-0 mt-3 w-40 bg-white rounded-lg shadow-xl py-2 animate-dropdown">
              {raceSeries.map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 text-sm uppercase cursor-pointer hover:bg-black hover:text-white transition"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CENTER + RIGHT (NO GAP NOW) */}
        <div className="flex items-end gap-6">

          {/* CENTER */}
          {/* <div className="hidden md:flex items-center gap-6">
            {["Authentics", "Store", "Tickets", "Hospitality", "Experiences"].map(
              (item) => (
                <span
                  key={item}
                  className="
                    relative group cursor-pointer
                    font-bold
                    tracking-wide
                    pb-1
                    transition-colors duration-200 ease-out
                    active:scale-[0.96]
                  "
                >
                  {item} */}

                  {/* smooth underline */}
                  {/* <span
                    className="
                      absolute left-0 -bottom-[2px]
                      h-[2px] w-full
                      bg-black
                      origin-left
                      scale-x-0
                      transition-transform duration-300 ease-out
                      group-hover:scale-x-100
                    "
                  />
                </span>
              )
            )}
          </div> */}



          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <span className="h-5 w-px bg-black/30" />
            <img src={TV} alt="TV" className="h-4 cursor-pointer" />

            {/* SIGN IN */}
            <button
              onClick={() => navigate("/signin")}
              className="
                bg-black text-white px-4 py-[5px]
                rounded-full text-xs font-bold
                transition-all duration-300 ease-out
                hover:-translate-y-[1px]
                hover:shadow-md
                active:scale-[0.94]
              "
            >
              Sign In
            </button>

            {/* SUBSCRIBE */}
            <button
              className="
                bg-red-600 text-white px-4 py-[5px]
                rounded-full text-xs font-bold
                transition-all duration-300 ease-out
                hover:-translate-y-[1px]
                hover:shadow-md
                active:scale-[0.94]
              "
            >
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </div>


      {/* ================= BLACK NAVBAR ================= */}
      <header
        className={`sticky z-40 transition-all duration-300 ${
          showTop ? "top-12" : "top-0"
        }`}
      >
        <div className="relative overflow-hidden">

        {/* BASE */}
        <div className="absolute inset-0 bg-[#0b0c10] pointer-events-none" />

        {/* SVG GEOMETRY */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${f1Pattern})`,
            backgroundRepeat: "repeat",
            backgroundSize: "640px 640px",
            opacity: 0.18,
          }}
        />

        {/* DARK DEPTH GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/55 pointer-events-none" />

        {/* DOUBLE WHITE DIAGONAL STRIPES */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                135deg,
                rgba(255,255,255,1) 0px,
                rgba(255,255,255,1) 35px,
                rgba(255,255,255,0) 25px,
                rgba(255,255,255,0) 40px,
                rgba(255,255,255,1) 10px,
                rgba(255,255,255,1) 15px,
                rgba(255,255,255,0) 105px,
                rgba(255,255,255,0) 150px
              )
            `,
            mixBlendMode: "soft-light",
            opacity: 0.9,
          }}
        />


          <div className="relative z-10 max-w-[1440px] mx-auto px-6 h-[68px] flex items-center justify-between text-white">

            <NavLink to="/">
              <img src={Logo} alt="F1" className="h-6" />
            </NavLink>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex gap-8 text-[15px] font-semibold uppercase tracking-wide">
              {navItems.map((item) => (
                <NavLink key={item.path} to={item.path}>
                  {({ isActive }) => (
                    <span className="relative group flex items-center gap-1 opacity-90 hover:opacity-100">

                      {item.label}

                      {item.dropdown && (
                        <img
                          src={dropdown}
                          alt=""
                          className="h-4 opacity-70 invert transition-transform duration-200 group-hover:rotate-180"
                        />
                      )}

                      <span
                        className={`absolute left-0 -bottom-4 h-[2px] bg-white transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* MOBILE ICON */}
            <button
              className="md:hidden flex flex-col gap-[5px]"
              onClick={() => setMenuOpen(true)}
            >
              <span className="w-6 h-[2px] bg-white" />
              <span className="w-6 h-[2px] bg-white" />
              <span className="w-6 h-[2px] bg-white" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

