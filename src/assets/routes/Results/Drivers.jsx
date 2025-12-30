import React, { useState } from "react";
import DropDown from "../../images/dropdown.svg";
import { driversData } from "../../pages/driversData";
import Temp2 from '../../pages/Temp2.jsx'

const Drivers = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const filteredDrivers =
    selected === "All"
      ? driversData
      : driversData.filter((d) => d.dropdown === selected);

  return (
    <section className="bg-[#f7f4ef] px-20 py-10">
      {/* FILTER */}
      <div className="relative w-[160px] mb-8">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center px-4 py-2 border rounded-full font-medium"
        >
          {selected}
          <img src={DropDown} className="w-4" />
        </button>

        {open && (
          <ul className="absolute z-20 mt-2 w-full max-h-[300px] overflow-y-auto bg-white border rounded-xl shadow-md">
            <li
              onClick={() => {
                setSelected("All");
                setOpen(false);
              }}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              All
            </li>

            {driversData.map((driver) => (
              <li
                key={driver.name}
                onClick={() => {
                  setSelected(driver.dropdown);
                  setOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                <img
                  src={driver.img}
                  className="w-6 h-6 rounded-full object-cover object-top"
                />
                {driver.dropdown}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* TITLE */}
      <h2 className="uppercase text-[18px] pb-13 sm:text-[40px] py-4 font-extrabold tracking-[0.12em]">
        2025 DRIVERS&apos; STANDINGS
      </h2>

      {/* TABLE */}
      <div className="bg-white rounded-xl px-10 pt-10 overflow-hidden">
        {/* HEADER */}
        <div className="grid grid-cols-12 px-8 pt-5 pb-2 text-[12px] font-bold uppercase text-[#6f6f6f] border-b border-black/15">
          <div className="col-span-1 text-[14px]">Pos</div>
          <div className="col-span-4 text-[14px]">Driver</div>
          <div className="col-span-2 text-[14px]">Nationality</div>
          <div className="col-span-3 text-[14px]">Team</div>
          <div className="col-span-2 text-right text-[14px]">Pts</div>
        </div>

        {/* ROWS */}
        {filteredDrivers.map((driver) => (
          <div
            key={driver.name}
            className="grid grid-cols-12 px-8 py-5 items-center
                      border-b border-black/10
                      hover:bg-[#f6f6f6] transition-colors"
          >
            {/* POS */}
            <div className="col-span-1 text-[14px] font-bold text-black">
              {driver.pos}
            </div>

            {/* DRIVER */}
            <div className="col-span-4 flex items-center gap-3 text-[14px] font-semibold text-black">
              <img
                src={driver.img}
                className="w-7 h-7 rounded-full object-cover object-top"
              />
              {driver.name}
            </div>

            {/* NATIONALITY */}
            <div className="col-span-2 text-[14px] font-medium text-black">
              {driver.nationality}
            </div>

            {/* TEAM */}
            <div className="col-span-3 text-[14px] font-medium text-black">
              {driver.team}
            </div>

            {/* PTS */}
            <div className="col-span-2 text-right text-[14px] font-bold text-black">
              {driver.pts}
            </div>
          </div>
        ))}
    </div>
    
    </section>
  );
};

export default Drivers;

