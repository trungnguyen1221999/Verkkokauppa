import React from "react";
import HeroBannerData from "./HeroBannerData";
import createItem from "./createItemFunction";

const Item = () => {
  return <>{createItem(HeroBannerData, 0)}</>;
};

export default Item;
