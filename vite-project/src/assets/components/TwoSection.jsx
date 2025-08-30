import React from "react";
import createTwoSection from "./funtion/createTwoSection";
import TwoSectionData2 from "./data/TwoSectionData2";

const TwoSection = () => {
  return <>{createTwoSection({ data: TwoSectionData2 })}</>;
};

export default TwoSection;
