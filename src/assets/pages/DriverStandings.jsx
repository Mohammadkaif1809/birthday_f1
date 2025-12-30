import React, { useState } from "react";

/* ================= DRIVER IMAGES ================= */
import max from "../images/drivers/d5.webp";
import lando from "../images/drivers/d2.webp";
import oscar from "../images/drivers/d1.webp";
import russell from "../images/drivers/d7.webp";
import leclerc from "../images/drivers/d14.webp";
import hamilton from "../images/drivers/d6.webp";
import sainz from "../images/drivers/d4.webp";
import alonso from "../images/drivers/d8.webp";
import perez from "../images/drivers/d9.webp";
import tsunoda from "../images/drivers/d10.webp";
import stroll from "../images/drivers/d11.webp";
import albon from "../images/drivers/d12.webp";
import ocon from "../images/drivers/d13.webp";
import gasly from "../images/drivers/d15.webp";
import hulkenberg from "../images/drivers/d16.webp";
import magnussen from "../images/drivers/d17.webp";
import ricciardo from "../images/drivers/d18.webp";
import bottas from "../images/drivers/d19.webp";
import zhou from "../images/drivers/d20.webp";
import sargeant from "../images/drivers/d3.webp";

/* ================= FLAGS ================= */
import uk from "../images/greatbritainflag.svg";
import netherlands from "../images/netherland.svg";
import australia from "../images/australia.svg";
import italy from "../images/italy.svg";
import thailand from "../images/thailand.svg";
import spain from "../images/spain.svg";
import germany from "../images/germany.svg";
import france from "../images/france.svg";
import canada from "../images/canada.svg";
import japan from "../images/japan.svg";
import brazil from "../images/brazil.svg";
import argentina from "../images/argentina.svg";
import monaco from "../images/monaco.svg";
import newzealand from "../images/newzealand.svg";

/* ================= TEAM LOGOS ================= */
import redbull from "../images/drivers/teamlogos/2025redbullracinglogowhite.webp";
import mclaren from "../images/drivers/teamlogos/2025mclarenlogowhite.webp";
import ferrari from "../images/drivers/teamlogos/2025ferrarilogowhite.webp";
import mercedes from "../images/drivers/teamlogos/2025mercedeslogowhite.webp";
import aston from "../images/drivers/teamlogos/2025astonmartinlogowhite.webp";
import williams from "../images/drivers/teamlogos/2025williamslogowhite.webp";
import alpine from "../images/drivers/teamlogos/2025alpinelogowhite.webp";
import haas from "../images/drivers/teamlogos/2025haasf1teamlogowhite.webp";
import sauber from "../images/drivers/teamlogos/2025kicksauberlogowhite.webp";
import rb from "../images/drivers/teamlogos/2025racingbullslogowhite.webp";

/* ================= DATA ================= */
const driversData = [
  { pos: 1, name: "Max Verstappen", img: max, nation: netherlands, nationName: "Netherlands", team: redbull, teamName: "Red Bull Racing", points: 423 },
  { pos: 2, name: "Lando Norris", img: lando, nation: uk, nationName: "United Kingdom", team: mclaren, teamName: "McLaren", points: 421 },
  { pos: 3, name: "Oscar Piastri", img: oscar, nation: australia, nationName: "Australia", team: mclaren, teamName: "McLaren", points: 410 },
  { pos: 4, name: "George Russell", img: russell, nation: uk, nationName: "United Kingdom", team: mercedes, teamName: "Mercedes", points: 319 },
  { pos: 5, name: "Charles Leclerc", img: leclerc, nation: monaco, nationName: "Monaco", team: ferrari, teamName: "Ferrari", points: 242 },
  { pos: 6, name: "Lewis Hamilton", img: hamilton, nation: uk, nationName: "United Kingdom", team: ferrari, teamName: "Ferrari", points: 156 },
  { pos: 7, name: "Kimi Antonelli", img: russell, nation: italy, nationName: "Italy", team: mercedes, teamName: "Mercedes", points: 150 },
  { pos: 8, name: "Alexander Albon", img: albon, nation: thailand, nationName: "Thailand", team: williams, teamName: "Williams", points: 73 },
  { pos: 9, name: "Carlos Sainz", img: sainz, nation: spain, nationName: "Spain", team: williams, teamName: "Williams", points: 64 },
  { pos: 10, name: "Fernando Alonso", img: alonso, nation: spain, nationName: "Spain", team: aston, teamName: "Aston Martin", points: 56 },
  { pos: 11, name: "Nico Hulkenberg", img: hulkenberg, nation: germany, nationName: "Germany", team: sauber, teamName: "Kick Sauber", points: 51 },
  { pos: 12, name: "Isack Hadjar", img: ricciardo, nation: france, nationName: "France", team: rb, teamName: "Racing Bulls", points: 51 },
  { pos: 13, name: "Oliver Bearman", img: magnussen, nation: uk, nationName: "United Kingdom", team: haas, teamName: "Haas", points: 41 },
  { pos: 14, name: "Liam Lawson", img: bottas, nation: newzealand, nationName: "New Zealand", team: rb, teamName: "Racing Bulls", points: 38 },
  { pos: 15, name: "Esteban Ocon", img: ocon, nation: france, nationName: "France", team: haas, teamName: "Haas", points: 38 },
  { pos: 16, name: "Lance Stroll", img: stroll, nation: canada, nationName: "Canada", team: aston, teamName: "Aston Martin", points: 33 },
  { pos: 17, name: "Yuki Tsunoda", img: tsunoda, nation: japan, nationName: "Japan", team: redbull, teamName: "Red Bull Racing", points: 33 },
  { pos: 18, name: "Pierre Gasly", img: gasly, nation: france, nationName: "France", team: alpine, teamName: "Alpine", points: 22 },
  { pos: 19, name: "Gabriel Bortoleto", img: zhou, nation: brazil, nationName: "Brazil", team: sauber, teamName: "Kick Sauber", points: 19 },
  { pos: 20, name: "Franco Colapinto", img: sargeant, nation: argentina, nationName: "Argentina", team: alpine, teamName: "Alpine", points: 0 },
];

