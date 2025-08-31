import React from "react";
import CreateProductDetail from "./createProductDetail";
import MightLikeData from "./data/MightLikeData";

const MightLike = () => {
  return (
    <>
      {CreateProductDetail({
        itemData: MightLikeData,
        title: "You might like these",
        badge: "Offer",
        badgeColor: "yellow",
      })}
    </>
  );
};

export default MightLike;
