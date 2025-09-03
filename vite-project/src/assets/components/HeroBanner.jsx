import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";
import Container from "./Container";
import HeroBannerData from "./HeroBannerData";
import createItem from "./createItemFunction";

const HeroBanner = () => {
  return (
    <StyledWrap>
      <StyledContainer>
        <StyleLeft>
          <h2>GET MACBOOK AIR M4 AT A SPECIAL PRICE</h2>
          <p>
            MackBook Air M4 is built to last. Offer prices starting from 899€ -
            act quickly and pick up your own!
          </p>
          <div className="btn">
            <button>Explore</button>
            <FaArrowRight />
          </div>
        </StyleLeft>
        <StyledImg
          src="https://images.ctfassets.net/nggsuamsum0l/4f8K2FgRpJSU4M8lOnuXug/db09c45460d4005aecd6cf25dcdc1ed7/Apple_MacBook_Air_BTS_20250379_teaser_1920x1280_1_.jpg"
          alt=""
        />
      </StyledContainer>
      <StyledItemList>
        {HeroBannerData.items.map((item, index) =>
          createItem(HeroBannerData, index)
        )}
      </StyledItemList>
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
    font-size: 4.5rem;
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
    opacity: 0.95;
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
  @media (max-width: 768px) {
    gap: 1rem;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    width: 90vw;
    padding: 0;
    margin: 0;
  }
`;

const StyledImg = styled.img`
  width: 100rem;
  border-radius: 2rem;
`;

const StyledWrap = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 1rem 0;
  position: relative;
  @media (max-width: 768px) {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

const StyledItemList = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1.5rem auto;
  max-width: 90vw;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(80%);
  @media (max-width: 768px) {
    position: relative;
    transform: translateY(0%);
    overflow-x: auto;
    max-width: 90vw;
    padding-bottom: 1.5rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem auto;
  max-width: 90vw;
  @media (max-width: 768px) {
    margin: 0 auto;
    flex-direction: column-reverse;
    img {
      width: 100vw;
      margin-bottom: 1.5rem;
      border-radius: 0;
      padding: 0;
    }
  }
`;
