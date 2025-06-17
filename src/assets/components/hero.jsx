import React from "react";
import logo from "../images/hero_logo.svg";
import smallPink from "../videos/small_pink.webm";
import smallPurple from "../videos/small_purple.webm";
import smallGreen1 from "../videos/small_green1.webm";
import smallGreen2 from "../videos/small_green2.webm";

const Hero = () => {
  return (
    <div className="bg-[#F4F2E7] min-h-screen p-10 flex items-center justify-center relative overflow-hidden">
      {/* Container for logo and positioned videos */}
      <div className="relative w-full  max-w-3xl mx-auto h-auto">
        {/* Logo as the reference point */}
        <img src={logo} alt="Logo" className="w-full h-auto relative z-10" />

        {/* Videos positioned relative to the container */}
        <video
          src={smallPink}
          autoPlay
          loop
          muted
          className="absolute h-auto"
          style={{
            width: "25%", // Percentage of parent container width
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
          className="absolute h-auto"
          style={{
            width: "30%", // Percentage of parent container width
            top: "16%",
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
          className="absolute h-auto"
          style={{
            width: "25%", // Percentage of parent container width
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
          className="absolute h-auto"
          style={{
            width: "35%", // Percentage of parent container width
            top: "75%",
            left: "102%",
            zIndex: 20,
            transform: "translate(-50%, -50%)"
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
