import React from "react";
import CreateProductDetail from "./createProductDetail";
import ProductDetailData from "./ProductDetailData";

const ProductDetailSlide = () => {
  return (
    <>
      <CreateProductDetail
        itemData={ProductDetailData}
        title="Recommended for you"
        badge="Offer"
        badgeColor="yellow"
      />
    </>
  );
};

export default ProductDetailSlide;
