import React from "react";
import linkIcon from "../images/external-link.svg";

const Temp2 = () => {
  return (
    <div className="bg-white min-h-[570px]">
      {/* TOP GRID */}
      <div className="w-full py-8 sm:py-10">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-5
              place-items-center
              uppercase
            "
          >
            {["F1® Unlocked", "F1® store", "F1® Tickets", "F1® Fantasy"].map(
              (text, index) => (
                <div
                  key={index}
                  className="
                    bg-[#C7CBF4]
                    w-full
                    h-[55px]
                    flex
                    items-center
                    justify-between
                    px-6
                    rounded-[12px]
                    cursor-pointer
                    transition-all
                    duration-200
                    hover:bg-[#BDC2F0]
                    hover:shadow-md
                    hover:-translate-y-[2px]
                    active:scale-[0.98]
                  "
                >
                  <strong className="text-[15px] sm:text-[16px] font-bold tracking-wide">
                    {text}
                  </strong>

                  <img
                    src={linkIcon}
                    className="w-[20px] sm:w-[22px]"
                    alt=""
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* RED CTA SECTION */}
      <div className="mx-4 sm:mx-6 md:mx-14">
        <div
          className="
            bg-[#E10600]
            min-h-[300px]
            sm:min-h-[360px]
            md:min-h-[414px]
            px-6
            flex
            items-end
            rounded-[10px]
          "
        >
          <div className="pb-8 sm:pb-10 md:pb-12 space-y-3 sm:space-y-4">
            <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl">
              HELP SHAPE THE F1 WEBSITE
            </h1>

            <p className="text-white font-semibold text-sm sm:text-base max-w-xl">
              Take a few minutes to tell us what you think.
            </p>

            <button
              className="
                bg-white
                text-black
                font-bold
                rounded-2xl
                px-5
                py-2
                mt-3
                cursor-pointer
                transition
                hover:bg-gray-200
                hover:shadow-md
                active:scale-95
              "
            >
              Let’s go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp2;
