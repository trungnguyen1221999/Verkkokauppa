import React from "react";
import createTwoSection from "./funtion/createTwoSection";
import TwoSectionData4 from "./data/TwoSectionData4";
import styled from "styled-components";

const TwoSection4 = () => {
  return (
    <StyledContainer>
      {createTwoSection({
        data: TwoSectionData4,
      })}
    </StyledContainer>
  );
};

export default TwoSection4;
const StyledContainer = styled.div`
  margin: 2rem 0;
`;
