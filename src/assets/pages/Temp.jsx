import React from 'react'
import linkIcon from '../images/external-link.svg'

const Temp = () => {
  return (
    <div className="bg-white w-full py-10">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          place-items-center
        ">

          {[
            '2026 SCHEDULE',
            '2025 STANDINGS',
            'LATEST NEWS',
            'LATEST VIDEO'
          ].map((text, index) => (
            <div
              key={index}
              className="
                bg-[#C7CBF4]
                w-full
                max-w-[360px]
                h-[62px]
                flex
                items-center
                justify-between
                px-6
                rounded-[12px]
                cursor-pointer
                transition-all
                duration-200
                hover:bg-[#BDC2F0]
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              <strong className="text-[16px] sm:text-[17px] font-bold tracking-wide">
                {text}
              </strong>

              <img
                src={linkIcon}
                className="w-[22px] sm:w-[25px]"
                alt=""
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Temp
