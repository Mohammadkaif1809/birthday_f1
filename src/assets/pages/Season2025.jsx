import React, { useState } from "react";

/* ================= STANDINGS ================= */
import DriverStandings from "./DriverStandings.jsx";
import TeamCards from "./TeamCards.jsx";
import TeamStandings from "./TeamStandings.jsx";

/* ================= DRIVER IMAGES ================= */
import max from "../images/drivers/d5.webp";
import lando from "../images/drivers/d2.webp";
import oscar from "../images/drivers/d1.webp";

/* ================= BACKGROUNDS ================= */
import redbullBg from "../images/redbullbg.svg";
import mclarenBg from "../images/landobg.svg";

/* ================= FLAGS ================= */
import ausFlag from "../images/australia.svg";
import netherlandFlag from "../images/netherland.svg";
import britanFlag from "../images/greatbritainflag.jpg";

/* ================= F1 TEXTURES ================= */
import eff1 from "../images/effect/eff1.webp";
import eff2 from "../images/effect/eff2.webp";

const TEAM_COLOR = {
  redbull: "#0600EF",
  mclaren: "#F47600",
};


const Season2025 = () => {
  const [activeTab, setActiveTab] = useState("drivers");

  return (
    <div className="bg-white">

      {/* ================= TABS ================= */}
      <div className="p-10 font-bold flex gap-8 text-sm tracking-widest bg-white">
        <button
          onClick={() => setActiveTab("drivers")}
          className={`
            relative pb-2 transition-opacity duration-200
            ${activeTab === "drivers" ? "opacity-100" : "opacity-60 hover:opacity-100"}
          `}
        >
          DRIVERS
          <span
            className={`
              absolute left-0 bottom-0 h-[2px] bg-black
              transition-all duration-300 ease-out
              ${activeTab === "drivers" ? "w-full" : "w-0 group-hover:w-full"}
            `}
          />
        </button>

        <button
          onClick={() => setActiveTab("teams")}
          className={`
            relative pb-2 transition-opacity duration-200
            ${activeTab === "teams" ? "opacity-100" : "opacity-60 hover:opacity-100"}
          `}
        >
          TEAMS
          <span
            className={`
              absolute left-0 bottom-0 h-[2px] bg-black
              transition-all duration-300 ease-out
              ${activeTab === "teams" ? "w-full" : "w-0"}
            `}
          />
        </button>
      </div>


      {/* ================= BEIGE SECTION ================= */}
      <div className="bg-[#f7f4ef] px-6 pt-4 pb-12">

        {/* ================= DRIVERS TAB ================= */}
        {activeTab === "drivers" && (
          <>
            {/* DRIVER CARDS */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end max-w-[1500px] mx-auto">
              <DriverCard
                position="2nd"
                name="Lando Norris"
                team="McLaren"
                points="421"
                bg={TEAM_COLOR.mclaren}
                flag={britanFlag}
                driver={lando}
              />


              <DriverCard
                isMain
                position="1st"
                name="Max Verstappen"
                team="Red Bull Racing"
                points="423"
                bg={TEAM_COLOR.redbull}
                flag={netherlandFlag}
                driver={max}
              />

              <DriverCard
                position="3rd"
                name="Oscar Piastri"
                team="McLaren"
                points="410"
                bg={TEAM_COLOR.mclaren}
                flag={ausFlag}
                driver={oscar}
              />
            </div>

            <div className="h-16" />

            {/* DRIVER STANDINGS */}
            <div className="max-w-[1500px] mx-auto bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <DriverStandings />
            </div>

            {/* VIEW FULL */}
            <div className="flex justify-center mt-10">
              <button
                className="
                  border-2 border-black/80
                  font-bold
                  px-6 py-2
                  rounded-3xl
                  transition
                  hover:bg-black/[0.04]
                  active:scale-[0.98]
                  active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)]
                "
              >
                View full standings
              </button>
            </div>
          </>
        )}

        {/* ================= TEAMS TAB ================= */}
        {activeTab === "teams" && (
          <>
            <TeamCards />
            <div className="h-16" />
            <div className="max-w-[1500px] mx-auto bg-white rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <TeamStandings />
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Season2025;

/* -------------------------------------------------- */
/* DRIVER CARD COMPONENT (AUTHENTIC F1 TEXTURE) */
/* -------------------------------------------------- */

const DriverCard = ({
  position,
  name,
  team,
  points,
  bg,
  driver,
  flag,
  isMain = false,
}) => {
  return (
    <div
      className={`
        relative overflow-hidden rounded-xl
        w-full
        ${isMain ? "h-[360px]" : "h-[300px]"}
        shadow-[0_20px_40px_rgba(0,0,0,0.15)]
      `}
    >
      {/* BASE TEAM COLOR */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: bg }}
      />

      {/* TEAM COLOR TINT (THIS IS THE MISSING PIECE) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: bg,
          opacity: 0.35,
        }}
      />

      {/* F1 HALFTONE TEXTURE */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${eff2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.45,
        }}
      />

      {/* DIRECTIONAL DEPTH (F1 STYLE) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-transparent" />


      {/* CONTENT */}
      <div className="relative z-20 p-6 text-white flex flex-col h-full">
        <span className="text-sm font-bold uppercase opacity-90">
          {position}
        </span>

        <h3 className="text-xl font-extrabold mt-1">
          {name}
        </h3>

        <span className="text-sm opacity-90 mt-2">
          {team}
        </span>

        {flag && (
          <div className="mt-5 w-6 h-6 rounded-full ring-2 ring-white bg-white flex items-center justify-center">
            <img
              src={flag}
              className="w-full h-full rounded-full object-contain"
            />
          </div>
        )}

        <div className="mt-auto text-2xl font-extrabold">
          {points} <span className="text-sm font-semibold">PTS</span>
        </div>
      </div>

      {/* DRIVER IMAGE */}
      <img
        src={driver}
        alt={name}
        className={`
          absolute bottom-0 left-[60%] z-30
          top-100
          h-[52%]
          object-contain object-top
          origin-bottom
          ${isMain ? "scale-[3]" : "scale-[3.4]"}
          drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]
        `}
      />
    </div>
  );
};
