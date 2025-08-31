import React from "react";
import createBlogSlide from "./funtion/createBlogSlide";
import LatestBlogsData from "./data/LatestBlogsData";

const LatestBlogsSlide = () => {
  return (
    <>
      {createBlogSlide({
        data: LatestBlogsData,
        heading: "Latest articles",
        btn: "Read more",
      })}
    </>
  );
};

export default LatestBlogsSlide;
