import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import DropDown from "../../images/dropdown.svg";

const YEARS = Array.from({ length: 76 }, (_, i) => 2025 - i);

const ResultsLayout = () => {
  const [yearOpen, setYearOpen] = useState(false);
  const [year, setYear] = useState(2025);

  return (
    <>
      {/* YEAR + TABS */}
      <div className="relative bg-white  h-[190px] flex items-end">
        <ul className="flex gap-12 text-[17px] pl-12 pb-4 font-semibold items-center">

          {/* YEAR DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => setYearOpen(!yearOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                         cursor-pointer
                         transition-all duration-200
                         hover:bg-gray-200 hover:shadow-sm
                         active:scale-[0.96]"
            >
              {year}
              <img
                src={DropDown}
                alt="dropdown"
                className={`w-4 transition-transform duration-200 ${
                  yearOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* YEAR LIST */}
            {yearOpen && (
              <ul
                className="absolute left-0 mt-2 w-[120px]
                           max-h-[260px] overflow-y-auto
                           bg-white border border-black/20
                           rounded-xl shadow-lg
                           z-50
                           animate-dropdown"
              >
                {YEARS.map((y) => (
                  <li
                    key={y}
                    onClick={() => {
                      setYear(y);
                      setYearOpen(false);
                    }}
                    className={`px-4 py-2 text-sm cursor-pointer
                                transition-colors
                                hover:bg-gray-100
                                ${year === y ? "font-bold" : ""}`}
                  >
                    {y}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* TABS */}
          {["races", "drivers", "teams", "awards"].map((tab) => (
            <NavLink
              key={tab}
              to={tab}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-200
                 hover:text-black active:scale-[0.97]
                 ${isActive ? "text-black" : "text-gray-400"}`
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}

                  {/* RED UNDERLINE */}
                  {isActive && tab !== "races" && (
                    <span
                      className="absolute left-0 right-0 -bottom-1
                                 h-[3px] bg-red-600 rounded-full"
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* PAGE CONTENT */}
      <Outlet />
    </>
  );
};

export default ResultsLayout;
