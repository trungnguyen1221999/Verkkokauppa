import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";
import Container from "./Container";
import Item from "./Item";

const HeroBanner = () => {
  return (
    <StyledWrap>
      <Container>
        <StyleLeft>
          <h2>GET MACBOOK AIR M4 AT A SPECIAL PRICE</h2>
          <p>
            MackBook Air M4 is built to last. Offer prices starting from 899€ -
            act quickly and pick up your own!
          </p>
          <div className="btn">
            <button>Explore</button>
            <FaArrowRight />{" "}
          </div>
        </StyleLeft>
        <StyledImg
          src="https://images.ctfassets.net/nggsuamsum0l/4f8K2FgRpJSU4M8lOnuXug/db09c45460d4005aecd6cf25dcdc1ed7/Apple_MacBook_Air_BTS_20250379_teaser_1920x1280_1_.jpg"
          alt=""
        />
      </Container>
      <div>
        <Item />
      </div>
    </StyledWrap>
  );
};

export default HeroBanner;

const StyleLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  h2 {
    font-size: 5rem;
    font-style: italic;
  }
  .btn {
    border-radius: 2rem;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.text};
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    cursor: pointer;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
    button {
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
    }
    svg {
      color: white;
    }
  }
  margin-right: 5rem;
`;

const StyledImg = styled.img`
  width: 100rem;
  border-radius: 2rem;
`;

const StyledWrap = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 1rem 0;
`;
