import React from "react";

/* ================= DRIVER IMAGES ================= */
import piastri from "../images/drivers/d1.webp";
import norris from "../images/drivers/d2.webp";
import russell from "../images/drivers/d3.webp";
import antonelli from "../images/drivers/d4.webp";
import max from "../images/drivers/d5.webp";
import tsunoda from "../images/drivers/d6.webp";
import leclerc from "../images/drivers/d7.webp";
import hamilton from "../images/drivers/d8.webp";
import albon from "../images/drivers/d9.webp";
import sainz from "../images/drivers/d10.webp";
import lawson from "../images/drivers/d11.webp";
import hadjar from "../images/drivers/d12.webp";
import stroll from "../images/drivers/d13.webp";
import alonso from "../images/drivers/d14.webp";
import ocon from "../images/drivers/d15.webp";
import bearman from "../images/drivers/d16.webp";
import gasly from "../images/drivers/d17.webp";
import colapinto from "../images/drivers/d18.webp";
import hulkenberg from "../images/drivers/d19.webp";
import bortoleto from "../images/drivers/d20.webp";

import bgEffect from "../images/effect/eff2.webp";


/* ================= FLAGS ================= */
import australia from "../images/australia.svg";
import uk from "../images/greatbritainflag.svg";
import italy from "../images/italy.svg";
import netherlands from "../images/netherland.svg";
import japan from "../images/japan.svg";
import monaco from "../images/monaco.svg";
import thailand from "../images/thailand.svg";
import spain from "../images/spain.svg";
import france from "../images/france.svg";
import canada from "../images/canada.svg";
import argentina from "../images/argentina.svg";
import germany from "../images/germany.svg";
import brazil from "../images/brazil.svg";

/* ================= TEAM BACKGROUNDS ================= */
const TEAM_BG = {
  mclaren: "#ff7a00",
  mercedes: "#00a19c",
  redbull: "#1e5bc6",
  ferrari: "#c90000",
  williams: "#005aff",
  racingbulls: "#355cff",
  aston: "#006f62",
  haas: "#6c6c6c",
  alpine: "#0090ff",
  sauber: "#00e701",
};


/* ================= DRIVERS (OFFICIAL ORDER) ================= */
const drivers = [
  // McLaren
  { first: "Oscar", last: "Piastri", team: "McLaren", teamKey: "mclaren", number: "81", img: piastri, flag: australia },
  { first: "Lando", last: "Norris", team: "McLaren", teamKey: "mclaren", number: "4", img: norris, flag: uk },

  // Mercedes
  { first: "George", last: "Russell", team: "Mercedes", teamKey: "mercedes", number: "63", img: russell, flag: uk },
  { first: "Kimi", last: "Antonelli", team: "Mercedes", teamKey: "mercedes", number: "12", img: antonelli, flag: italy },

  // Red Bull
  { first: "Max", last: "Verstappen", team: "Red Bull Racing", teamKey: "redbull", number: "1", img: max, flag: netherlands },
  { first: "Yuki", last: "Tsunoda", team: "Red Bull Racing", teamKey: "redbull", number: "22", img: tsunoda, flag: japan },

  // Ferrari
  { first: "Charles", last: "Leclerc", team: "Ferrari", teamKey: "ferrari", number: "16", img: leclerc, flag: monaco },
  { first: "Lewis", last: "Hamilton", team: "Ferrari", teamKey: "ferrari", number: "44", img: hamilton, flag: uk },

  // Williams
  { first: "Alexander", last: "Albon", team: "Williams", teamKey: "williams", number: "23", img: albon, flag: thailand },
  { first: "Carlos", last: "Sainz", team: "Williams", teamKey: "williams", number: "55", img: sainz, flag: spain },

  // Racing Bulls
  { first: "Liam", last: "Lawson", team: "Racing Bulls", teamKey: "racingbulls", number: "30", img: lawson, flag: uk },
  { first: "Isack", last: "Hadjar", team: "Racing Bulls", teamKey: "racingbulls", number: "6", img: hadjar, flag: france },

  // Aston Martin
  { first: "Lance", last: "Stroll", team: "Aston Martin", teamKey: "aston", number: "18", img: stroll, flag: canada },
  { first: "Fernando", last: "Alonso", team: "Aston Martin", teamKey: "aston", number: "14", img: alonso, flag: spain },

  // Haas
  { first: "Esteban", last: "Ocon", team: "Haas F1 Team", teamKey: "haas", number: "31", img: ocon, flag: france },
  { first: "Oliver", last: "Bearman", team: "Haas F1 Team", teamKey: "haas", number: "87", img: bearman, flag: uk },

  // Alpine
  { first: "Pierre", last: "Gasly", team: "Alpine", teamKey: "alpine", number: "10", img: gasly, flag: france },
  { first: "Franco", last: "Colapinto", team: "Alpine", teamKey: "alpine", number: "43", img: colapinto, flag: argentina },

  // Kick Sauber
  { first: "Nico", last: "Hulkenberg", team: "Kick Sauber", teamKey: "sauber", number: "27", img: hulkenberg, flag: germany },
  { first: "Gabriel", last: "Bortoleto", team: "Kick Sauber", teamKey: "sauber", number: "5", img: bortoleto, flag: brazil },
];

/* ================= COMPONENT ================= */
const Drivers = () => {

const groupedDrivers = drivers.reduce((acc, driver) => {
  if (!acc[driver.teamKey]) {
    acc[driver.teamKey] = [];
  }
  acc[driver.teamKey].push(driver);
  return acc;
}, {});


  return (
    <div className="bg-[#f6f4f2] min-h-screen px-14 pt-25 py-12">
      <h1 className="text-[40px] font-extrabold mb-2">F1 DRIVERS 2025</h1>
      <p className="text-gray-600 mb-14 pt-5">
        Find the current Formula 1 drivers for the 2025 season
      </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {Object.values(groupedDrivers).map((teamDrivers, idx) =>
            teamDrivers.map((d, i) => (
              <div
                key={i}
                className="group relative h-[256px] rounded-xl overflow-hidden
                          text-white transition-transform duration-500
                          hover:scale-[1.015]"
              >
                {/* BASE COLOR */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: TEAM_BG[d.teamKey] }}
                />

                {/* F1 HALFTONE EFFECT IMAGE */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${bgEffect})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.35,
                  }}
                />
                {/* DARK DEPTH OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent" />


                {/* CONTENT */}
                <div className="relative z-10 flex h-full">
                  {/* LEFT */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <p className="text-sm opacity-90">{d.team}</p>

                      <span className="block text-[28px] font-extrabold opacity-80 mt-1">
                        {d.number}
                      </span>

                      <h2 className="text-[26px] font-extrabold leading-tight mt-2">
                        <span>{d.first}</span>
                        <span className="block relative w-fit">
                          {d.last}
                          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </span>
                      </h2>
                    </div>

                  <div className="mt-auto pt-4">
                    <img
                      src={d.flag}
                      alt=""
                      className="
                        w-6 h-6
                        rounded-full
                        border border-white
                        bg-white
                        p-[2px]
                        object-cover
                      "
                    />
                  </div>

                  </div>

                  {/* RIGHT IMAGE */}
                <div className="relative w-[280px]">
                  <img
                    src={d.img}
                    alt={d.first}
                    className="
                      absolute top-150 left-[0%] z-30
                      h-[22%]
                      object-contain object-top
                      origin-bottom
                      scale-[11]
                      drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]
                    "
                  />
                </div>

                </div>
              </div>
            ))
          )}
        </div>


    </div>
  );
};

export default Drivers;