const teamBgMap = {
  "Red Bull Racing": "bg-[#4781D7]",
  "McLaren": "bg-[#FF8000]",
  "Ferrari": "bg-[#DC0000]",
  "Mercedes": "bg-[#00D7B6]",
  "Aston Martin": "bg-[#006F62]",
  "Williams": "bg-[#005AFF]",
  "Alpine": "bg-[#0090FF]",
  "Haas": "bg-[#2B2B2B]",
  "Kick Sauber": "bg-[#00FF3B]",
  "Racing Bulls": "bg-[#1E1E2F]",
};

/* ================= COMPONENT ================= */
const DriverStandings = () => {
  const INITIAL_COUNT = 6;
  const [showAll, setShowAll] = useState(false);

  const visibleDrivers = showAll
    ? driversData
    : driversData.slice(0, INITIAL_COUNT);

  return (
    <div className="max-w-[1200px] mx-auto pb-10">
      <div className="rounded-xl ">

        {/* HEADER */}
        <div className="grid grid-cols-12 pt-10 py-3 border-b text-[15px] font-semibold uppercase opacity-70">
          <div className="col-span-1">Pos</div>
          <div className="col-span-5">Driver</div>
          <div className="col-span-3">Nationality</div>
          <div className="col-span-2">Team</div>
          <div className="col-span-1 text-right">Pts</div>
        </div>

        {/* ROWS */}
        {visibleDrivers.map((d) => (
          <div
            key={d.pos}
            className="grid grid-cols-12 py-4 border-b items-center border-gray-300 hover:bg-black/5 transition"
          >
            <div className="col-span-1 font-bold">{d.pos}</div>

            <div className="col-span-5 flex items-center gap-4 font-semibold">
              <img src={d.img} className="w-7 h-7 rounded-full object-cover object-top" />
              {d.name}
            </div>

            <div className="col-span-3 flex items-center gap-3">
              <img src={d.nation} className="w-6 h-6 rounded-full bg-white object-cover" />
              <span className="text-sm font-medium">{d.nationName}</span>
            </div>

            <div className="col-span-2 flex items-center gap-2">
              <div
                className={`w-[28px] h-[20px] rounded-full flex items-center justify-center ${teamBgMap[d.teamName]}`}
              >
                <img src={d.team} alt={d.teamName} className="h-[12px] object-contain" />
              </div>
              <span className="text-sm font-medium">{d.teamName}</span>
            </div>

            <div className="col-span-1 text-right font-bold">{d.points}</div>
          </div>
        ))}

        {/* SHOW MORE / LESS */}
        {driversData.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="font-bold uppercase tracking-widest transition hover:opacity-70 hover:bg-gray-200 px-4 py-2 rounded-2xl"
            >
              {showAll ? "Show less" : "Show all"} ↓
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverStandings;
