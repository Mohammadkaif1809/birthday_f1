import React from 'react'
import { useEffect, useState } from "react";
import main from './f1membersAreaImgs/main.avif'
import RacingLine from '../pages/Racingline'
import sec2img1 from './f1membersAreaImgs/2ndsec1.avif'
import sec2img2 from './f1membersAreaImgs/2ndsec2.avif'
import sec2img3 from './f1membersAreaImgs/2ndsec3.avif'
import sec3img1 from './f1membersAreaImgs/3sec1.webp'
import sec3img2 from './f1membersAreaImgs/3sec2.webp'
import sec3img3 from './f1membersAreaImgs/3sec3.webp'
import sec3img4 from './f1membersAreaImgs/3sec4.webp'
import EpicRewards from './f1membersAreaImgs/epic_rewards.avif'
import VipExp from './f1membersAreaImgs/VIP-experiences.avif'
import MembersDiscount from './f1membersAreaImgs/Member-discounts.avif'


const F1MembersArea = () => {


  return (
    <>
    
    <div className="bg-[#f6f4f2] pt-10">
      {/* HERO SECTION */}
      <div className="relative w-full ">
        {/* Background image */}
        <img
          src={main}
          alt="F1 Unlocked"
          className="w-full h-[520px] object-cover"
        />

        {/* Dark gradient like official F1 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide">
            F1® UNLOCKED
          </h1>

          <p className="mt-4 text-lg md:text-xl max-w-[600px] font-semibold">
            The official F1 fan membership programme. Join free today.
          </p>
        </div>
      </div>

      {/* RED RACING LINE (mirrored like F1 site) */}
      <div className="mt-10 mx-auto w-[92%] scale-x-[-1]">
        <RacingLine height={28} color="#e10600" />
      </div>
      
      {/* BENEFITS SECTION */}
      <div className="mt-20 px-14">
        <h1 className="text-4xl font-extrabold mb-12">
          F1 Unlocked gets you closer and gives you more
        </h1>

        <div className="flex gap-10">

          {/* CARD 1 */}
          <div
            className="bg-white h-[210px] w-[450px] p-8 rounded-xl
                      transition-all duration-300 ease-out
                      hover:-translate-y-2
                      hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)]
                      active:scale-[0.98]"
          >
            <img
              src={sec2img1}
              className="w-12 mb-4
                        transition-transform duration-300
                        hover:scale-110"
              alt=""
            />
            <h3 className="text-xl font-bold mb-2">
              Exclusive Content
            </h3>
            <p>
              Go behind-the-scenes of your favourite teams and drivers.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="bg-white h-[210px] w-[450px] p-8 rounded-xl
                      transition-all duration-300 ease-out
                      hover:-translate-y-2
                      hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)]
                      active:scale-[0.98]"
          >
            <img
              src={sec2img2}
              className="w-12 mb-4
                        transition-transform duration-300
                        hover:scale-110"
              alt=""
            />
            <h3 className="text-xl font-bold mb-2">
              VIP Experiences
            </h3>
            <p>
              Live like an F1 insider: Exclusive access & epic VIP prizes.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="bg-white h-[210px] w-[450px] p-8 rounded-xl
                      transition-all duration-300 ease-out
                      hover:-translate-y-2
                      hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)]
                      active:scale-[0.98]"
          >
            <img
              src={sec2img3}
              className="w-12 mb-4
                        transition-transform duration-300
                        hover:scale-110"
              alt=""
            />
            <h3 className="text-xl font-bold mb-2">
              Rewards and Discounts
            </h3>
            <p>
              Unlock member-only F1 rewards and savings.
            </p>
          </div>

        </div>
      </div>


      {/* LATEST UNLOCKED ARTICLES */}
      <div className="bg-white mt-24 py-16">
        <div className="px-14">

          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-[34px] font-extrabold tracking-tight">
              LATEST UNLOCKED ARTICLES
            </h2>

            {/* View all underline */}
            <span className="relative text-sm font-semibold cursor-pointer group">
              View all
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#e10600]
                              transition-all duration-300 group-hover:w-full" />
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">

            {/* CARD 1 */}
            <div className="group flex bg-[#f6f4f2] rounded-xl overflow-hidden h-[140px]
                            transition-all duration-300 ease-out
                            hover:-translate-y-[4px]
                            hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <img
                src={sec3img1}
                alt=""
                className="w-[180px] h-full object-cover"
              />

              <div className="p-6 flex flex-col justify-between">
                <span className="inline-block bg-[#e10600] text-white text-[11px]
                                font-bold px-2 py-[2px] w-fit rounded">
                  HINCHCLIFFE
                </span>

                <h3 className="relative text-[18px] font-bold leading-snug w-fit">
                  <span className="relative">
                    ‘History shows Piastri will be even better in 2026’
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black
                                    transition-all duration-300 group-hover:w-full" />
                  </span>
                </h3>

                <p className="text-[13px] text-black/60">4 hours ago</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group flex bg-[#f6f4f2] rounded-xl overflow-hidden h-[140px]
                            transition-all duration-300 ease-out
                            hover:-translate-y-[4px]
                            hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <img
                src={sec3img2}
                alt=""
                className="w-[180px] h-full object-cover"
              />

              <div className="p-6 flex flex-col justify-between">
                <span className="inline-block bg-[#e10600] text-white text-[11px]
                                font-bold px-2 py-[2px] w-fit rounded">
                  PALMER
                </span>

                <h3 className="relative text-[18px] font-bold leading-snug w-fit">
                  <span className="relative">
                    Jolyon Palmer picks his stand-out performers in 2025
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black
                                    transition-all duration-300 group-hover:w-full" />
                  </span>
                </h3>

                <p className="text-[13px] text-black/60">December 24, 2025</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group flex bg-[#f6f4f2] rounded-xl overflow-hidden h-[140px]
                            transition-all duration-300 ease-out
                            hover:-translate-y-[4px]
                            hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <img
                src={sec3img3}
                alt=""
                className="w-[180px] h-full object-cover"
              />

              <div className="p-6 flex flex-col justify-between">
                <span className="inline-block bg-[#e10600] text-white text-[11px]
                                font-bold px-2 py-[2px] w-fit rounded">
                  QUIZ
                </span>

                <h3 className="relative text-[18px] font-bold leading-snug w-fit">
                  <span className="relative">
                    10 quiz questions on British F1 World Champions
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black
                                    transition-all duration-300 group-hover:w-full" />
                  </span>
                </h3>

                <p className="text-[13px] text-black/60">December 24, 2025</p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="group flex bg-[#f6f4f2] rounded-xl overflow-hidden h-[140px]
                            transition-all duration-300 ease-out
                            hover:-translate-y-[4px]
                            hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <img
                src={sec3img4}
                alt=""
                className="w-[180px] h-full object-cover"
              />

              <div className="p-6 flex flex-col justify-between">
                <span className="inline-block bg-[#e10600] text-white text-[11px]
                                font-bold px-2 py-[2px] w-fit rounded">
                  TREMAYNE
                </span>

                <h3 className="relative text-[18px] font-bold leading-snug w-fit">
                  <span className="relative">
                    ‘Why I’ll always have a soft spot for Sauber’
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black
                                    transition-all duration-300 group-hover:w-full" />
                  </span>
                </h3>

                <p className="text-[13px] text-black/60">December 21, 2025</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* FEATURE SECTIONS */}
      <div className="bg-[#f6f4f2] py-20 space-y-20">

        {/* SECTION 1 — EPIC REWARDS */}
        <div className="bg-white mx-14 rounded-2xl px-16 py-14 flex items-center justify-between">
          {/* Text */}
          <div className="max-w-[480px]">
            <h2 className="text-4xl font-extrabold mb-4">
              Epic rewards
            </h2>
            <p className="text-base text-black/70 leading-relaxed mb-8">
              Access your unique F1 Unlocked member benefits and rewards including
              exclusive digital downloads.
            </p>

            <button className="border-2 border-black rounded-full px-8 py-3
                              text-sm font-bold tracking-wide
                              hover:bg-black hover:text-white
                              transition-all duration-300">
              JOIN F1 UNLOCKED FREE
            </button>
          </div>

          {/* Image */}
          <img
            src={EpicRewards}
            alt=""
            className="w-[520px] h-[320px] object-cover rounded-xl"
          />
        </div>

        {/* SECTION 2 — VIP EXPERIENCES */}
        <div className="bg-white mx-14 rounded-2xl px-16 py-14 flex items-center justify-between">
          {/* Image */}
          <img
            src={VipExp}
            alt=""
            className="w-[520px] h-[320px] object-cover rounded-xl"
          />

          {/* Text */}
          <div className="max-w-[480px]">
            <h2 className="text-4xl font-extrabold mb-4">
              VIP experiences
            </h2>
            <p className="text-base text-black/70 leading-relaxed mb-8">
              Enter one-of-a-kind prize draws you won’t find anywhere else.
              Exclusive event invites, Grand Prix tickets and hospitality, and much
              more are up for grabs in 2025.
            </p>

            <button className="border-2 border-black rounded-full px-8 py-3
                              text-sm font-bold tracking-wide
                              hover:bg-black hover:text-white
                              transition-all duration-300">
              JOIN F1 UNLOCKED FREE
            </button>
          </div>
        </div>

        {/* SECTION 3 — MEMBER DISCOUNTS */}
        <div className="bg-white mx-14 rounded-2xl px-16 py-14 flex items-center justify-between">
          {/* Text */}
          <div className="max-w-[480px]">
            <h2 className="text-4xl font-extrabold mb-4">
              Member discounts
            </h2>
            <p className="text-base text-black/70 leading-relaxed mb-8">
              Enjoy your exclusive member discounts on F1 merch, memorabilia,
              and your Grand Prix flights. Plus, be the first to know about
              flash sales and incredible deals.
            </p>

            <button className="border-2 border-black rounded-full px-8 py-3
                              text-sm font-bold tracking-wide
                              hover:bg-black hover:text-white
                              transition-all duration-300">
              JOIN F1 UNLOCKED FREE
            </button>
          </div>

          {/* Image */}
          <img
            src={MembersDiscount}
            alt=""
            className="w-[520px] h-[320px] object-cover rounded-xl"
          />
        </div>

        </div>




        {/* SIGN UP SECTION */}
        <div className="bg-[#0f1118] py-28">
          <div className="max-w-[520px] mx-auto text-white">

            {/* Title */}
            <h2 className="text-3xl font-extrabold text-center mb-12">
              Sign up to F1 UNLOCKED
            </h2>

            {/* FORM */}
            <form className="space-y-6">

              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full h-[52px] rounded-xl bg-transparent
                            border border-white/40
                            px-4 text-white placeholder-white/40
                            focus:outline-none focus:border-white"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full h-[52px] rounded-xl bg-transparent
                            border border-white/40
                            px-4 text-white placeholder-white/40
                            focus:outline-none focus:border-white"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Date of Birth
                </label>
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
                  className="w-full h-[52px] rounded-xl bg-transparent
                            border border-white/40
                            px-4 text-white placeholder-white/40
                            focus:outline-none focus:border-white"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-[52px] rounded-xl bg-transparent
                            border border-white/40
                            px-4 text-white placeholder-white/40
                            focus:outline-none focus:border-white"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Create a password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-[52px] rounded-xl bg-transparent
                            border border-white/40
                            px-4 text-white placeholder-white/40
                            focus:outline-none focus:border-white"
                />
              </div>

              {/* Password rules */}
              <div className="text-xs text-white/50 leading-relaxed">
                <p className="font-semibold mb-1">Password must contain</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Uppercase</li>
                  <li>Lowercase</li>
                  <li>Number</li>
                  <li>8–30 characters</li>
                  <li>Any of !, @, #, %, ^, &, +, =, -</li>
                </ul>
              </div>

              {/* Marketing checkbox */}
              <div className="flex gap-3 items-start text-sm text-white/70 leading-relaxed">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-white"
                />
                <p>
                  I want to receive emails and other marketing communications from F1®
                  including updates, offers, and information about our products and
                  promotions. F1® will process your data in accordance with our{" "}
                  <span className="underline cursor-pointer">Privacy Policy</span>.
                </p>
              </div>

              {/* Terms */}
              <p className="text-xs text-white/50 leading-relaxed">
                By clicking on register, I agree that I have read and agree to the{" "}
                <span className="underline cursor-pointer">Terms and Conditions</span>{" "}
                and understand that my data will be processed in accordance with the{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>

              {/* Register button */}
              <button
                type="submit"
                className="w-full h-[54px] bg-[#e10600] rounded-full
                          font-bold tracking-wide
                          hover:bg-[#c90500]
                          transition-colors duration-300"
              >
                REGISTER
              </button>

              {/* Sign in */}
              <p className="text-center text-sm text-white/70 mt-6">
                Already have an account?{" "}
                <span className="underline cursor-pointer">Sign In</span>
              </p>

            </form>
          </div>
        </div>



    </div>
    </>
  );

};

export default F1MembersArea;
