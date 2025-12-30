import React from 'react'
import { useEffect, useState } from "react";
import BirthdayEasterEgg from "../pages/BirthdayEasterEgg";

import hero1 from '../images/hero1.png'
import hero2 from '../images/hero2.webp'
import hero3 from '../images/hero3.webp'
import hero4 from '../images/hero4.webp'
import hero5 from '../images/hero5.webp'
import hero6 from '../images/hero6.webp'

const SECRET_KEYS = ["b", "u", "j", "j", "i"];





const Hero = () => {

  const [openEgg, setOpenEgg] = useState(false);
  const [pressedKeys, setPressedKeys] = useState([]);
  const [showAutoPopup, setShowAutoPopup] = useState(false);
  const [askBujji, setAskBujji] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAutoPopup(true);
    }, 12000); // 2 minutes

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!askBujji) return;

    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      setPressedKeys((prev) => {
        const updated = [...prev, key].slice(-SECRET_KEYS.length);

        if (updated.join("") === SECRET_KEYS.join("")) {
          setOpenEgg(true);
          setAskBujji(false);
          return [];
        }
        return updated;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [askBujji]);

  return (
    <section className="bg-[#F7F4EF] pt-20 object-cover w-full py-6">

      {/* ⏱️ AUTO POPUP */}
      {showAutoPopup && !askBujji && !openEgg && (
        <div className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm
                        flex items-center justify-center">
          <div className="bg-[#0f1118] p-8 rounded-2xl text-white text-center shadow-2xl w-[800px] min-h-[420px] flex flex-col justify-center">
            <h2 className="text-2xl font-extrabold mb-10">💕 Are you Pooji?</h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setShowAutoPopup(false);
                  setAskBujji(true);
                }}
                className="w-[160px] py-3 rounded-full bg-[#e10600]"
              >
                YES 💖
              </button>
              <button
                onClick={() => setShowAutoPopup(false)}
                className="w-[160px] py-3 rounded-full border border-white/30"
              >
                NO 😅
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ⌨️ TYPE BUJJI */}
      {askBujji && (
        <div className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm
                        flex items-center justify-center text-white">
          <div className="bg-[#0f1118] p-8 rounded-2xl text-center shadow-2xl w-[620px] min-h-[300px]
                          flex flex-col justify-center">
            <h2 className="text-2xl font-extrabold mb-3">
              i used to call you my _____ ? <br />
              marchipoyya...gurthucheyvaa
            </h2>
            <p className="text-white/60 mt-3">(Just type it on the keyboard 😉)</p>
          </div>
        </div>
      )}

      {openEgg && (
        <BirthdayEasterEgg onClose={() => setOpenEgg(false)} />
      )}


      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 mb-5">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_1fr] gap-6 lg:gap-10">

          {/* LEFT BIG HERO */}
          <div className="relative overflow-hidden rounded-[15px] h-[420px] sm:h-[500px] lg:h-[600px] group">
            <img
              src={hero1}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
              <strong className="inline-block bg-yellow-500 text-black px-3 py-1 text-xs sm:text-sm rounded-sm">
                EXCLUSIVE
              </strong>

              <p className="mt-2 sm:mt-3 text-white text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight group-hover:underline underline-offset-4">
                Carlos Sainz smiles at last after Pooji crowns him the true Smooth Operator
              </p>
            </div>
          </div>

          {/* RIGHT SIDE LIST */}
          <ul className="space-y-3">

            {[
              {
                img: hero2,
                tag: 'EXCLUSIVE',
                tagClass: 'bg-yellow-300',
                text: 'Mercedes strategy leaked — ‘Make Pooji happy first'
              },
              {
                img: hero3,
                tag: 'WINNERS & LOSERS',
                tagClass: 'bg-pink-600 text-white',
                text: 'Lando Norris returns his title to Max Verstappen after discovering Pooji was upset'
              },
              {
                img: hero4,
                text: "18 times drivers changed car numbers, but today everyone drives for Pooji"
              },
              {
                img: hero5,
                text: 'F1 CEO confirms Pooji will wave the chequered flag at the 2025 season finale'
              },
              {
                img: hero6,
                text: 'REVEALED: Pooji’s favourite race is whichever Max wins (sorry Lando)'
              }
            ].map((item, i) => (
              <li
                key={i}
                className="flex bg-white rounded-md overflow-hidden group h-[104px] sm:h-[112px] gap-2"
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[88px] h-[88px] sm:w-[96px] sm:h-[96px] m-2 object-cover rounded-[3px] transition-transform duration-500 group-hover:scale-110"
                />

                <div className="flex flex-col justify-center pr-2">
                  {item.tag && (
                    <span
                      className={`${item.tagClass} px-2 py-0.5 text-[12px] sm:text-[13px] rounded-[3px] font-bold w-fit`}
                    >
                      {item.tag}
                    </span>
                  )}

                  <p className="mt-2 text-sm leading-snug hover:underline cursor-pointer">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
