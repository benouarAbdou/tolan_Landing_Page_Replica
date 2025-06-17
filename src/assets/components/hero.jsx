import React from "react";
import logo from "../images/hero_logo.svg";
import smallPink from "../videos/small_pink.webm";
import smallPurple from "../videos/small_purple.webm";
import smallGreen1 from "../videos/small_green1.webm";
import smallGreen2 from "../videos/small_green2.webm";

const Hero = () => {
  return (
    <div className="bg-[#F4F2E7] min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Container for logo and positioned videos */}
      <div className="relative w-full max-w-3xl mx-auto h-auto">
        {/* Logo as the reference point */}
        <img src={logo} alt="Logo" className="w-full h-auto relative z-10" />

        {/* Videos positioned relative to the container */}
        <video
          src={smallPink}
          autoPlay
          loop
          muted
          className="absolute w-24 md:w-32 lg:w-48 h-auto"
          style={{
            top: "-20%",
            left: "20%",
            zIndex: 20,
            transform: "translate(-50%, -50%)"
          }}
        />
        <video
          src={smallPurple}
          autoPlay
          loop
          muted
          className="absolute w-32 md:w-48 lg:w-64 h-auto"
          style={{
            top: "15%",
            left: "65%",
            zIndex: 20,
            transform: "translate(-50%, -50%)"
          }}
        />
        <video
          src={smallGreen1}
          autoPlay
          loop
          muted
          className="absolute w-24 md:w-48 lg:w-52 h-auto"
          style={{
            top: "60%",
            left: "34%",
            zIndex: 5,
            transform: "translate(-50%, -50%)"
          }}
        />
        <video
          src={smallGreen2}
          autoPlay
          loop
          muted
          className="absolute w-32 md:w-48 lg:w-64 h-auto"
          style={{
            top: "75%",
            left: "100%",
            zIndex: 20,
            transform: "translate(-50%, -50%)"
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
