import React from "react";

import NewProductsData from "./data/NewProductsData";
import createHeroBanner from "./funtion/createHeroBanner";

const NewProductsHeroBanner = () => {
  return (
    <>
      {createHeroBanner({
        data: NewProductsData,
        title: "NEW PRODUCTS",
        desc: "Do you suffer from chronic novelty cravings? Browse our selection of new arrivals regularly!",
        btn: "For shopping",
        img: "https://images.ctfassets.net/nggsuamsum0l/3EtOrVnUBHFvog7NFmuFOG/dd24d1fb7904659a4a0ba4a036a496a1/NEW_Saitti_1920x1280.jpg",
        imgFirst: true,
      })}
    </>
  );
};

export default NewProductsHeroBanner;
