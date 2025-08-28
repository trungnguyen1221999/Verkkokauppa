import React from "react";
import HeroBannerData from "./HeroBannerData";
import { FaRegHeart } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import styled from "styled-components";

const Item = () => {
  return (
    <StyledItem>
      <StyledUpper>
        <img src={HeroBannerData.img[0]} alt="" />
        <p>Offer</p>
        <FaRegHeart />
      </StyledUpper>
      <div>
        <h5>{HeroBannerData.items[0]}</h5>
        <div>
          <p>{HeroBannerData.price[0]}</p>
          <p>{HeroBannerData.oldPrice[0]}</p>
        </div>
        <BsBasketFill />
      </div>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.div`
  display: inline-flex;
  padding: 1rem;
  flex-direction: column;
  background-color: white;
  max-width: 15rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  h5 {
    font-size: 1.3rem;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* số dòng tối đa */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledUpper = styled.div`
  display: inline-block;
  position: relative;
  p {
    font-size: 1rem;
    font-weight: 900;
    padding: 0.5rem;
    background-color: yellow;
    display: inline-block;
    position: absolute;
    top: 0rem;
    left: 0rem;
  }
  svg {
    position: absolute;
    top: 1rem;
    right: 0;
  }
  img {
    width: 13rem;
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    &:hover {
      background-color: #fff;
      cursor: pointer;
    }
  }
`;
