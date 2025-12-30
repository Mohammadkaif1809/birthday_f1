import React, { useRef, useState } from "react";

import dropdown from "../../images/dropdown.svg";
import dhlLogo from "./dhlLogosvg.svg";
import back from "../../images/back.svg";
import next from "../../images/next.svg";
import play from "../../images/play.svg";

/* video images */
import img1 from "./AwardImages/image1.jpg";
import img2 from "./AwardImages/image2.jpg";
import img3 from "./AwardImages/image3.jpg";
import img4 from "./AwardImages/image4.jpg";
import img5 from "./AwardImages/image5.jpg";
import img6 from "./AwardImages/image6.jpg";

/* flags */
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
import austria from "../../images/austria.svg";
import uk from "../../images/greatbritainflag.svg";
import belgium from "../../images/belgium.svg";
import hungary from "../../images/hungary.svg";
import netherlands from "../../images/netherland.svg";
import azerbaijan from "../../images/azerbaijan.svg";
import singapore from "../../images/singapore.svg";
import mexico from "../../images/mexico.svg";
import brazil from "../../images/brazil.svg";
import qatar from "../../images/qatar.svg";
import uae from "../../images/uae.svg";



/* driver images */
import norris from "../../images/drivers/d2.webp";

import max from "../../images/drivers/d5.webp";
import piastri from "../../images/drivers/d1.webp";
import russell from "../../images/drivers/d7.webp";
import antonelli from "../../images/drivers/d20.webp";
import albon from "../../images/drivers/d12.webp";
import leclerc from "../../images/drivers/d14.webp";
import hamilton from "../../images/drivers/d6.webp";


const driverImages = {
  "Lando Norris": norris,
  "Max Verstappen": max,
  "Oscar Piastri": piastri,
  "George Russell": russell,
  "Kimi Antonelli": antonelli,
  "Alexander Albon": albon,
  "Charles Leclerc": leclerc,
  "Lewis Hamilton": hamilton,
};

/* ================= DATA ================= */

const videos = [
  { img: img1, title: "DHL Fastest Lap Award - 2025 Abu Dhabi Grand Prix", time: "1:58" },
  { img: img2, title: "DHL Fastest Lap Award - 2025 Qatar Grand Prix", time: "1:54" },
  { img: img3, title: "DHL Fastest Lap Award - 2025 Sao Paulo Grand Prix", time: "1:43" },
  { img: img4, title: "DHL Fastest Lap Award - 2025 Mexico City Grand Prix", time: "1:50" },
  { img: img5, title: "DHL Fastest Lap Award - 2025 United States Grand Prix", time: "1:46" },
  { img: img6, title: "DHL Fastest Lap Award - 2025 Las Vegas Grand Prix", time: "1:52" },
];

