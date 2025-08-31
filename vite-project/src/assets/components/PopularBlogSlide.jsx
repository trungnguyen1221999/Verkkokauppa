import React from "react";
import createBlogSlide from "./funtion/createBlogSlide";
import PopularBlogData from "./data/PopularBlogData";

const PopularBlogSlide = () => {
  return (
    <>
      {createBlogSlide({
        heading: "Most popular articles and buying guides",
        data: PopularBlogData,
        btn: "Read more",
        viewAll: "See all articles and guides",
      })}
    </>
  );
};

export default PopularBlogSlide;
