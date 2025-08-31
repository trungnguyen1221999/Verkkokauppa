import React from "react";
import createTwoSection from "./funtion/createTwoSection";
import TwoSectionData3 from "./data/TwoSectionData3";

const TwoSection3 = () => {
  return (
    <>
      {createTwoSection({
        data: TwoSectionData3,
      })}
    </>
  );
};

export default TwoSection3;
