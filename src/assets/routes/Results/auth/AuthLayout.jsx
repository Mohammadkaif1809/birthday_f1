import { NavLink, Outlet, useNavigate } from "react-router-dom";
import f1Logo from "../../../images/download.svg"; // use your F1 logo path

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF]">

      {/* TOP DARK HEADER */}
      <div className="bg-gradient-to-r from-[#0b0c10] to-[#1a1c22] h-[110px] flex items-center px-10">
        <img
          src={f1Logo}
          alt="F1"
          className="h-8 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      
    {/* TABS BAR */}
    <div className="bg-[#2a2b30]">
    <div className="max-w-[1200px] mx-auto flex justify-center gap-14 text-sm text-white">
        {[
        { label: "Sign in", path: "/signin" },
        { label: "Register", path: "/register" },
        ].map(({ label, path }) => (
        <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
            `relative group py-4 font-semibold transition-colors duration-200 ${
                isActive ? "text-white" : "text-white/70 hover:text-white"
            }`
            }
        >
            {label}

            {/* underline */}
            <span
            className={`
                absolute left-0 -bottom-[1px]
                h-[3px] w-full bg-red-600
                origin-left
                transition-transform duration-300 ease-out
                ${
                location.pathname === path
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }
            `}
            />
        </NavLink>
        ))}
    </div>
    </div>



      {/* PAGE CONTENT */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* AUTH FOOTER (EXACT STYLE) */}
     {/* AUTH FOOTER */}
        <footer className="border-t border-black/20 bg-[#F7F4EF] mt-20">
        <div className="max-w-[1200px] mx-auto px-10 py-10 text-sm text-black/70">

            <div className="flex justify-between items-start gap-10">

            {/* LEFT SIDE */}
            <div>
                {/* F1 LOGO */}
                <img
                src={f1Logo}
                alt="F1"
                className="h-6 mb-4"
                />

                {/* THIN LINE */}
                <div className="w-40 h-[1px] bg-black/30 mb-4" />

                {/* LANGUAGES */}
                <div className="flex gap-4 font-semibold">
                <span className="cursor-pointer underline decoration-red-600 underline-offset-4">EN</span>
                <span className="cursor-pointer">FR</span>
                <span className="cursor-pointer">DE</span>
                <span className="cursor-pointer">ES</span>
                <span className="cursor-pointer">NL</span>
                <span className="cursor-pointer">PT</span>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-wrap gap-6 font-semibold text-right">
                <span className="cursor-pointer">Privacy Policy</span>
                <span className="cursor-pointer">Subscription</span>
                <span className="cursor-pointer">Terms Of Use</span>
                <span className="cursor-pointer">F1 Help</span>
                <span className="cursor-pointer">Cookie Preferences</span>
            </div>
            </div>

            {/* COPYRIGHT */}
            <p className="mt-6 text-xs text-black/60">
            © 2003-2025 Formula One World Championship Limited
            </p>
        </div>
        </footer>

    </div>
  );
};

export default AuthLayout;
