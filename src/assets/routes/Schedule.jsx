import React, { useState } from "react";

/* ================= FLAGS ================= */
import australia from "../images/australia.svg";
import china from "../images/china.svg";
import japan from "../images/japan.svg";
import bahrain from "../images/bahrain.svg";
import saudi from "../images/saudi.svg";
import usa from "../images/usa.svg";
import italy from "../images/italy.svg";
import monaco from "../images/monaco.svg";
import spain from "../images/spain.svg";
import canada from "../images/canada.svg";
import austria from "../images/austria.svg";
import uk from "../images/greatbritainflag.svg";
import belgium from "../images/belgium.svg";
import hungary from "../images/hungary.svg";
import netherlands from "../images/netherland.svg";
import azerbaijan from "../images/azerbaijan.svg";
import singapore from "../images/singapore.svg";
import mexico from "../images/mexico.svg";
import brazil from "../images/brazil.svg";
import qatar from "../images/qatar.svg";
import uae from "../images/uae.svg";
import flag from "./flag.svg";
import back from "../images/back.svg";
import next from "../images/next.svg";


/* ================= DRIVER IMAGES ================= */
import norris from "../images/drivers/d2.webp";
import max from "../images/drivers/d5.webp";
import piastri from "../images/drivers/d1.webp";

/* ================= DATA ================= */
const races = [
  { round: "ROUND 1", country: "Australia", flag: australia, date: "14 – 16 MAR" },
  { round: "ROUND 2", country: "China", flag: china, date: "21 – 23 MAR" },
  { round: "ROUND 3", country: "Japan", flag: japan, date: "04 – 06 APR" },
  { round: "ROUND 4", country: "Bahrain", flag: bahrain, date: "11 – 13 APR" },
  { round: "ROUND 5", country: "Saudi Arabia", flag: saudi, date: "18 – 20 APR" },
  { round: "ROUND 6", country: "Miami", flag: usa, date: "02 – 04 MAY" },
  { round: "ROUND 7", country: "Emilia-Romagna", flag: italy, date: "16 – 18 MAY" },
  { round: "ROUND 8", country: "Monaco", flag: monaco, date: "23 – 25 MAY" },
  { round: "ROUND 9", country: "Spain", flag: spain, date: "30 MAY – 01 JUN" },
  { round: "ROUND 10", country: "Canada", flag: canada, date: "13 – 15 JUN" },
  { round: "ROUND 11", country: "Austria", flag: austria, date: "27 – 29 JUN" },
  { round: "ROUND 12", country: "Great Britain", flag: uk, date: "04 – 06 JUL" },
  { round: "ROUND 13", country: "Belgium", flag: belgium, date: "25 – 27 JUL" },
  { round: "ROUND 14", country: "Hungary", flag: hungary, date: "01 – 03 AUG" },
  { round: "ROUND 15", country: "Netherlands", flag: netherlands, date: "29 – 31 AUG" },
  { round: "ROUND 16", country: "Italy", flag: italy, date: "05 – 07 SEP" },
  { round: "ROUND 17", country: "Azerbaijan", flag: azerbaijan, date: "19 – 21 SEP" },
  { round: "ROUND 18", country: "Singapore", flag: singapore, date: "03 – 05 OCT" },
  { round: "ROUND 19", country: "United States", flag: usa, date: "17 – 19 OCT" },
  { round: "ROUND 20", country: "Mexico", flag: mexico, date: "24 – 26 OCT" },
  { round: "ROUND 21", country: "Brazil", flag: brazil, date: "07 – 09 NOV" },
  { round: "ROUND 22", country: "Las Vegas", flag: usa, date: "20 – 22 NOV" },
  { round: "ROUND 23", country: "Qatar", flag: qatar, date: "28 – 30 NOV" },
  { round: "ROUND 24", country: "Abu Dhabi", flag: uae, date: "05 – 07 DEC" },
];

