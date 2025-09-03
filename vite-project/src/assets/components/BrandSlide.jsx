import React from "react";
import CreateSlideFunction from "./createSlideFunction";
import BrandSlideData from "./data/BrandSlideData";
import styled from "styled-components";

const BrandSlide = () => {
  return (
    <Container>
      {CreateSlideFunction({
        itemData: BrandSlideData,
        title: "You might be interested in these brands",
      })}
    </Container>
  );
};

export default BrandSlide;
const Container = styled.div`
  margin-top: 12rem;
  img {
    height: 7.1rem;
    width: fit-content;
  }
  .slide {
    gap: 0.2rem;
  }
  img {
    background-color: #fff;
    &:hover {
      background-color: #f0f0f0;
    }
  }
  @media (max-width: 768px) {
    margin-top: 1rem;
    img {
      height: 5rem;
    }
  }
`;