const results = [
  { gp: "Australia", flag: australia, driver: "Lando Norris", time: "1:22.167" },
  { gp: "China", flag: china, driver: "Lando Norris", time: "1:35.454" },
  { gp: "Japan", flag: japan, driver: "Kimi Antonelli", time: "1:30.965" },
  { gp: "Bahrain", flag: bahrain, driver: "Oscar Piastri", time: "1:35.140" },
  { gp: "Saudi Arabia", flag: saudi, driver: "Lando Norris", time: "1:31.778" },
  { gp: "Miami", flag: usa, driver: "Lando Norris", time: "1:29.746" },
  { gp: "Emilia-Romagna", flag: italy, driver: "Max Verstappen", time: "1:17.988" },
  { gp: "Monaco", flag: monaco, driver: "Lando Norris", time: "1:13.221" },
  { gp: "Spain", flag: spain, driver: "Oscar Piastri", time: "1:15.743" },
  { gp: "Canada", flag: canada, driver: "George Russell", time: "1:14.119" },
  { gp: "Austria", flag: austria, driver: "Oscar Piastri", time: "1:07.924" },
  { gp: "Great Britain", flag: uk, driver: "Oscar Piastri", time: "1:29.337" },
  { gp: "Belgium", flag: belgium, driver: "Kimi Antonelli", time: "1:44.861" },
  { gp: "Hungary", flag: hungary, driver: "George Russell", time: "1:19.409" },
  { gp: "Netherlands", flag: netherlands, driver: "Oscar Piastri", time: "1:12.271" },
  { gp: "Italy", flag: italy, driver: "Lando Norris", time: "1:20.901" },
  { gp: "Azerbaijan", flag: azerbaijan, driver: "Max Verstappen", time: "1:43.388" },
  { gp: "Singapore", flag: singapore, driver: "Lewis Hamilton", time: "1:33.808" },
  { gp: "United States", flag: usa, driver: "Kimi Antonelli", time: "1:37.577" },
  { gp: "Mexico", flag: mexico, driver: "George Russell", time: "1:20.052" },
  { gp: "Brazil", flag: brazil, driver: "Alexander Albon", time: "1:12.400" },
  { gp: "Las Vegas", flag: usa, driver: "Max Verstappen", time: "1:33.365" },
  { gp: "Qatar", flag: qatar, driver: "Oscar Piastri", time: "1:22.996" },
  { gp: "Abu Dhabi", flag: uae, driver: "Charles Leclerc", time: "1:26.725" },
];






/* ================= COMPONENT ================= */

