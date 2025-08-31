import React from "react";
import CreateSlideFunction from "./createSlideFunction";
import PopularServicesData from "./data/PopularServicesData";

const PopularServicesSlide = () => {
  return (
    <>
      {CreateSlideFunction({
        itemData: PopularServicesData,
        title: "Most popular services",
      })}
    </>
  );
};

export default PopularServicesSlide;
