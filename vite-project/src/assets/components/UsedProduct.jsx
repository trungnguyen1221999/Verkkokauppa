import React from "react";
import CreateSlideFunction from "./createSlideFunction";
import UsedProductData from "./data/UsedProductData";

const UsedProduct = () => {
  return (
    <>
      {CreateSlideFunction({
        itemData: UsedProductData,
        title: "Browse used products by product area",
      })}
    </>
  );
};

export default UsedProduct;
