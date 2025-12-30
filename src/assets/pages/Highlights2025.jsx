import React, { useRef, useState } from 'react'

/* SVG PATTERN */
import f1Pattern from '../svgpatterns/PatternSection.svg'

/* ICONS */
import back from '../images/back.svg'
import next from '../images/next.svg'
import play from '../images/play.svg'

/* IMAGES */
import img1 from '../images/highlights25/image1.jpg'
import img2 from '../images/highlights25/image2.jpg'
import img3 from '../images/highlights25/image3.jpg'
import img4 from '../images/highlights25/image4.jpg'
import img5 from '../images/highlights25/image5.jpg'
import img6 from '../images/highlights25/image6.jpg'

const Highlights2025 = () => {
  const scrollRef = useRef(null)
  const [progress, setProgress] = useState(0)

  /* UPDATE PROGRESS */
  const handleScroll = () => {
    const el = scrollRef.current
    const maxScroll = el.scrollWidth - el.clientWidth
    const percent = (el.scrollLeft / maxScroll) * 100
    setProgress(percent || 0)
  }

  /* ARROW CONTROLS */
  const scrollNext = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' })
  }

  const scrollBack = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' })
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#0b0c10] pb-15">

      {/* ================= BACKGROUND (NON-CLICKABLE) ================= */}

      {/* BASE */}
      <div className="absolute inset-0 bg-[#0b0c10] pointer-events-none" />

      {/* SVG GEOMETRY */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${f1Pattern})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '640px 640px',
          opacity: 0.25,
        }}
      />

      {/* DOUBLE WHITE DIAGONAL STRIPES */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              135deg,
              rgba(255,255,255,1) 0px,
              rgba(255,255,255,1) 50px,
              rgba(255,255,255,0) 50px,
              rgba(255,255,255,0) 70px,
              rgba(255,255,255,1) 70px,
              rgba(255,255,255,1) 120px,
              rgba(255,255,255,0) 120px,
              rgba(255,255,255,0) 380px
            )
          `,
          mixBlendMode: 'soft-light',
          opacity: 0.7,
        }}
      />

      {/* DARK DEPTH GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/55 pointer-events-none" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10 text-white">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h2 className="uppercase text-[18px] sm:text-[22px] font-extrabold tracking-[0.16em] sm:tracking-[0.18em]">
              2025 Highlights
            </h2>

            <div className="hidden sm:flex items-center gap-6 text-sm font-semibold opacity-80 hover:opacity-100">
              <span className="cursor-pointer">View all</span>

              <div className="flex gap-4">
                <button
                  onClick={scrollBack}
                  className="p-2 rounded-full transition hover:bg-white/10 active:bg-white/20"
                >
                  <img className="w-5" src={back} alt="Back" />
                </button>

                <button
                  onClick={scrollNext}
                  className="p-2 rounded-full transition hover:bg-white/10 active:bg-white/20"
                >
                  <img className="w-5" src={next} alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLLABLE VIDEOS */}
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 pb-5 text-white">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 h-[220px] overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {[
              { img: img1, time: '7:21', title: 'Qualifying Highlights: 2025 Abu Dhabi Grand Prix' },
              { img: img2, time: '7:49', title: 'Formula 2 Highlights: Yas Island Sprint Race' },
              { img: img3, time: '3:58', title: 'FP3 Highlights: 2025 Abu Dhabi Grand Prix' },
              { img: img4, time: '6:12', title: 'Formula 2 Highlights: Sprint Race' },
              { img: img5, time: '5:44', title: 'FP2 Highlights: 2025 Abu Dhabi Grand Prix' },
              { img: img6, time: '6:01', title: 'Race Highlights: 2025 Abu Dhabi Grand Prix' },
            ].map((item, index) => (
              <div
                key={index}
                className="min-w-[240px] sm:min-w-[280px] lg:min-w-[320px] cursor-pointer group"
              >
                {/* IMAGE */}
                <div className="relative h-[140px] sm:h-[160px] lg:h-[180px] overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <img
                    src={play}
                    alt=""
                    className="absolute bottom-2 left-2 w-7 drop-shadow"
                  />

                  <p className="absolute bottom-2 right-2 bg-black/80 text-xs px-2 py-[2px] rounded">
                    {item.time}
                  </p>
                </div>

                {/* TITLE */}
                <p
                  className="
                    mt-3 sm:mt-4 pl-1 text-sm font-semibold
                    relative inline-block
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-full after:bg-white
                    after:origin-left after:scale-x-0
                    after:transition-transform after:duration-300 after:ease-out
                    group-hover:after:scale-x-100
                  "
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SCROLL PROGRESS LINE */}
        <div className="max-w-[1500px] mx-auto px-6 pt-6">
          <div className="h-[2px] w-full bg-gray-600/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-300 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Highlights2025
