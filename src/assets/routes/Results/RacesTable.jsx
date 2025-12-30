import React, { useState } from "react";
import DropDown from "../../images/dropdown.svg";

/* ================= DRIVER IMAGES ================= */
import max from "../../images/drivers/d5.webp";
import lando from "../../images/drivers/d2.webp";
import oscar from "../../images/drivers/d1.webp";
import russell from "../../images/drivers/d7.webp";

/* ================= FLAGS ================= */
import australia from "../../images/australia.svg";
import china from "../../images/china.svg";
import japan from "../../images/japan.svg";
import bahrain from "../../images/bahrain.svg";
import saudi from "../../images/saudi.svg";
import usa from "../../images/usa.svg";
import italy from "../../images/italy.svg";
import monaco from "../../images/monaco.svg";
import spain from "../../images/spain.svg";
import canada from "../../images/canada.svg";
import uk from "../../images/greatbritainflag.svg";
import belgium from "../../images/belgium.svg";
import hungary from "../../images/hungary.svg";
import netherlands from "../../images/netherland.svg";
import singapore from "../../images/singapore.svg";
import mexico from "../../images/mexico.svg";
import brazil from "../../images/brazil.svg";
import qatar from "../../images/qatar.svg";
import abuDhabi from "../../images/uae.svg";

/* ================= TEAM LOGOS ================= */
import redbull from "../../images/drivers/teamlogos/2025redbullracinglogowhite.webp";
import mclaren from "../../images/drivers/teamlogos/2025mclarenlogowhite.webp";
import mercedes from "../../images/drivers/teamlogos/2025mercedeslogowhite.webp";

/* ================= TEAM COLORS ================= */
const teamColorMap = {
  McLaren: "bg-[#FF8000]",
  "Red Bull Racing": "bg-[#3671C6]",
  Mercedes: "bg-[#00D2BE]",
};

/* ================= RACE FILTER ================= */
const raceFilters = [
  { name: "All", flag: null },
  { name: "Australia", flag: australia },
  { name: "China", flag: china },
  { name: "Japan", flag: japan },
  { name: "Bahrain", flag: bahrain },
  { name: "Saudi Arabia", flag: saudi },
  { name: "Miami", flag: usa },
  { name: "Emilia-Romagna", flag: italy },
  { name: "Monaco", flag: monaco },
  { name: "Spain", flag: spain },
  { name: "Canada", flag: canada },
  { name: "Great Britain", flag: uk },
  { name: "Belgium", flag: belgium },
  { name: "Hungary", flag: hungary },
  { name: "Netherlands", flag: netherlands },
  { name: "Singapore", flag: singapore },
  { name: "Mexico", flag: mexico },
  { name: "Brazil", flag: brazil },
  { name: "Qatar", flag: qatar },
  { name: "Abu Dhabi", flag: abuDhabi },
];

/* ================= DATA ================= */
const races2025 = [
  { gp: "Australia", flag: australia, date: "16 Mar", winner: "Lando Norris", driverImg: lando, team: "McLaren", teamLogo: mclaren, laps: 57, time: "1:42:06.304" },
  { gp: "China", flag: china, date: "23 Mar", winner: "Oscar Piastri", driverImg: oscar, team: "McLaren", teamLogo: mclaren, laps: 56, time: "1:30:55.026" },
  { gp: "Japan", flag: japan, date: "06 Apr", winner: "Max Verstappen", driverImg: max, team: "Red Bull Racing", teamLogo: redbull, laps: 53, time: "1:22:06.983" },
  { gp: "Bahrain", flag: bahrain, date: "13 Apr", winner: "Oscar Piastri", driverImg: oscar, team: "McLaren", teamLogo: mclaren, laps: 57, time: "1:35:39.435" },
  { gp: "Saudi Arabia", flag: saudi, date: "20 Apr", winner: "Oscar Piastri", driverImg: oscar, team: "McLaren", teamLogo: mclaren, laps: 50, time: "1:21:06.758" },
  { gp: "Miami", flag: usa, date: "04 May", winner: "Oscar Piastri", driverImg: oscar, team: "McLaren", teamLogo: mclaren, laps: 57, time: "1:28:51.587" },
  { gp: "Emilia-Romagna", flag: italy, date: "18 May", winner: "Max Verstappen", driverImg: max, team: "Red Bull Racing", teamLogo: redbull, laps: 63, time: "1:31:33.199" },
  { gp: "Monaco", flag: monaco, date: "25 May", winner: "Lando Norris", driverImg: lando, team: "McLaren", teamLogo: mclaren, laps: 78, time: "1:40:33.843" },
  { gp: "Spain", flag: spain, date: "01 Jun", winner: "Oscar Piastri", driverImg: oscar, team: "McLaren", teamLogo: mclaren, laps: 66, time: "1:32:57.375" },
  { gp: "Canada", flag: canada, date: "15 Jun", winner: "George Russell", driverImg: russell, team: "Mercedes", teamLogo: mercedes, laps: 70, time: "1:31:52.688" },
  { gp: "Great Britain", flag: uk, date: "06 Jul", winner: "Lando Norris", driverImg: lando, team: "McLaren", teamLogo: mclaren, laps: 52, time: "1:37:15.735" },
  { gp: "Belgium", flag: belgium, date: "27 Jul", winner: "Oscar Piastri", driverImg: oscar, team: "McLaren", teamLogo: mclaren, laps: 44, time: "1:25:22.601" },
  { gp: "Hungary", flag: hungary, date: "03 Aug", winner: "Lando Norris", driverImg: lando, team: "McLaren", teamLogo: mclaren, laps: 70, time: "1:35:21.231" },
  { gp: "Netherlands", flag: netherlands, date: "31 Aug", winner: "Oscar Piastri", driverImg: oscar, team: "McLaren", teamLogo: mclaren, laps: 72, time: "1:38:29.849" },
  { gp: "Singapore", flag: singapore, date: "05 Oct", winner: "George Russell", driverImg: russell, team: "Mercedes", teamLogo: mercedes, laps: 62, time: "1:40:22.367" },
  { gp: "Mexico", flag: mexico, date: "26 Oct", winner: "Lando Norris", driverImg: lando, team: "McLaren", teamLogo: mclaren, laps: 71, time: "1:37:58.574" },
  { gp: "Brazil", flag: brazil, date: "09 Nov", winner: "Lando Norris", driverImg: lando, team: "McLaren", teamLogo: mclaren, laps: 71, time: "1:32:01.596" },
  { gp: "Qatar", flag: qatar, date: "30 Nov", winner: "Max Verstappen", driverImg: max, team: "Red Bull Racing", teamLogo: redbull, laps: 57, time: "1:24:38.241" },
  { gp: "Abu Dhabi", flag: abuDhabi, date: "07 Dec", winner: "Max Verstappen", driverImg: max, team: "Red Bull Racing", teamLogo: redbull, laps: 58, time: "1:26:07.469" },
];

