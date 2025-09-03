import React from "react";
import createBlogSlide from "./funtion/createBlogSlide";
import PopularBlogData from "./data/PopularBlogData";
import styled from "styled-components";

const PopularBlogSlide = () => {
  return (
    <StyledContainer>
      {createBlogSlide({
        heading: "Most popular articles and buying guides",
        data: PopularBlogData,
        btn: "Read more",
        viewAll: "See all articles and guides",
      })}
    </StyledContainer>
  );
};

export default PopularBlogSlide;
const StyledContainer = styled.div`
  margin-top: 13rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
