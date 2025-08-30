import React from "react";
import createHeroBanner from "./funtion/createHeroBanner";
import TVData from "./data/TVData";

const TVBanner = () => {
  return (
    <>
      {createHeroBanner({
        data: TVData,
        title: "0$ HOME DELIVERY",
        desc: "Take advantage of the promo code, get free home delivery and order a new HD TV super fast.",
        btn: "For Shopping",
        img: "https://images.ctfassets.net/nggsuamsum0l/50eAnBMbUAZUtDk1Axdj46/3d27e9e5b3108d13bffbd1d9f0dc9658/Q2_20250288_Nopeus_HD_READY_Saitti_1920x1280_1_.jpg",
        imageFirst: true,
      })}
    </>
  );
};

export default TVBanner;
