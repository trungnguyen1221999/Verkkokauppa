import React from "react";
import createBlogSlide from "./createBlogSlide";
import BlogSlideData from "../data/BlogSlideData";

const BlogSaleOffSlide = () => {
  return (
    <>
      {createBlogSlide({
        data: BlogSlideData,
        heading: "Get your everyday life in order with up to 50% off",
        btn: "For shopping",
      })}
    </>
  );
};

export default BlogSaleOffSlide;
