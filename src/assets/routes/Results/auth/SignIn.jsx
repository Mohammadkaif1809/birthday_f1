import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="max-w-[600px] mx-auto px-6 pt-16">
      <h1 className="text-4xl font-extrabold mb-10">SIGN IN</h1>

      <div className="space-y-8">
        <div>
          <label className="block mb-2 font-semibold">Email address</label>
          <input
            className="w-full h-12 px-4 rounded-lg border bg-white border-black/30"
            placeholder="Enter your username"
          />
        </div>

       <div>
        <label className="block mb-2 font-semibold">Password</label>

        <div className="relative">
            <input
            type={showPassword ? "text" : "password"}
            className="w-full h-12 px-4 pr-12 rounded-lg bg-white border border-black/30"
            placeholder="Enter your password"
            />

            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black/60 hover:text-black transition"
            >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
        </div>
        </div>


        <div className="text-right font-semibold underline decoration-red-600 underline-offset-4 cursor-pointer">
          Forgotten password?
        </div>

        <button
            className="
                bg-red-600 text-white
                px-10 py-3
                font-bold rounded-md
                transition-all duration-300 ease-out
                hover:-translate-y-[1px]
                hover:shadow-[0_8px_20px_rgba(225,6,0,0.35)]
                hover:bg-red-700
                active:translate-y-0
                active:scale-[0.96]
            "
            >
            SIGN IN
        </button>


        <p>
          Don&apos;t have an account yet?{" "}
          <span className="font-semibold underline decoration-red-600 underline-offset-4 cursor-pointer">
            Register with F1
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;

