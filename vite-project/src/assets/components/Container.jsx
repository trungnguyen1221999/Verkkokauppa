import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem auto;
  max-width: 90vw;
  @media (max-width: 768px) {
    margin: 0.8rem auto;
  }
`;
