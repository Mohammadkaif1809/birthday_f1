import { useState } from "react";
import { Eye, EyeOff, ChevronDown } from "lucide-react";

const titles = ["Mr", "Mrs", "Miss", "Ms"];

/* FULL COUNTRY LIST */
const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia",
  "Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Belgium",
  "Bhutan","Bolivia","Brazil","Bulgaria","Cambodia","Canada","Chile","China",
  "Colombia","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Dominican Republic",
  "Ecuador","Egypt","Estonia","Finland","France","Georgia","Germany","Ghana","Greece",
  "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy",
  "Japan","Jordan","Kenya","Kuwait","Latvia","Lebanon","Lithuania","Luxembourg",
  "Malaysia","Maldives","Mexico","Monaco","Mongolia","Morocco","Nepal","Netherlands",
  "New Zealand","Nigeria","North Korea","Norway","Oman","Pakistan","Peru","Philippines",
  "Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia","Singapore","Slovakia",
  "Slovenia","South Africa","South Korea","Spain","Sri Lanka","Sweden","Switzerland",
  "Thailand","Turkey","Ukraine","United Arab Emirates","United Kingdom","United States",
  "Uruguay","Vietnam","Zimbabwe"
];

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-[640px] mx-auto px-6 py-16">
      <div className="border border-black/30 rounded-xl p-10 bg-[#F7F4EF]">

        <h1 className="text-4xl font-extrabold mb-8">CREATE ACCOUNT</h1>
        <div className="h-px bg-black/20 mb-10" />

        {/* TITLE */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Title</label>
          <div className="relative">
            <select className="w-full h-12 px-4 pr-10 rounded-lg border border-black/30 bg-white appearance-none focus:border-red-600 transition">
              <option>Select</option>
              {titles.map(t => <option key={t}>{t}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60" />
          </div>
        </div>

        {/* FIRST NAME */}
        <div className="mb-6">
          <label className="block mb-2  font-semibold">First name</label>
          <input
            className="w-full h-12 px-4 rounded-lg border border-black/30 focus:border-red-600 transition bg-white"
            placeholder="First name"
          />
        </div>

        {/* LAST NAME */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Last name</label>
          <input
            className="w-full h-12 px-4 bg-white rounded-lg border border-black/30 focus:border-red-600 transition"
            placeholder="Last name"
          />
        </div>

        {/* DOB */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Date of birth</label>
          <input
            className="w-full h-12 px-4 bg-white rounded-lg border border-black/30 focus:border-red-600 transition"
            placeholder="MM/DD/YYYY"
          />
        </div>

        {/* COUNTRY */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Country of residence</label>
          <div className="relative">
            <select className="w-full h-12 px-4 pr-10 rounded-lg border border-black/30 bg-white appearance-none focus:border-red-600 transition">
              <option>Select</option>
              {countries.map(c => <option key={c}>{c}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60" />
          </div>
        </div>

        {/* EMAIL */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Email address</label>
          <input
            className="w-full h-12 px-4 bg-white rounded-lg border border-black/30 focus:border-red-600 transition"
            placeholder="Email address"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full h-12 px-4 pr-12 rounded-lg border bg-white border-black/30 focus:border-red-600 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60 hover:text-black"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="mt-3 text-sm text-black/70">
            Password must contain
            <br />• Uppercase • Lowercase • Number • 8–30 characters
            <br />• Any of !, @, #, %, ^, &, +, =, -
          </p>
        </div>

        {/* CHECKBOX */}
        <div className="mb-6 flex gap-3 text-sm">
          <input type="checkbox" className="mt-1 accent-red-600" />
          <p>
            I want to receive emails and marketing communications from F1®.
            <span className="underline decoration-red-600 underline-offset-4 ml-1 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>

        <p className="text-sm mb-8">
          By clicking on register, I agree to the
          <span className="underline decoration-red-600 underline-offset-4 ml-1 cursor-pointer">
            Terms and Conditions
          </span>
        </p>

        {/* REGISTER BUTTON */}
        <div className="flex justify-end">
          <button
            className="
              bg-red-600 text-white
              px-10 py-3 rounded-md font-bold
              transition-all duration-300 ease-out
              hover:bg-white hover:text-red-600 hover:border hover:border-red-600
              active:scale-[0.96]
            "
          >
            REGISTER
          </button>
        </div>

      </div>
    </div>
  );
};

export default Register;
