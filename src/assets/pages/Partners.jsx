import React from "react";

/* ===== TOP ROW ===== */
import LVMH from "../../assets/images/partners/lvmh.webp";
import Pirelli from "../../assets/images/partners/pirelli.webp";
import Aramco from "../../assets/images/partners/aramco.webp";
import Heineken from "../../assets/images/partners/BBS.webp";
import AWS from "../../assets/images/partners/AWS GLOBAL.webp";
import Lenovo from "../../assets/images/partners/lenovo.webp";
import Max from "../../assets/images/partners/max.svg";
import QatarAirways from "../../assets/images/partners/qatar.webp";
import MSC from "../../assets/images/partners/msc.webp";
import ST from "../../assets/images/partners/st.png";
import Salesforce from "../../assets/images/partners/salesforce.webp";

/* ===== SECOND ROW ===== */
import LouisVuitton from "../../assets/images/partners/louis vuitton.webp";
import TagHeuer from "../../assets/images/partners/TAGH_Shield_Monochrome_White-pw1.webp";
import MoetHennessy from "../../assets/images/partners/moet hennessy.webp";
import Amex from "../../assets/images/partners/Amex.webp";
import Santander from "../../assets/images/partners/santander.webp";
import Allwyn from "../../assets/images/partners/allwyn.webp";
import Globant from "../../assets/images/partners/globant.webp";
import LasVegas from "../../assets/images/partners/las vegas.webp";
import Paramount from "../../assets/images/partners/Paramount+.webp";
import Barilla from "../../assets/images/partners/barilla.webp";
import Tpt from "../../assets/images/partners/tpt.png";
import Nestle from "../../assets/images/partners/nestle.webp";

/* ===== THIRD ROW ===== */
import mbu from "../../assets/images/partners/mbu.webp";
import PepsiCo from "../../assets/images/partners/pepsico.webp";

/* ===== BOTTOM ROW ===== */
import Puma from "../../assets/images/partners/puma.webp";
import Tata from "../../assets/images/partners/TATA.webp";
import Aggreko from "../../assets/images/partners/aggreko.webp";
import BBS from "../../assets/images/partners/BBS.webp";
import McDonalds from "../../assets/images/partners/mcdonalds.webp";

/* extra */
import MoguMogu from "../../assets/images/partners/mogumogu.svg";
import Jersey from "../../assets/images/partners/jersey.png";
import RCB from "../../assets/images/partners/rcb-logo.png";
import Bahubali from "../../assets/images/partners/bahubali3.png";
import SRH from "../../assets/images/partners/srh.png";

const imgHover =
  'cursor-pointer p-[3px] '


const Partners = () => {
  return (
    <section>
      {/* ===== HEADER + FIRST ROW ===== */}
      <div className="w-full bg-[#1C1C25] px-2 mt-10 py-6 md:py-10">
        <div className="text-white px-4 md:px-10 lg:px-16">
          <ul className="flex justify-between items-center mb-13">
            <li className="uppercase font-bold text-xl md:text-3xl">
              our partners
            </li>

            {/* View all underline */}
            <li className="relative font-semibold text-sm md:text-base cursor-pointer
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-[#E10600]
                after:transition-all after:duration-300
                hover:after:w-full">
              View all
            </li>
          </ul>

          <ul className="flex flex-wrap justify-center lg:justify-evenly gap-x-8 gap-y-6">
            <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] aspect-video object-contain ${imgHover}`} src={LVMH} alt="LVMH" /></li>
            <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] aspect-video object-contain ${imgHover}`} src={Pirelli} alt="Pirelli" /></li>
            <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] aspect-video object-contain ${imgHover}`} src={Aramco} alt="Aramco" /></li>
            <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] aspect-video object-contain ${imgHover}`} src={Heineken} alt="Heineken" /></li>
            <li><img className={`w-[56px] md:w-[72px] lg:w-[60px] aspect-video object-contain mt-2 ${imgHover}`} src={AWS} alt="AWS" /></li>
            <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] aspect-video object-contain ${imgHover}`} src={Lenovo} alt="Lenovo" /></li>
            <li><img className={`w-[56px] md:w-[72px] lg:w-[100px] pb-2 aspect-video object-contain ${imgHover}`} src={Max} alt="DHL" /></li>
            <li><img className={`w-[56px] md:w-[72px] lg:w-[60px] aspect-video object-contain mt-2 ${imgHover}`} src={QatarAirways} alt="Qatar Airways" /></li>
            <li><img className={`w-[80px] lg:w-[110px] aspect-video pb-3 object-contain invert ${imgHover}`} src={MoguMogu} alt="Mogu Mogu" /></li>
            <li><img className={`w-[86px] md:w-[72px] lg:w-[90px] aspect-video object-cover invert  ${imgHover}`} src={ST} alt="Crypto.com" /></li>
            <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] aspect-video object-contain ${imgHover}`} src={Salesforce} alt="Salesforce" /></li>
          </ul>
        </div>
      </div>

      {/* ===== SECOND + THIRD ROW ===== */}
      <div className="bg-[#303037] py-5">
        <ul className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 px-4 md:px-10 lg:px-20">
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={LouisVuitton} alt="Louis Vuitton" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px]  brightness-80 object-contain ${imgHover}`} src={SRH} alt="SRH" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={MoetHennessy} alt="Moët Hennessy" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={Amex} alt="American Express" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={Santander} alt="Santander" /></li>
          <li><img className={`w-[72px] lg:w-[100px]  brightness-100 scale-[0.5] object-contain ${imgHover}`} src={RCB} alt="RCB" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={Globant} alt="Globant" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={LasVegas} alt="Las Vegas" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={Paramount} alt="Paramount+" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[60px] object-contain ${imgHover}`} src={Barilla} alt="Barilla" /></li>
          <li><img className={`w-[80px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={Tpt} alt="Liqui Moly" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[60px] object-contain ${imgHover}`} src={Nestle} alt="Nestlé" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={mbu} alt="PwC" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] object-contain ${imgHover}`} src={PepsiCo} alt="PepsiCo" /></li>
        </ul>
      </div>

      {/* ===== BOTTOM ROW ===== */}
      <div className="bg-[#47464C] py-8">
        <ul className="flex flex-wrap justify-center items-center gap-10">
          <li><img className={`w-[56px] md:w-[72px] lg:w-[60px] object-contain ${imgHover}`} src={Puma} alt="Puma" /></li>
          <li><img className={`w-[72px] lg:w-[72px] scale-[1.4] object-contain invert mt-2 ${imgHover}`} src={Jersey} alt="Jersey" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[60px] object-contain ${imgHover}`} src={Aggreko} alt="Aggreko" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[80px] scale-[0.8] object-contain brightness-150 ${imgHover}`} src={Bahubali} alt="Bahubali" /></li>
          <li><img className={`w-[56px] md:w-[72px] lg:w-[50px] object-contain ${imgHover}`} src={McDonalds} alt="McDonald's" /></li>
        </ul>
      </div>
    </section>
  );
};

export default Partners;
