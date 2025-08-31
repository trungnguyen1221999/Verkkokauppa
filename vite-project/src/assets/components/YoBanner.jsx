import React from "react";
import createHeroBanner from "./funtion/createHeroBanner";
import HeroBanner4Data from "./data/HeroBanner4Data";

const YoBanner = () => {
  return (
    <>
      {createHeroBanner({
        data: HeroBanner4Data,
        title: "Tips for success in YO writing",
        img: "https://images.ctfassets.net/nggsuamsum0l/5NmqJC6KzemR4LBMtJLpKD/eea814599e7981945a19e7aab22edc9b/YO-kirjoitukset_harmaa_vihrea1920x1280.jpg",
        btn: "For shopping",
        imageFirst: true,
        desc: "Although you won't find glutes from us, our selection includes snacks, refreshments, lunch boxes, wired headphones, mice, and more for both studying and writing YO.",
      })}
    </>
  );
};

export default YoBanner;
