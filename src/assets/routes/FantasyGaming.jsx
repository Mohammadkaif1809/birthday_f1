import React from "react";

/* ================= IMAGES ================= */
import fg1 from "./Results/fg1.webp";
import fg2 from "./Results/fg2.webp";
import fg3 from "./Results/fg3.webp";
import fg4 from "./Results/fg4.webp";
import fg5 from "./Results/fg5.webp";
import fg6 from "./Results/fg6.webp";

const cards = [
  {
    title: "Esports",
    desc:
      "The official F1 Esports Teams compete to determine the F1 Esports Series Constructors’ and Drivers’ World Champions",
    img: fg1,
  },
  {
    title: "Fantasy",
    desc:
      "Race your way to the top with Official Fantasy and win incredible F1 prizes",
    img: fg2,
  },
  {
    title: "F1 25",
    desc:
      "Leave your mark on the world of racing in EA SPORTS F1® 25 – available to order now",
    img: fg3,
  },
  {
    title: "F1 Manager 24",
    desc:
      "Lead your team to glory in F1 Manager 2024. A new Formula 1 season has arrived, and with it, the most comprehensive F1 management experience to date.",
    img: fg4,
  },
  {
    title: "F1 Predict",
    desc:
      "Put your prediction skills to the test in this official free-to-play game",
    img: fg5,
  },
  {
    title: "F1 Clash",
    desc:
      "Compete in thrilling 1v1 races with the toughest rival race drivers from around the world",
    img: fg6,
  },
];

const FantasyGaming = () => {
  return (
    <div className="bg-[#f7f4ef] pt-25 px-6 sm:px-10 lg:px-16 py-20 ">
      {/* TITLE */}
      <h1 className="text-[34px] sm:text-[38px] font-extrabold tracking-tight mb-20 mt-10 ">
        FANTASY & GAMING
      </h1>

      {/* GRID */}
      <div className="grid p- grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="
              group
              bg-white
              rounded-xl
              overflow-hidden
              min-h-[360px]

              border border-white
              ring-5 ring-white

              transition-all duration-300 ease-out
              hover:-translate-y-1
            "
          >

            {/* IMAGE */}
            <div className="h-[180px] overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="
                  h-full w-full object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
              />
            </div>



            {/* CONTENT */}
            <div className="px-5 pt-4 pb-6">
            <h3 className="relative inline-block text-[18px] font-bold mb-2">
              {card.title}
              <span
                className="
                  absolute left-0 -bottom-1
                  h-[2px] w-0 bg-black
                  transition-all duration-300 ease-out
                  group-hover:w-full
                "
              />
            </h3>


              <p className="text-[14px] leading-[1.6] text-[#4a4a4a]">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FantasyGaming;
