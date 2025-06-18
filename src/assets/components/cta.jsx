import React from "react";
import CustomButton from "./customButton";
import QuestionIcon from "../images/question.svg"; // Assuming SVG is imported as a React component
import PlayIcon from "../images/play.svg";
import DownloadIcon from "../images/download.svg";
import PortalLogo from "../images/portla_logo.svg";

const Cta = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 z-30">
      <div className="flex items-center gap-2">
        <img src={QuestionIcon} alt="Question" className="w-6 h-6" />
        <span>Learn more</span>
      </div>
      <div className="flex items-center gap-4">
        <CustomButton
          icon={<img src={PlayIcon} alt="Play" className="w-6 h-6" />}
          text="Watch the Trailer"
          hasBorder={true}
          bgColor="bg-transparent"
        />
        <CustomButton
          icon={<img src={DownloadIcon} alt="Download" className="w-6 h-6" />}
          text="Download  on the App Store"
          hasBorder={false}
          bgColor="bg-white"
        />
      </div>
      <img src={PortalLogo} alt="Portal Logo" className="w-32 h-8" />
    </div>
  );
};

export default Cta;
