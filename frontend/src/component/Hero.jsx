
import React from 'react'
import { FaCircle } from "react-icons/fa";

function Hero({ heroData, heroCount, setHeroCount }) {
  return (
    <div className="w-[40%] h-[100%] relative">

      {/* Hero Text */}
      <div className="absolute md:left-[10%] left-[10%] md:top-[90px] lg:top-[130px] top-[10px]">
        {/* Main Heading */}
        <p className="text-gray-200 text-[22px] md:text-[42px] lg:text-[58px] font-bold tracking-tight drop-shadow-lg">
          {heroData.text1}
        </p>
        {/* Sub Heading with Gradient Accent */}
        <p className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold text-[20px] md:text-[38px] lg:text-[52px] tracking-tight">
          {heroData.text2}
        </p>
      </div>

      {/* Slider Dots */}
      <div className="absolute md:top-[400px] lg:top-[500px] top-[160px] left-[10%] flex items-center justify-center gap-[10px]">
        {[0, 1, 2, 3].map((i) => (
          <FaCircle
            key={i}
            className={`w-[14px] cursor-pointer ${heroCount === i ? "fill-pink-500" : "fill-gray-500"}`}
            onClick={() => setHeroCount(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
