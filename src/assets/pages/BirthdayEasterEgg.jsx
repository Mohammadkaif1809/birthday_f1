import React, { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import birthdayVideo from "../bday_video/bdayEdit.mp4";

const SECRET_PASSWORD = "31122007";

const BirthdayEasterEgg = ({ onClose }) => {
  const videoRef = useRef(null);

  const [countdown, setCountdown] = useState(3);
  const [stage, setStage] = useState("birthday");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");
  const [hint, setHint] = useState("");
  const [attempts, setAttempts] = useState(0);
  const hasShownBirthdayRef = useRef(false);


  const [shake, setShake] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHintGlow, setShowHintGlow] = useState(false);
  const [successGlow, setSuccessGlow] = useState(false);

  /* 🎉 Countdown */
  useEffect(() => {
    if (stage !== "countdown") return;

    if (countdown === 0) {
      setStage("wish");
      setCountdown(2); // reset silently
      return;
    }


    const t = setTimeout(() => setCountdown((c) => c - 1), 100);
    return () => clearTimeout(t);
  }, [countdown, stage]);

  useEffect(() => {
    if (stage !== "birthday") return;
    if (hasShownBirthdayRef.current) return; // 👈 ADD

    hasShownBirthdayRef.current = true;       // 👈 ADD

    const t = setTimeout(() => {
      setStage("countdown");
    }, 5000);

    return () => clearTimeout(t);
  }, [stage]);



  /* ▶️ Play video with volume fade-in */
  useEffect(() => {
    if (stage === "video" && videoRef.current) {
      const video = videoRef.current;
      video.volume = 0;
      video.play();

      let v = 0;
      const fadeIn = setInterval(() => {
        v += 0.05;
        if (v >= 1) {
          video.volume = 1;
          clearInterval(fadeIn);
        } else {
          video.volume = v;
        }
      }, 100);
    }
  }, [stage]);

  /* 🔐 Submit logic */
  const handlePasswordSubmit = () => {
    if (!password) return;

    if (password === SECRET_PASSWORD) {
      setPassword(""); // ✅ clear input
      setError("");
      setHint("");
      setAttempts(0);
      setShowConfetti(true);
      setSuccessGlow(true);
      setStage("video");

      setTimeout(() => setShowConfetti(false), 5000);
      setTimeout(() => setSuccessGlow(false), 1200);
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    setPassword(""); // ✅ clear input every time
    setError("Wrong password 😅");
    setShake(true);
    setTimeout(() => setShake(false), 500);

    if (newAttempts <= 3) {
      setHint("Hint: my special day is the key");
    } else if (newAttempts <= 5) {
      setHint("Hint: the day my smoll kid born");
    } else {
      setHint("Hint: spaces lekunda kottu papa ❤️");
    }

    setShowHintGlow(true);
    setTimeout(() => setShowHintGlow(false), 1200);
  };

  /* 🎬 Fade out & close */
  const handleVideoEnd = () => {
    const video = videoRef.current;
    let v = video.volume;

    const fadeOut = setInterval(() => {
      v -= 0.05;
      if (v <= 0) {
        video.volume = 0;
        clearInterval(fadeOut);
      } else {
        video.volume = v;
      }
    }, 100);
  };

  /* 🔁 Play again */
  const handlePlayAgain = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.volume = 0;
    video.play();

    let v = 0;
    const fadeIn = setInterval(() => {
      v += 0.05;
      if (v >= 1) {
        video.volume = 1;
        clearInterval(fadeIn);
      } else {
        video.volume = v;
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center">

      {showConfetti && <Confetti numberOfPieces={350} recycle={false} />}

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl
                   hover:scale-110 active:scale-95 transition"
      >
        ✕
      </button>

      <div
        className={`bg-[#0f1118] rounded-2xl p-10 text-center text-white w-[820px] h-[500px] flex flex-col justify-center gap-3
        transition-all duration-500 ${shake ? "animate-shake" : ""}`}
      >

        {/* {stage === "countdown" && (
          <h1 className="text-7xl font-extrabold animate-pulse">{countdown}</h1>
        )} */}

      {stage === "birthday" && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center
                        bg-black overflow-hidden">

          {/* cinematic animated background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,20,147,0.25),transparent_60%)]
                          animate-birthday-bg" />

          {/* glow layer */}
          <div className="absolute inset-0 blur-3xl opacity-60
                          bg-gradient-to-br from-pink-500 via-red-500 to-purple-600
                          animate-pulse-slow" />

          {/* text */}
          <div className="relative text-center">
            <h1 className="font-birthday
                          text-[70px] sm:text-[100px] md:text-[140px]
                          text-white
                          tracking-wide
                          animate-birthday-reveal">

              Happy Birthday

              <div className="mt-4 text-pink-300 animate-heartbeat-soft">
                Pooji 🎂
              </div>
            </h1>

            {/* shimmer sweep */}
            <div className="absolute inset-0
                            bg-gradient-to-r from-transparent via-white/40 to-transparent
                            animate-shimmer" />
          </div>

        </div>
      )}



      {stage === "wish" && (
         <div className="animate-wish-fade">
        
          <h2 className="text-3xl font-extrabold text-pink-200 mb-4">
            Happy 18th Birthday Smoll Baby Girl 🎂🎉
          </h2>

          <div className="mt-3 p-6 rounded-xl bg-black/40 text-[15px] leading-relaxed text-gray-200 max-h-[420px] overflow-y-auto shadow-inner">

            <p className="mb-4">
              You’re no longer small, not in height by the way height lo inka small eh, but as I always say,
              you’ll always be a small kid to me. No matter how many voter cards you get,
              I’ll always care for you. We’ll see each other very soon, ASAP.
              Mast thinpistha niku Hyderabad ochaka 😄
            </p>

            <p className="mb-4">
              Feel free to be my safe space. If you don’t like anyone in the future,
              that’s okay, <span className="italic">nak setup la undu</span>
              (I hope this happens 😄). You’ll be my setup, abbah,
              ni salary kuda dobbeyyachu, na wife salary tho paatu 😜.
              From last year’s birthday message till this one, a lot has happened.
              I don’t know how my next message will be, but until then,
              keep smiling, keep irritating me, and stay happy.
            </p>

            <p className="mb-4">
              Na daggara deniki siggu padaku, mohamata padaku.
              Ask me anything.I’ll always be someone you can talk to.
              Na daggara em unna cheppey, lopala petkoku.

              Ee year konchem takkuva edavdaniki try cheyyi. Motthanike oddu ante elago vinav ga 😄
              Snap streak maintain cheyye babu,cheppi cheppi na gontu pothundi.
              Thinane thintale, manchiga thinu Daily, manchiga paduko.

              Pichi pichi alochanlu petkoku, mind karab aiddi.
              Go easy on me. Happy ga undu. Naku ninna cheppina timetable follow aipo, consistent ga chaduvu.
            </p>
            <p className="mb-4">
              I hope I’m still not that guy who irritated you, who made you cry.
              Sorry for the things I did teleeka chesa, appudu realise avvaledu.ippudu alochisthe nenena alaga chesa ankuntunna.
              if i had a chance to go back to time,ninnu assalu ibbandi pettakapoyyevadni , ippudu ankoni em chestham le aina mottham aipoyyaaka.
              Really sorry for Everything.
              I’m no more that guy now.

              We may not love each other anymore, but that doesn’t mean I stop caring about you.
              I hope you find your one who loves you the way you want.
              Time can make that happen, and I really hope you find your soulmate very soon.

              After that, we’ll happily part our ways.
              Till then, ninnu savagodthune unta 😄
              Ippudu inka mellaga Arya ki message chesi gelkutha 😂😂
              <span className="font-semibold">Let’s be happy, pottoda 🤍</span>
            </p>
            <p className="mb-4"></p>
            <p className="mb-4">
              Pooji, you’re going to go far, far better heights.
              Appudu just remember me as
              <span className="italic">
                {" "}“he’s the guy who tolerated me as a child”
              </span>{" "}
              ani, and appudu ochi biryanis adgutha, thinpiyy 😁 Endho nannu kuda Feminist ga marchesav peddha vintha it is.
            </p>

            <p className="mb-4">
              Keep smiling, urike edvaku. Navvithe, you look super cute.
              Ni skincare kuda konistha le naaku salary ochaka, don’t worry ❤️
            </p>

            <p className="mb-4 font-semibold text-pink-300">
              Very, very happy birthday, Poojitha gutti.
            </p>

            <p className="mb-4">
              Rock this year. May all good things happen to you and may all luck find you.
              Stay positive and happy, even though I’m not with you.
              Liking yourself and being happy with yourself should be my
              smoll baby girl’s first priority, before texting me.
            </p>

            <p className="mb-4">
              After this, very pop-up just continue to the next step,
              and chaaala dachipetta, watch them all.
              Antha website clear ga chudu, find them all.
              I hope this brings you some happiness.
              It’s the best I can do, so yeah…
              antha pedda gift em kadhu idi, I know,
              but still adjust aipoo.
              Nuv baga undu, nannu baga undanivvu.
            </p>

            <p className="font-bold text-center text-white mt-6">
              Let’s have a lot of fun this year as platonic soulmates 🤍
            </p>

          </div>


          {/* 🔴 Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setStage("password")}
              className="px-10 py-3 rounded-full bg-[#e10600]
                        w-[500px] wish-button
                        transition-transform duration-300
                        hover:scale-105 active:scale-95"
            >
              Click to Continue
            </button>
          </div>
        </div>
      )}


        {stage === "password" && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Enter Secret Password 🔐
            </h2>

            <div className="relative w-[400px] mx-auto">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                inputMode="numeric"
                onChange={(e) =>
                  setPassword(e.target.value.replace(/\D/g, ""))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") handlePasswordSubmit();
                }}
                className={`w-full h-[48px] rounded-xl bg-transparent text-white px-3
                focus:outline-none transition-all duration-300
                ${successGlow ? "animate-success-glow border-green-400" : "border border-white/40"}`}
                placeholder="Numbers only"
              />

              {attempts < 3 && (
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute pr-4 right-3 top-1/2 -translate-y-1/2
                             text-xs text-white/60 hover:text-white transition"
                >
                  {showPassword ? "HIDE" : "VIEW"}
                </button>
              )}
            </div>

            {error && <p className="text-red-400 mt-3">{error}</p>}

            {hint && (
              <div
                className={`mt-4 px-4 py-2 rounded-lg text-sm
                ${showHintGlow ? "animate-hint-glow" : ""}`}
              >
                {hint}
              </div>
            )}

            <button
              onClick={handlePasswordSubmit}
              className="mt-6 mx-auto block w-[200px] h-[48px] bg-[#e10600]
              rounded-full hover:scale-[1.02]
              hover:shadow-[0_0_25px_rgba(225,6,0,0.6)]
              active:scale-95 transition-all duration-300"
            >
              UNLOCK 🎁
            </button>
          </>
        )}

        {stage === "video" && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              💖 Much more love from Jimmy 💖
            </h2>

            <video
              ref={videoRef}
              src={birthdayVideo}
              controls
              onEnded={handleVideoEnd}
              className="w-[calc(100%)] h-[calc(100%)]
                        -mx-[20px]
                        rounded-xl shadow-2xl"
            />


            <div className="mt-6 flex gap-4">
              <button
                onClick={handlePlayAgain}
                className="flex-1 py-3 rounded-full border border-white/30
                hover:bg-white hover:text-black
                hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]
                active:scale-95 transition-all duration-300"
              >
                ▶ Play Again
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-full bg-[#e10600]
                hover:bg-[#c90500]
                hover:shadow-[0_0_25px_rgba(225,6,0,0.6)]
                active:scale-95 transition-all duration-300"
              >
                ← Go Back
              </button>
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes shake {
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        .animate-shake { animation: shake 0.5s; }

        @keyframes hintGlow {
          50% { box-shadow: 0 0 25px rgba(225,6,0,0.7); }
        }
        .animate-hint-glow {
          animation: hintGlow 1.2s;
          border: 1px solid rgba(225,6,0,0.6);
        }

        @keyframes successGlow {
          50% { box-shadow: 0 0 30px rgba(34,197,94,0.9); }
        }
        .animate-success-glow {
          animation: successGlow 1.2s;
        }
        @keyframes wishFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-wish-fade {
          animation: wishFade 0.8s ease-out forwards;
        }

      `
      }</style>
    </div>
  );
};

export default BirthdayEasterEgg;
