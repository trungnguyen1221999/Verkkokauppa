import React from "react";
import NoveltyProductData from "./data/NoveltyProductData";
import CreateProductDetail from "./createProductDetail";
import styled from "styled-components";

const VerkkisBestSelling = () => {
  return (
    <StyledDiv>
      <CreateProductDetail
        itemData={NoveltyProductData}
        title="Verkkis' best-selling new products"
        badge="Novelty"
        badgeColor="#02da86"
      />
    </StyledDiv>
  );
};

export default VerkkisBestSelling;

const StyledDiv = styled.div`
  margin-top: 11rem;
`;
