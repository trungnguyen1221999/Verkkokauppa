import React from "react";
import createHeroBanner from "./funtion/createHeroBanner";
import OnlyVerkkoData from "./data/OnlyVerkkoData";

const OnlyVerkko = () => {
  return (
    <>
      {createHeroBanner({
        data: OnlyVerkkoData,
        title: "Only from Verkkokauppa.com",
        imageFirst: false,
        img: "https://images.ctfassets.net/nggsuamsum0l/rE3VevMhHbqetGzCEbIbV/6ca6036419b3f56bfce152718fea68f8/Vain_verkkokaupasta1920x1280.jpg",
        btn: "Discover the products",
        desc: "Explore our selection of our own brands and make unique discoveries that you won't find anywhere else.",
      })}
    </>
  );
};

export default OnlyVerkko;
