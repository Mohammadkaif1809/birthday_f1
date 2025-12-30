import React, { useState } from "react";

/* LOGOS */
import mclaren from "../images/drivers/teamlogos/2025mclarenlogowhite.webp";
import mercedes from "../images/drivers/teamlogos/2025mercedeslogowhite.webp";
import redbull from "../images/drivers/teamlogos/2025redbullracinglogowhite.webp";
import ferrari from "../images/drivers/teamlogos/2025ferrarilogowhite.webp";
import williams from "../images/drivers/teamlogos/2025williamslogowhite.webp";
import aston from "../images/drivers/teamlogos/2025astonmartinlogowhite.webp";
import rb from "../images/drivers/teamlogos/2025racingbullslogowhite.webp";
import haas from "../images/drivers/teamlogos/2025haasf1teamlogowhite.webp";
import sauber from "../images/drivers/teamlogos/2025kicksauberlogowhite.webp";
import alpine from "../images/drivers/teamlogos/2025alpinelogowhite.webp";

const teamsData = [
  { pos: 1, name: "McLaren", points: 833, logo: mclaren },
  { pos: 2, name: "Mercedes", points: 469, logo: mercedes },
  { pos: 3, name: "Red Bull Racing", points: 451, logo: redbull },
  { pos: 4, name: "Ferrari", points: 398, logo: ferrari },
  { pos: 5, name: "Williams", points: 137, logo: williams },
  { pos: 6, name: "Aston Martin", points: 301, logo: aston },
  { pos: 7, name: "Racing Bulls", points: 89, logo: rb },
  { pos: 8, name: "Haas", points: 79, logo: haas },
  { pos: 9, name: "Kick Sauber", points: 70, logo: sauber },
  { pos: 10, name: "Alpine", points: 41, logo: alpine },
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

const TeamStandings = () => {
  const INITIAL_COUNT = 5;
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? teamsData : teamsData.slice(0, INITIAL_COUNT);

  return (
    <div className="max-w-[1300px] mx-auto py-8">
      {/* HEADER */}
      <div className="grid grid-cols-12 px-6 py-4 border-b text-sm font-bold uppercase opacity-70">
        <div className="col-span-1">Pos</div>
        <div className="col-span-9 pl-74">Team</div>
        <div className="col-span-2 text-right">Pts</div>
      </div>

      {/* ROWS */}
      {visible.map(team => (
        <div
          key={team.pos}
          className="grid grid-cols-12 px-6 py-4 border-b items-center hover:bg-black/5 transition border-gray-300"
        >
          <div className="col-span-1 font-bold">
            {team.pos}
          </div>

          <div className="col-span-9 flex items-center gap-3 font-semibold pl-70">
            <div
              className={`w-[28px] h-[20px] rounded-full flex items-center justify-center ${teamBgMap[team.name]}`}
            >
              <img
                src={team.logo}
                alt={team.name}
                className="h-[12px] object-contain"
              />
            </div>
            <span className="text-sm font-medium">
              {team.name}
            </span>
          </div>

          <div className="col-span-2 text-right font-bold">
            {team.points}
          </div>
        </div>
      ))}

      {/* SHOW MORE / LESS */}
      <div className="flex justify-center py-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="
            font-bold uppercase tracking-widest
            transition
            hover:bg-black/[0.04]
            active:scale-[0.98]
            active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]
            px-4 py-2 rounded-2xl
          "
        >
          {showAll ? "Show less" : "Show all"}
        </button>
      </div>
    </div>
  );
};

export default TeamStandings;

