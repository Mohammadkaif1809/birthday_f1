import React, { useRef, useState, useEffect } from "react";
import back from "../images/back.svg";
import next from "../images/next.svg";
import RacingLine from "./Racingline.jsx";

import d1 from "../images/drivers/d1.webp";
import d2 from "../images/drivers/d2.webp";
import d3 from "../images/drivers/d3.webp";
import d4 from "../images/drivers/d4.webp";
import d5 from "../images/drivers/d5.webp";
import d6 from "../images/drivers/d6.webp";
import d7 from "../images/drivers/d7.webp";
import d8 from "../images/drivers/d8.webp";
import d9 from "../images/drivers/d9.webp";
import d10 from "../images/drivers/d10.webp";
import d11 from "../images/drivers/d11.webp";
import d12 from "../images/drivers/d12.webp";
import d13 from "../images/drivers/d13.webp";
import d14 from "../images/drivers/d14.webp";
import d15 from "../images/drivers/d15.webp";
import d16 from "../images/drivers/d16.webp";
import d17 from "../images/drivers/d17.webp";
import d18 from "../images/drivers/d18.webp";
import d19 from "../images/drivers/d19.webp";
import d20 from "../images/drivers/d20.webp";

import DrivePattern from "../images/drivers/DriverPattern.jsx";

/* IMAGE BEHAVIOUR — EXACT F1 */
const imageClass = `
  absolute z-20 lg:top-[18px]
  left-1/2 -translate-x-1/2
  object-contain object-top
  transition-transform duration-300
  group-hover:scale-110
  origin-top
`;

const DriverCard = ({ img, first, last, bg, fg }) => (
  <a
    className="group relative block overflow-hidden
               w-[152px] md:w-[162px] lg:w-[181px]
               aspect-[0.666]
               shadow-[0_6px_18px_rgba(0,0,0,0.16)]
               hover:shadow-[0_10px_24px_rgba(0,0,0,0.2)]
               transition-shadow duration-300
               rounded-[10px_10px_14px_14px]"
    style={{
      "--f1-team-colour": bg,
      "--f1-accessible-colour": fg,
            background: `
        linear-gradient(
          to bottom,
          color-mix(in srgb, var(--f1-team-colour) 92%, black 8%),
          color-mix(in srgb, var(--f1-team-colour) 88%, black 22%)
        )
      `
      ,
    }}
  >
    {/* PATTERN */}
      <span
        className="
          absolute inset-0
          z-10
          pointer-events-none
          transition-transform duration-500
          group-hover:scale-[1.04]
        "
        style={{
          color: "var(--f1-accessible-colour)",
          opacity: 1.6,
          mixBlendMode: "overlay",
        }}
      >
        <DrivePattern />
      </span>


    {/* DRIVER IMAGE */}
    <img src={img} alt={`${first} ${last}`} className={imageClass} />

    {/* BOTTOM GRADIENT */}
    <span
      className="absolute z-30 inset-x-0 bottom-0 h-[30%] pointer-events-none"
      style={{
        background: `
          linear-gradient(
            to top,
            var(--f1-team-colour) -20%,
            rgba(0,0,0,0.35) 35%,
            rgba(0,0,0,0) 100%
          )
        `,
      }}
    >
      <span
        className="relative z-10 flex flex-col items-center text-white
                   px-2 pb-2 md:pb-3 translate-y-[6px] md:translate-y-[10px]"
        style={{ textShadow: "0 2px 6px rgba(0,0,0,0.45)" }}
      >
        <span className="text-[14px] md:text-[16px] font-medium">
          {first}
        </span>
        <span className="text-[18px] md:text-[20px] font-extrabold leading-tight">
          {last}
        </span>
      </span>
    </span>
  </a>
);

