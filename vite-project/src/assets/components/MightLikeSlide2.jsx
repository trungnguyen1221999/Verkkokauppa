import React from "react";
import CreateProductDetail from "./createProductDetail";
import MightLikeData2 from "./data/MightLikeData2";
import CreateSlideFunction from "./createSlideFunction";
import styled from "styled-components";

const MightLikeSlide2 = () => {
  return (
    <StyledContainer>
      {CreateSlideFunction({
        itemData: MightLikeData2,
        title: "You might like these",
        btn: "See all",
      })}
    </StyledContainer>
  );
};

export default MightLikeSlide2;

const StyledContainer = styled.div`
  margin-top: 12rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;
