import React, { useState } from "react";
import dropDown from'../../images/dropdown.svg'

import piastri from "../../images/drivers/d1.webp";
import norris from "../../images/drivers/d2.webp";
import russell from "../../images/drivers/d3.webp";
import antonelli from "../../images/drivers/d4.webp";
import max from "../../images/drivers/d5.webp";
import tsunoda from "../../images/drivers/d6.webp";
import leclerc from "../../images/drivers/d7.webp";
import hamilton from "../../images/drivers/d8.webp";
import alonso from "../../images/drivers/d14.webp";
import stroll from "../../images/drivers/d13.webp";
import gasly from "../../images/drivers/d17.webp";
import colapinto from "../../images/drivers/d18.webp";
import ocon from "../../images/drivers/d15.webp";
import bearman from "../../images/drivers/d16.webp";
import hulkenberg from "../../images/drivers/d19.webp";
import bortoleto from "../../images/drivers/d20.webp";
import lawson from "../../images/drivers/d11.webp";
import hadjar from "../../images/drivers/d12.webp";
import albon from "../../images/drivers/d9.webp";
import sainz from "../../images/drivers/d10.webp";


/* TEAM LOGOS */
import mclaren from "../../images/drivers/teamlogos/2025mclarenlogowhite.webp";
import mercedes from "../../images/drivers/teamlogos/2025mercedeslogowhite.webp";
import redbull from "../../images/drivers/teamlogos/2025redbullracinglogowhite.webp";
import ferrari from "../../images/drivers/teamlogos/2025ferrarilogowhite.webp";
import williams from "../../images/drivers/teamlogos/2025williamslogowhite.webp";
import racingbulls from "../../images/drivers/teamlogos/2025racingbullslogowhite.webp";
import aston from "../../images/drivers/teamlogos/2025astonmartinlogowhite.webp";
import haas from "../../images/drivers/teamlogos/2025haasf1teamlogowhite.webp";
import sauber from "../../images/drivers/teamlogos/2025kicksauberlogowhite.webp";
import alpine from "../../images/drivers/teamlogos/2025alpinelogowhite.webp";

/* DATA */
export const teamsData = [
  { pos: 1, name: "McLaren", pts: 833, logo: mclaren, bg: "bg-[#FF8000]" },
  { pos: 2, name: "Mercedes", pts: 469, logo: mercedes, bg: "bg-[#00D2BE]" },
  { pos: 3, name: "Red Bull Racing", pts: 451, logo: redbull, bg: "bg-[#3671C6]" },
  { pos: 4, name: "Ferrari", pts: 398, logo: ferrari, bg: "bg-[#DC0000]" },
  { pos: 5, name: "Williams", pts: 137, logo: williams, bg: "bg-[#005AFF]" },
  { pos: 6, name: "Racing Bulls", pts: 92, logo: racingbulls, bg: "bg-[#6C8EFF]" },
  { pos: 7, name: "Aston Martin", pts: 89, logo: aston, bg: "bg-[#006F62]" },
  { pos: 8, name: "Haas F1 Team", pts: 79, logo: haas, bg: "bg-[#B6BABD]" },
  { pos: 9, name: "Kick Sauber", pts: 70, logo: sauber, bg: "bg-[#00FF00]" },
  { pos: 10, name: "Alpine", pts: 22, logo: alpine, bg: "bg-[#0090FF]" },
];

const Teams = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const filteredTeams =
    selected === "All"
      ? teamsData
      : teamsData.filter((t) => t.name === selected);

  return (
    <section className="bg-[#f7f4ef] py-10">
      <div className="max-w-[1440px] mx-auto px-10">

        {/* FILTER */}
        <div className="relative mb-6 w-[180px]">
          <button
            onClick={() => setOpen(!open)}
            className="w-full h-[46px]
                      bg-white border border-black/30
                      rounded-full px-5
                      flex items-center justify-between
                      text-[14px] font-medium
                      transition-all duration-200
                      hover:shadow-md
                      active:scale-[0.96]"
          >
            <span>{selected}</span>

            <img
              src={dropDown}
              alt="dropdown"
              className={`w-[14px] h-[14px]
                          transition-transform duration-200
                          ${open ? "rotate-180" : "rotate-0"}`}
            />
          </button>


          {open && (
            <ul
              className="absolute z-20 mt-2 w-full
                        bg-white border border-black/20
                        rounded-xl shadow-lg
                        max-h-[260px] overflow-y-auto
                        animate-dropdown"
            >

              <li
                onClick={() => {
                  setSelected("All");
                  setOpen(false);
                }}
                className="px-4 py-2 text-sm font-medium
                           cursor-pointer hover:bg-black/5"
              >
                All
              </li>

              {teamsData.map((team) => (
                <li
                  key={team.name}
                  onClick={() => {
                    setSelected(team.name);
                    setOpen(false);
                  }}
                  className="px-4 py-2 text-sm font-medium
                             cursor-pointer hover:bg-black/5"
                >
                  {team.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* TITLE */}
        <h2 className="uppercase text-[18px] pb-15 sm:text-[40px] py-4 font-extrabold tracking-[0.12em]">
          2025 TEAMS&apos; STANDINGS
        </h2>

        {/* TABLE */}
        <div className="bg-white rounded-xl pt-10 px-10 w-full">

          {/* HEADER */}
          <div
            className="grid grid-cols-12 px-10 py-4
                       text-[12px] font-bold uppercase
                       text-[#6f6f6f]
                       border-b border-black/20"
          >
            <div className="col-span-2">Pos</div>
            <div className="col-span-8 pl-24">Team</div>
            <div className="col-span-2 text-right">Pts</div>
          </div>

          {/* ROWS */}
          {filteredTeams.map((team) => (
            <div
              key={team.name}
              className="grid grid-cols-12 items-center
                         px-10 py-5
                         border-b border-black/10
                         last:border-b-0
                         hover:bg-[#f6f6f6]
                         transition-colors"
            >
              <div className="col-span-2 font-bold">{team.pos}</div>

              <div className="col-span-8 flex items-center gap-4 pl-24">
                <div
                  className={`w-[28px] h-[28px] rounded-full
                              flex items-center justify-center
                              ${team.bg}`}
                >
                  <img src={team.logo} className="h-[14px]" />
                </div>
                {team.name}
              </div>

              <div className="col-span-2 text-right font-bold">
                {team.pts}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