const Drivers = () => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const CARD_WIDTH = 181 + 24; // card + gap-6

  const scrollNext = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const scrollBack = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: -CARD_WIDTH,
      behavior: "smooth",
    });
  };

  /* PROGRESS CALCULATION */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateProgress = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) {
        setProgress(100);
        return;
      }
      const percent = (el.scrollLeft / maxScroll) * 100;
      setProgress(Math.min(100, Math.max(0, percent)));
    };

    el.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => el.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <section className="bg-white">
      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h2 className="uppercase text-[18px] sm:text-[22px]
                         font-extrabold tracking-[0.16em] sm:tracking-[0.18em]">
            drivers
          </h2>

          <div className="hidden sm:flex items-center gap-6 text-sm font-semibold opacity-80 hover:opacity-100">
            <span className="cursor-pointer font-bold">View all</span>

            <div className="flex gap-4">
              <button
                onClick={scrollBack}
                className="p-2 rounded-full hover:bg-black/5"
              >
                <img src={back} className="w-5 brightness-0" />
              </button>

              <button
                onClick={scrollNext}
                className="p-2 rounded-full hover:bg-black/5"
              >
                <img src={next} className="w-5 brightness-0" />
              </button>
            </div>
          </div>
        </div>

        {/* SIDE FADES */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10
                        bg-gradient-to-r from-white to-transparent z-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10
                        bg-gradient-to-l from-white to-transparent z-40" />

        {/* DRIVER CARDS */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide w-full h-[270px]
                     -mx-4 px-4 sm:mx-0 sm:px-0 bg-white isolate"
        >
          <div className="flex gap-6 min-w-max pb-2">
            <DriverCard img={d1} first="Oscar" last="Piastri" bg="#F47600" fg="#863400" />
            <DriverCard img={d2} first="Lando" last="Norris" bg="#F47600" fg="#863400" />
            <DriverCard img={d3} first="George" last="Russell" bg="#00D2BE" fg="#00594F" />
            <DriverCard img={d4} first="Andrea" last="Kimi Antonelli" bg="#00D2BE" fg="#00594F" />
            <DriverCard img={d5} first="Max" last="Verstappen" bg="#0600EF" fg="#FCD700" />
            <DriverCard img={d6} first="Yuki" last="Tsunoda" bg="#0600EF" fg="#FCD700" />
            <DriverCard img={d7} first="Charles" last="Leclerc" bg="#DC0000" fg="#FA0000" />
            <DriverCard img={d8} first="Lewis" last="Hamilton" bg="#DC0000" fg="#FA0000" />
            <DriverCard img={d9} first="Alexander" last="Albon" bg="#005AFF" fg="#002B7F" />
            <DriverCard img={d10} first="Carlos" last="Sainz" bg="#005AFF" fg="#002B7F" />
            <DriverCard img={d11} first="Liam" last="Lawson" bg="#1E41FF" fg="#0A1B6F" />
            <DriverCard img={d12} first="Isack" last="Hadjar" bg="#1E41FF" fg="#0A1B6F" />
            <DriverCard img={d13} first="Lance" last="Stroll" bg="#006F62" fg="#00332E" />
            <DriverCard img={d14} first="Fernando" last="Alonso" bg="#006F62" fg="#00332E" />
            <DriverCard img={d15} first="Esteban" last="Ocon" bg="#E6002B" fg="#7A0016" />
            <DriverCard img={d16} first="Oliver" last="Bearman" bg="#E6002B" fg="#7A0016" />
            <DriverCard img={d17} first="Nico" last="Hülkenberg" bg="#00E701" fg="#006B00" />
            <DriverCard img={d18} first="Gabriel" last="Bortoleto" bg="#00E701" fg="#006B00" />
            <DriverCard img={d19} first="Pierre" last="Gasly" bg="#0090FF" fg="#003E7A" />
            <DriverCard img={d20} first="Franco" last="Colapinto" bg="#0090FF" fg="#003E7A" />
          </div>
        </div>
      </div>

      {/* PROGRESS LINE */}
      <div className="relative h-[3px] mt-10 ml-8 w-[93%] bg-gray-200 overflow-hidden rounded">
        <div
          className="absolute left-0 top-0 h-full bg-gray-500 transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* RACING LINE */}
      <div className="mt-10 ml-7 w-[94%] transform scale-x-[-1] scale-y-[-1]">
        <RacingLine height={20} color="#e10600" />
      </div>
    </section>
  );
};

export default Drivers;