const Awards = () => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);


  const updateProgress = () => {
    const el = scrollRef.current;
    setProgress((el.scrollLeft / (el.scrollWidth - el.clientWidth)) * 100);
  };

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "next" ? 360 : -360,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#F7F4EF]">

      {/* ================= TOP AWARD SECTION ================= */}
      <div className="px-14 ml-5 pt-12">
        
        <button
          onClick={() => setOpen(!open)}
          className={`
            px-5 py-2 rounded-full border-2 border-black
            font-semibold flex items-center gap-2
            transition-all duration-200 ease-out
            active:scale-[0.97]
            ${open
              ? "shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)]"
              : "shadow-none"}
          `}
        >
          DHL Fastest Lap
          <img
            src={dropdown}
            className={`w-4 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div
            className="
              absolute left-0 mt-2 w-[260px]
              rounded-xl border-2 border-black
              bg-[#F7F4EF]
              shadow-[0_10px_24px_rgba(0,0,0,0.18)]
              overflow-hidden z-30
              animate-[fadeIn_0.15s_ease-out]
            "
          >
            {[
              "DHL Fastest Lap",
              "DHL Fastest Pit Stop",
              "Salesforce Driver of the Day",
              "Pirelli Pole Position",
            ].map((item, i) => (
              <button
                key={item}
                className={`
                  w-full text-left px-5 py-3 text-[14px] font-medium
                  transition-colors duration-150
                  hover:bg-black/5
                  ${i === 0 ? "font-bold" : ""}
                `}
              >
                {item}
              </button>
            ))}
          </div>
        )}


        <div className="mt-10 bg-white rounded-xl overflow-hidden">
          <div className="bg-[#F8CD46] h-[64px] flex items-center px-10">
            <img src={dhlLogo} className="w-[120px]" />
          </div>

          <div className="flex justify-between px-12 py-12">
            <div className="max-w-[560px]">
              <h1 className="text-[32px] font-extrabold uppercase">
                2025 DHL Fastest Lap Award
              </h1>

              <p className="mt-5 text-[15px] leading-7 pb-10">
                Since 2007 DHL, the world's leading logistics provider and Official
                Logistics Partner of Formula 1, has defined a new standard of speed
                with the DHL Fastest Lap Award.
              </p>

              <button className="px-5 py-2 border-2 rounded-2xl border-black font-semibold flex gap-2
                          transition-all duration-300 ease-out
                          hover:bg-[#F7F4EF] 
                          active:scale-[0.96]">
                Find out more
              </button>
            </div>

            <div className="w-[520px] bg-[#F8CD46] rounded-2xl px-10 py-8 relative overflow-hidden">

              {/* F1 diagonal stripes */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.22]"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      135deg,
                      rgba(255,255,255,0.55) 0px,
                      rgba(255,255,255,0.55) 10px,
                      rgba(255,255,255,0) 10px,
                      rgba(255,255,255,0) 34px
                    )
                  `,
                }}
              />

              {/* CONTENT */}
              <div className="relative">
                <h2 className="text-sm font-semibold uppercase">2025 Award Winner</h2>
                <h1 className="mt-3 text-[34px] font-extrabold uppercase">Lando Norris</h1>
                <h3 className="uppercase font-semibold">McLaren</h3>
                <p className="mt-6 font-semibold">6 Fastest Laps</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= RELATED VIDEOS ================= */}
      <div className="px-14 py-14">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[28px] font-extrabold uppercase">
          Related Videos
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("back")}
            className="
              w-9 h-9 rounded-full
              flex items-center justify-center
              transition-all duration-200
              hover:bg-black/15
              active:scale-95
            "
          >
            <img src={back} className="w-4 invert" />
          </button>

          <button
            onClick={() => scroll("next")}
            className="
              w-9 h-9 rounded-full
              flex items-center justify-center
              transition-all duration-200
              hover:bg-black/15
              active:scale-95
            "
          >
            <img src={next} className="w-4 invert" />
          </button>
        </div>
      </div>


        <div
          ref={scrollRef}
          onScroll={updateProgress}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {videos.map((v, i) => (
            <div key={i} className="min-w-[320px] group">
              <div className="relative rounded-xl overflow-hidden">
                <img src={v.img} className="h-[180px] w-full object-cover group-hover:scale-105 transition" />
                <img src={play} className="absolute left-4 bottom-4 w-10" />
                <span className="absolute right-3 bottom-3 bg-black text-white text-xs px-2 rounded">
                  {v.time}
                </span>
              </div>
              <p className="mt-3 group-hover:underline">{v.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 h-[2px] bg-black/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* ================= RESULTS TABLE ================= */}
      <div className="h-[1510px] bg-[#F7F4EF]">
      <div className="bg-[#F8CD46] h-[384px] py-20 mt-20">
        <div className="max-w-[1440px] mx-auto px-8">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[36px] font-extrabold uppercase tracking-tight">
              DHL Fastest Lap Results
            </h1>
            <img src={dhlLogo} className="w-[110px]" />
          </div>

          {/* TABLE */}
          <div className="bg-white py-10 px-6 rounded-xl overflow-hidden">

            {/* TABLE HEAD */}
            <div
              className="grid grid-cols-12 px-10 py-3
                        text-[11px] font-bold uppercase text-black/60
                        border-b border-black/20"
            >
              <div className="col-span-5">Grand Prix</div>
              <div className="col-span-5">Winner</div>
              <div className="col-span-2 text-right">Time</div>
            </div>

              {results.map((r, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 items-center px-10 py-[14px]
                            text-[14px]
                            border-b border-black/10
                            last:border-none
                            hover:bg-black/[0.03] transition"
                >
                  {/* GRAND PRIX */}
                  <div className="col-span-5 flex items-center gap-3 font-medium">
                    <img src={r.flag} className="w-[18px] h-[18px] rounded-full" />
                    {r.gp}
                  </div>

                  {/* WINNER */}
                  <div className="col-span-5 flex items-center gap-3 font-medium">
                    <img
                      src={driverImages[r.driver]}
                      className="w-[22px] h-[22px] rounded-full object-cover object-top"
                    />
                    {r.driver}
                  </div>

                  {/* TIME */}
                  <div className="col-span-2 text-right font-medium">
                    {r.time}
                  </div>
                </div>
              ))}

          </div>
        </div>
      </div>
      </div>




    </div>
  );
};

export default Awards;


