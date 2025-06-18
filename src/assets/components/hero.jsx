import React, { useRef, useEffect } from "react";
import logo from "../images/hero_logo.svg";
import smallPink from "../videos/small_pink.webm";
import smallPurple from "../videos/small_purple.webm";
import smallGreen1 from "../videos/small_green1.webm";
import smallGreen2 from "../videos/small_green2.webm";
import bigBlue from "../videos/big_blue.webm";
import bigYellow from "../videos/big_yellow.webm";
import Testimonials from "./test";
import Cta from "./cta";

const Hero = () => {
  const bigBlueRef = useRef(null);
  const bigYellowRef = useRef(null);

  useEffect(() => {
    const handleVideoLoop = (videoRef) => {
      if (videoRef.current) {
        const video = videoRef.current;
        video.addEventListener("ended", () => {
          video.pause();
          setTimeout(() => {
            video
              .play()
              .catch((error) => console.error("Video play failed:", error));
          }, 5000); // 5-second delay
        });
      }
    };

    handleVideoLoop(bigBlueRef);
    handleVideoLoop(bigYellowRef);

    return () => {
      // Cleanup event listeners
      if (bigBlueRef.current) {
        bigBlueRef.current.removeEventListener("ended", () => {});
      }
      if (bigYellowRef.current) {
        bigYellowRef.current.removeEventListener("ended", () => {});
      }
    };
  }, []);

  return (
    <div className="bg-[#F4F2E7] min-h-screen p-10 flex flex-col items-center justify-between relative overflow-hidden ">
      <section className="w-full  mx-auto mb-4 ">
        <div className="flex justify-end md:hidden ">
          <img src={logo} alt="Logo" className="h-[40px] w-auto" />
        </div>
        <div className="border-b border-black/10  my-6 md:hidden block"></div>
        <Testimonials />
        <div className="border-b border-black/10 mt-4 md:block hidden pb-6"></div>
      </section>
      {/* Section 1: Testimonials */}

      {/* Section 2: Logo and Small Characters */}
      <section className="relative w-full max-w-3xl mx-auto flex flex-col items-center">
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
      </section>

      {/* Section 3: CTA */}
      <section className="w-full mx-auto z-0 lg:z-30">
        <Cta />
      </section>

      {/* Big videos positioned relative to the main div */}
      <video
        ref={bigBlueRef}
        src={bigBlue}
        autoPlay
        muted
        className="absolute h-auto"
        style={{
          width: "110%", // Adjust as needed
          bottom: "0",
          right: "0",
          zIndex: 25
        }}
      />
      <video
        ref={bigYellowRef}
        src={bigYellow}
        autoPlay
        muted
        className="absolute h-auto"
        style={{
          width: "55%", // Adjust as needed
          bottom: "0",
          left: "-10%",
          zIndex: 25
        }}
      />
    </div>
  );
};

export default Hero;
