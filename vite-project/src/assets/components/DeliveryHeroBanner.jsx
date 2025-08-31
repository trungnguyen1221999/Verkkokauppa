import React from "react";
import createHeroBanner from "./funtion/createHeroBanner";

const DeliveryHeroBAnner = () => {
  return (
    <>
      {createHeroBanner({
        title: "Delivery even within a day",
        desc: "There's no shame in being fast – most of our orders are delivered the next business day after ordering!",
        img: "https://images.ctfassets.net/nggsuamsum0l/8ZnnPz2B7Y6Qb8qBPckV8/bcbc181476cf6d18e9b04d796451ae18/Nopeus_Toimitus_paivassa1920x1280.jpg",
        btn: "Read more",
        imageFirst: false,
      })}
    </>
  );
};

export default DeliveryHeroBAnner;
