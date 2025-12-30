import React from 'react'
import img1 from '../images/section4-1.png'
import img2 from '../images/section4-2.webp'
import img3 from '../images/section4-3.webp'
import img4 from '../images/section4-4.webp'
import img5 from '../images/section4-5.webp'
import img6 from '../images/section4-6.webp'

const EditorsPicks = () => {
  return (
    <section className="w-full bg-white">
      <h1 className="pt-8 pl-6 sm:pl-8 uppercase text-[16px] sm:text-[18px] font-extrabold tracking-[0.18em]">
        EDITOR&apos;S PICKS
      </h1>

      <div className="p-6 sm:p-8 grid grid-cols-12 gap-5 sm:gap-6">

        <div className="col-span-12 lg:col-span-8 group relative rounded-lg overflow-hidden">
          <img
            src={img1}
            alt=""
            className="
              h-[240px] sm:h-[320px] lg:h-[380px]
              w-full object-cover
              transition-transform duration-500 ease-out
              md:group-hover:scale-[1.04]
            "
          />
          <p className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 max-w-[90%] text-white text-[18px] sm:text-[22px] font-semibold leading-snug">
            F1 2026 rules explained after Pooji said ‘okay, sounds fair’
          </p>
        </div>

        
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[#F7F4EF] rounded-lg overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src={img2}
              alt=""
              className="
                h-[200px] sm:h-[220px]
                w-full object-cover
                transition-transform duration-500 ease-out
                md:group-hover:scale-[1.04]
              "
            />
          </div>
          <p className="p-4 sm:p-5 font-medium underline-offset-4 group-hover:underline cursor-pointer">
            EXPLAINED: New F1 rules, simplified so Pooji doesn’t get bored
          </p>
        </div>

        
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[#F7F4EF] rounded-lg overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src={img3}
              alt=""
              className="
                h-[200px] sm:h-[220px]
                w-full object-cover
                transition-transform duration-500 ease-out
                md:group-hover:scale-[1.04]
              "
            />
          </div>
          <p className="p-4 sm:p-5 font-medium underline-offset-4 group-hover:underline cursor-pointer">
            Lando Norris tears up after learning his victory upset Pooji
          </p>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[#F7F4EF] rounded-lg overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src={img4}
              alt=""
              className="
                h-[200px] sm:h-[220px]
                w-full object-cover
                transition-transform duration-500 ease-out
                md:group-hover:scale-[1.04]
              "
            />
          </div>
          <p className="p-4 sm:p-5 font-medium underline-offset-4 group-hover:underline cursor-pointer">
            F1 CEO confirms: 2025 worked because Pooji existed
          </p>
        </div>

        <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[#F7F4EF] rounded-lg overflow-hidden group">
          <div className="overflow-hidden">
            <img
              src={img5}
              alt=""
              className="
                h-[200px] sm:h-[220px]
                w-full object-cover
                transition-transform duration-500 ease-out
                md:group-hover:scale-[1.04]
              "
            />
          </div>
          <p className="p-4 sm:p-5 font-medium underline-offset-4 group-hover:underline cursor-pointer">
            Verstappen confirms new number for 2026 — Pooji already approved it
          </p>
        </div>

        <div className="col-span-12 lg:col-span-8 group relative rounded-lg overflow-hidden">
          <img
            src={img6}
            alt=""
            className="
              h-[240px] sm:h-[320px] lg:h-[380px]
              w-full object-cover
              transition-transform duration-500 ease-out
              md:group-hover:scale-[1.04]
            "
          />
          <p className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 max-w-[90%] text-white text-[18px] sm:text-[22px] font-semibold leading-snug">
            F1 LAUNCHES: When will teams present their new cars for 2026?
          </p>
        </div>

      </div>
    </section>
  )
}

export default EditorsPicks
