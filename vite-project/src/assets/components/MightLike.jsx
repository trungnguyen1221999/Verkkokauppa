import React from "react";
import CreateProductDetail from "./createProductDetail";
import MightLikeData from "./data/MightLikeData";
import styled from "styled-components";

const MightLike = () => {
  return (
    <StyledContainer>
      {CreateProductDetail({
        itemData: MightLikeData,
        title: "You might like these",
        badge: "Offer",
        badgeColor: "yellow",
      })}
    </StyledContainer>
  );
};

export default MightLike;
const StyledContainer = styled.div`
  margin-top: 5rem;
`;
