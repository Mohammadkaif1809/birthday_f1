import React from "react";

/* ================= CARS ================= */

import mclarenCar from "../images/cars/mclarencar.webp";
import mercedesCar from "../images/cars/mercedescar.webp";
import redbullCar from "../images/cars/redbullracingcar.webp";
import ferrariCar from "../images/cars/ferraricar.avif";
import astonCar from "../images/cars/astonmartincar.avif";
import alpineCar from "../images/cars/alpinecar.avif";
import haasCar from "../images/cars/haasf1teamcar.avif";
import sauberCar from "../images/cars/kicksaubercar.avif";
import racingBullsCar from "../images/cars/racingbullscar.avif";
import williamsCar from "../images/cars/williamscar.avif";

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

/* ================= TEAM LOGOS ================= */
import mclarenLogo from "../images/drivers/teamlogos/2025mclarenlogowhite.webp";
import mercedesLogo from "../images/drivers/teamlogos/2025mercedeslogowhite.webp";
import redbullLogo from "../images/drivers/teamlogos/2025redbullracinglogowhite.webp";
import ferrariLogo from "../images/drivers/teamlogos/2025ferrarilogowhite.webp";
import astonLogo from "../images/drivers/teamlogos/2025astonmartinlogowhite.webp";
import alpineLogo from "../images/drivers/teamlogos/2025alpinelogowhite.webp";
import haasLogo from "../images/drivers/teamlogos/2025haasf1teamlogowhite.webp";
import sauberLogo from "../images/drivers/teamlogos/2025kicksauberlogowhite.webp";
import racingBullsLogo from "../images/drivers/teamlogos/2025racingbullslogowhite.webp";
import williamsLogo from "../images/drivers/teamlogos/2025williamslogowhite.webp";

/* ================= EFFECT ================= */
import bgEffect from "../images/effect/eff2.webp";

/* ================= TEAM COLORS ================= */
const TEAM_BG = {
  mclaren: "#ff7a00",
  mercedes: "#00a19c",
  redbull: "#1e5bc6",
  ferrari: "#c90000",
  aston: "#006f62",
  alpine: "#0090ff",
  haas: "#6c6c6c",
  sauber: "#00e701",
  racingbulls: "#355cff",
  williams: "#005aff",
};

/* ================= DATA ================= */
const teams = [
  {
    name: "McLaren",
    key: "mclaren",
    drivers: [
      { name: "Oscar Piastri", img: piastri },
      { name: "Lando Norris", img: norris },
    ],
    car: mclarenCar,
    logo: mclarenLogo,
  },
  {
    name: "Mercedes",
    key: "mercedes",
    drivers: [
      { name: "George Russell", img: russell },
      { name: "Kimi Antonelli", img: antonelli },
    ],
    car: mercedesCar,
    logo: mercedesLogo,
  },
  {
    name: "Red Bull Racing",
    key: "redbull",
    drivers: [
      { name: "Max Verstappen", img: max },
      { name: "Yuki Tsunoda", img: tsunoda },
    ],
    car: redbullCar,
    logo: redbullLogo,
  },
  {
    name: "Ferrari",
    key: "ferrari",
    drivers: [
      { name: "Charles Leclerc", img: leclerc },
      { name: "Lewis Hamilton", img: hamilton },
    ],
    car: ferrariCar,
    logo: ferrariLogo,
  },
  {
    name: "Aston Martin",
    key: "aston",
    drivers: [
      { name: "Fernando Alonso", img: alonso },
      { name: "Lance Stroll", img: stroll },
    ],
    car: astonCar,
    logo: astonLogo,
  },
  {
    name: "Alpine",
    key: "alpine",
    drivers: [
      { name: "Pierre Gasly", img: gasly },
      { name: "Franco Colapinto", img: colapinto },
    ],
    car: alpineCar,
    logo: alpineLogo,
  },
  {
    name: "Haas",
    key: "haas",
    drivers: [
      { name: "Esteban Ocon", img: ocon },
      { name: "Oliver Bearman", img: bearman },
    ],
    car: haasCar,
    logo: haasLogo,
  },
  {
    name: "Kick Sauber",
    key: "sauber",
    drivers: [
      { name: "Nico Hulkenberg", img: hulkenberg },
      { name: "Gabriel Bortoleto", img: bortoleto },
    ],
    car: sauberCar,
    logo: sauberLogo,
  },
  {
    name: "Racing Bulls",
    key: "racingbulls",
    drivers: [
      { name: "Liam Lawson", img: lawson },
      { name: "Isack Hadjar", img: hadjar },
    ],
    car: racingBullsCar,
    logo: racingBullsLogo,
  },
  {
    name: "Williams",
    key: "williams",
    drivers: [
      { name: "Alexander Albon", img: albon },
      { name: "Carlos Sainz", img: sainz },
    ],
    car: williamsCar,
    logo: williamsLogo,
  },
];

const Teams = () => {
  return (
    <div className="bg-[#f6f4f2] pt-25
     px-4 sm:px-8 lg:px-14 py-12">
      <h1 className="text-[40px] font-extrabold mb-2">F1 TEAMS 2025</h1>
      <p className="text-gray-600 mb-14 pt-5">
        Find the current Formula 1 teams for the 2025 season
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {teams.map((team, i) => (
          <div
            key={i}
            className="group relative h-[260px] rounded-xl overflow-hidden
                       text-white transition-transform duration-500
                       hover:scale-[1.015]"
          >
            {/* BASE COLOR */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: TEAM_BG[team.key] }}
            />

            {/* HALFTONE */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${bgEffect})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: .35,
              }}
            />

            {/* DARK DEPTH */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />

            {/* CONTENT */}
            <div className="relative z-10 h-full p-6 flex flex-col">
              {/* TOP ROW */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[26px] font-extrabold relative w-fit">
                    {team.name}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                  </h2>

                  <div className="flex items-center gap-4 mt-3">
                    {team.drivers.map((d, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-white/20 p-[2px] flex items-center justify-center">
                          <img
                            src={d.img}
                            alt={d.name}
                            className="w-full h-full rounded-full object-cover object-top"
                          />
                        </div>

                        <span className="text-sm opacity-90">
                          {d.name.split(" ")[0]}{" "}
                          <span className="font-semibold uppercase">
                            {d.name.split(" ").slice(1).join(" ")}
                          </span>
                        </span>

                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="
                    w-12 h-12
                    rounded-full
                    flex items-center justify-center
                    transition-transform duration-300
                    group-hover:scale-105
                  "
                  style={{
                    backgroundColor: "rgba(0,0,0,0.35)",
                  }}
                >
                  <img
                    src={team.logo}
                    alt={team.name}
                    className="h-6 object-contain"
                  />
                </div>


              </div>

              {/* CAR IMAGE */}
              <div className="relative flex-1 mt-6">
                <img
                  src={team.car}
                  alt={team.name}
                  className="
                    absolute right-50 bottom-[-10%]
                    w-[85%] max-w-[440px]
                    object-contain
                    drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]
                    transition-transform duration-500
                    group-hover:scale-[1.08]
                    group-hover:translate-x-2
                  "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;







