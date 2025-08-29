import React from "react";
import createSlideFunction from "./createSlideFunction";
import TrendingNowData from "./TrendingNowData";

const TrendingNow = () => {
  return <>{createSlideFunction(TrendingNowData, "Trending Now")}</>;
};

export default TrendingNow;
