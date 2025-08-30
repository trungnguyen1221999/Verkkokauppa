import React from "react";
import createHeroBanner from "./funtion/createHeroBanner";
import HeroBanner3Data from "./data/HeroBanner3Data";

const Banner3 = () => {
  return (
    <>
      {createHeroBanner({
        data: HeroBanner3Data,
        title: "Over 100 products with free One Hour delivery",
        desc: "One Hour delivery Our incredibly fast deliveries are also free for certain products in our selection with the code FREE-DElivery. You can also get other products suitable for Wolt delivery for the same order free of shipping costs. See the new free shipping products below! Discover",
        btn: "Discover",
        img: "https://images.ctfassets.net/nggsuamsum0l/6U6Cpm8NxmEyJU7AAZVsFG/105058aff3d30ae556301563bf995bf8/Q1-4_20250018_Ilmaisen-toimituksen-tuotteet_Saitti_1920x1280.jpg",
        imageFirst: false,
      })}
    </>
  );
};

export default Banner3;