/* ================= COMPONENT ================= */
const RacesTable = () => {
  const [selectedRace, setSelectedRace] = useState("All");
  const [showRaceDropdown, setShowRaceDropdown] = useState(false);

  const filteredRaces = races2025.filter(
    (race) => selectedRace === "All" || race.gp === selectedRace
  );

  return (
    <div className="bg-[#F7F4EF] py-10 px-10">

      {/* FILTER */}
      <div className="px-12 pb-6 flex gap-4 relative">
        <div className="relative">
          <button
            onClick={() => setShowRaceDropdown(!showRaceDropdown)}
            className="w-full flex gap-2 justify-between items-center px-4 py-2 border rounded-full font-medium"
          >
            {selectedRace}
            <img className="h-4" src={DropDown} alt="" />
          </button>

          {showRaceDropdown && (
            <div className="absolute z-50 mt-2 w-[260px] max-h-[320px] overflow-y-auto bg-white rounded-xl shadow-lg border">
              {raceFilters.map((race) => (
                <button
                  key={race.name}
                  onClick={() => {
                    setSelectedRace(race.name);
                    setShowRaceDropdown(false);
                  }}
                  className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 font-medium"
                >
                  {race.flag && (
                    <img src={race.flag} className="w-5 h-5 rounded-full" />
                  )}
                  {race.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* TITLE */}
      <div className="px-12 pb-8">
        <h1 className="uppercase text-[18px] sm:text-[40px] py-4 font-extrabold tracking-[0.12em]">
          Race Results
        </h1>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <div className="max-w-[1350px] mx-auto pt-10 px-10 bg-white rounded-md">

          {/* HEADER */}
          <div className="grid grid-cols-12 px-10 pt-5 pb-3
                          text-[12px] font-bold uppercase
                          tracking-[0.12em] text-[#6f6f6f]
                          border-b border-black/15">
            <div className="col-span-3 text-[14px]">Grand Prix</div>
            <div className="col-span-2 text-[14px]">Date</div>
            <div className="col-span-3 text-[14px]">Winner</div>
            <div className="col-span-2 text-[14px]">Team</div>
            <div className="col-span-1 text-[14px]">Laps</div>
            <div className="col-span-1 text-right text-[14px]">Time</div>
          </div>

          {/* ROWS */}
          {filteredRaces.map((race, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-10 py-5 items-center
                        border-b border-black/10
                        hover:bg-[#f6f6f6] transition-colors"
            >
              <div className="col-span-3 flex items-center gap-3 font-semibold">
                <img src={race.flag} className="w-6 h-6 rounded-full" />
                {race.gp}
              </div>

              <div className="col-span-2 font-medium">{race.date}</div>

              <div className="col-span-3 flex items-center gap-3 font-semibold">
                <img
                  src={race.driverImg}
                  className="w-7 h-7 rounded-full object-cover object-top"
                />
                {race.winner}
              </div>

              <div className="col-span-2 flex items-center gap-2">
                <div
                  className={`w-[30px] h-[22px] rounded-full flex items-center justify-center ${teamColorMap[race.team]}`}
                >
                  <img src={race.teamLogo} className="h-[12px]" />
                </div>
                <span className="text-sm font-medium">{race.team}</span>
              </div>

              <div className="col-span-1 font-medium">{race.laps}</div>
              <div className="col-span-1 text-right font-semibold">{race.time}</div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default RacesTable;
