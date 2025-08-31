import React from "react";
import createBlogSlide from "./createBlogSlide";
import BlogSlideData from "../data/BlogSlideData";
import styled from "styled-components";

const BlogSaleOffSlide = () => {
  return (
    <StyledContainer>
      {createBlogSlide({
        data: BlogSlideData,
        heading: "Get your everyday life in order with up to 50% off",
        btn: "For shopping",
      })}
    </StyledContainer>
  );
};

export default BlogSaleOffSlide;
const StyledContainer = styled.div`
  margin-top: 13rem;
`;
