import React from "react";

/* TEAM LOGOS */
import mclarenLogo from "../images/drivers/teamlogos/2025mclarenlogowhite.webp";
import mercedesLogo from "../images/drivers/teamlogos/2025mercedeslogowhite.webp";
import redbullLogo from "../images/drivers/teamlogos/2025redbullracinglogowhite.webp";

/* CAR IMAGES */
import mclarenCar from "../images/cars/mclarencar.webp";
import mercedesCar from "../images/cars/mercedescar.webp";
import redbullCar from "../images/cars/redbullracingcar.webp";

/* TEXTURE */
import eff1 from "../images/effect/eff1.webp";

const teamsTop3 = [
  {
    pos: 2,
    name: "Mercedes",
    points: 469,
    drivers: [
      { first: "George", last: "Russell" },
      { first: "Kimi", last: "Antonelli" },
    ],
    color: "#00D7B6",
    logo: mercedesLogo,
    car: mercedesCar,
  },
  {
    pos: 1,
    name: "McLaren",
    points: 833,
    drivers: [
      { first: "Oscar", last: "Piastri" },
      { first: "Lando", last: "Norris" },
    ],
    color: "#FF8000",
    logo: mclarenLogo,
    car: mclarenCar,
    isMain: true,
  },
  {
    pos: 3,
    name: "Red Bull Racing",
    points: 451,
    drivers: [
      { first: "Max", last: "Verstappen" },
      { first: "Yuki", last: "Tsunoda" },
    ],
    color: "#4781D7",
    logo: redbullLogo,
    car: redbullCar,
  },
];

const TeamCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end max-w-[1500px] mx-auto">
      {teamsTop3.map(team => (
        <div
          key={team.pos}
          className={`relative overflow-hidden rounded-xl ${
            team.isMain ? "h-[390px]" : "h-[360px]"
          } shadow-[0_20px_50px_rgba(0,0,0,0.25)]`}
          style={{ backgroundColor: team.color }}
        >
          {/* BRIGHT BASE OVERLAY (LESS DARK) */}
          <div className="absolute inset-0 bg-black/25 z-0" />

          {/* F1 SHINE GRADIENT */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 35%, rgba(0,0,0,0.35) 75%)",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-30 p-6 text-white h-full flex flex-col">
            <span className="text-sm font-bold uppercase tracking-wide">
              {team.pos}
              {team.pos === 1 ? "st" : team.pos === 2 ? "nd" : "rd"}
            </span>

            <div className="flex items-center gap-3 mt-2">
              <img src={team.logo} alt={team.name} className="h-6" />
              <h3 className="text-2xl font-extrabold">{team.name}</h3>
            </div>

            <span className="text-sm font-semibold opacity-95 mt-1">
              {team.points} PTS
            </span>

            {/* DRIVERS (TYPO FIXED) */}
            <div className="mt-4 text-sm leading-5">
              {team.drivers.map(d => (
                <div key={d.last}>
                  <span className="font-normal">{d.first} </span>
                  <span className="font-bold">{d.last}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TEXTURE STRIP — BEHIND CAR */}
          <div
            className="absolute bottom-0 left-0 w-full h-[35%] z-20 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to top, black 15%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to top, black 15%, transparent 100%)",
            }}
          >
            <img
              src={eff1}
              alt=""
              className="
                w-full h-full
                object-cover
                opacity-45
                mix-blend-overlay
                pointer-events-none
              "
            />
          </div>

          {/* CAR IMAGE */}
          <img
            src={team.car}
            alt={team.name}
            className="
              absolute bottom-3 right-[20%]
              w-[75%]
              object-contain
              z-40
              drop-shadow-[0_35px_60px_rgba(0,0,0,0.55)]
            "
          />
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