/* ================= COMPONENT ================= */
const Schedule = () => {
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState(2025);

  const years = Array.from({ length: 76 }, (_, i) => 2025 - i);

  return (
    <div className="bg-[#f6f4f2] pt-12 min-h-screen">

      {/* HEADER (WHITE BG ONLY HERE) */}
      <div className="bg-white px-14 pt-10 pb-10">

        {/* YEAR SELECT */}
        <div className="relative inline-block mb-8">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3
                       border-2 border-black rounded-full
                       px-7 py-3 font-bold text-sm"
          >
            {year}
            <span
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          {open && (
            <ul className="absolute z-20 mt-2 bg-white border
                           rounded-xl shadow-lg max-h-[260px]
                           overflow-y-auto w-full">
              {years.map((y) => (
                <li
                  key={y}
                  onClick={() => {
                    setYear(y);
                    setOpen(false);
                  }}
                  className="px-4 py-2 text-sm cursor-pointer
                             hover:bg-black/5"
                >
                  {y}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* TITLE */}
        <h1 className="uppercase text-[18px] pb-13 sm:text-[40px] py-4 font-semi-bold tracking-[0.1em]">
          2025 FIA FORMULA ONE WORLD CHAMPIONSHIP™ RACE CALENDAR
        </h1>
      </div>

      {/* GRID */}
      <div className="px-14  py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20">

        {races.map((race, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 flex flex-col justify-between
           shadow-[0_6px_24px_rgba(0,0,0,0.08)] min-h-[270px]
           transition-all duration-300 ease-out
           hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(0,0,0,0.14)]"

          >

            {/* HEADER */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase text-gray-500">
                  {race.round}
                </span>

                <span className="flex items-center gap-2
                                 text-xs font-bold bg-[#f2f2f2]
                                 px-3 py-1 rounded-full">
                  <img src={flag} alt="" className="w-3 h-3" />
                  {race.date}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <img src={race.flag} alt="" className="w-6 h-4 object-cover" />
                <h2 className="text-[26px] font-extrabold leading-none">
                  {race.country}
                </h2>
              </div>

              <p className="text-sm font-medium text-gray-600">
                FORMULA 1 GRAND PRIX 2025
              </p>
            </div>

            {/* RESULTS */}
            <div className="mt-6 flex gap-2">
              {[
                { pos: "1", code: "NOR", time: "1:42:06.304", img: norris, bg: "bg-[#FF8000]" },
                { pos: "2", code: "VER", time: "+0.895", img: max, bg: "bg-[#3671C6]" },
                { pos: "3", code: "PIA", time: "+8.481", img: piastri, bg: "bg-[#FF8000]" },
              ].map((d, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-[#f6f6f6]
                            px-3 py-2 rounded-lg flex-1"
                >
                  {/* POSITION */}
                  <span className="text-xs font-bold w-4">
                    {d.pos}
                  </span>

                  {/* DRIVER IMAGE WITH TEAM COLOR */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center ${d.bg}`}>
                    <img
                      src={d.img}
                      alt=""
                      className="w-6 h-6 rounded-full object-cover object-top"
                    />
                  </div>

                  {/* CODE + TIME */}
                  <div className="leading-tight">
                    <div className="text-[12px] font-extrabold tracking-wide">
                      {d.code}
                    </div>
                    <div className="text-[11px] text-gray-600 font-medium">
                      {d.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        ))}

      </div>
      {/* YEAR NAVIGATION */}
      <div className="px-14 pb-24">

        {/* RED LINE */}
        <div className="w-full h-[3px] bg-[#e10600] mb-10" />

        {/* NAV BUTTONS */}
        <div className="flex items-center justify-between text-sm font-bold uppercase">

          {/* PREVIOUS YEAR */}
          <button className="group flex flex-col items-start gap-1 hover:opacity-80 transition">
            <div className="flex items-center gap-3">
              <img src={back} alt="Previous" className="w-4 h-4 invert" />
              <span>2024</span>
            </div>
            <span className="h-[2px] w-0 bg-[#e10600] transition-all duration-300 group-hover:w-full" />
          </button>

          {/* NEXT YEAR */}
          <button className="group flex flex-col items-end gap-1 hover:opacity-80 transition">
            <div className="flex items-center gap-3">
              <span>2026</span>
              <img src={next} alt="Next" className="w-4 h-4 invert" />
            </div>
            <span className="h-[2px] w-0 bg-[#e10600] transition-all duration-300 group-hover:w-full" />
          </button>


        </div>
      </div>

    </div>
  );
};

export default Schedule;
