import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";

import Container from "../Container";

import React, { useEffect, useState } from "react";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useRef } from "react";
import createItem from "../createItemFunction";
const createHeroBanner = ({ data, title, desc, btn, img, imageFirst }) => {
  const [isHover, setHover] = useState(false);
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const slideRef = useRef(null);

  const hideArrow = () => {
    const el = slideRef.current;
    if (!el) return;
    const scrollPercent = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    if (scrollPercent < 0.01) {
      setVisibleLeft(false);
      setVisibleRight(true);
    } else if (scrollPercent > 0.99) {
      setVisibleLeft(true);
      setVisibleRight(false);
    } else {
      setVisibleLeft(true);
      setVisibleRight(true);
    }
  };

  useEffect(() => {
    hideArrow();
  }, []);
  const handleGoRight = () => {
    slideRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };
  const handleGoLeft = () => {
    slideRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };
  return (
    <>
      <StyledWrap>
        <StyledContainer imageFirst={imageFirst}>
          <StyleLeft>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="btn">
              <button>{btn}</button>
              <FaArrowRight />
            </div>
          </StyleLeft>
          <StyledImg src={img} alt="" />
        </StyledContainer>
        <StyledListDiv onMouseLeave={() => setHover(false)}>
          <StyledItemList
            ref={slideRef}
            onMouseEnter={() => setHover(true)}
            onScroll={hideArrow}
          >
            {(data?.items ?? []).map((item, index) => createItem(data, index))}
          </StyledItemList>
          {isHover && (
            <div className="icon">
              <FaRegArrowAltCircleLeft
                onClick={handleGoLeft}
                style={{ visibility: visibleLeft ? "visible" : "hidden" }}
              />
              <FaRegArrowAltCircleRight
                onClick={handleGoRight}
                style={{ visibility: visibleRight ? "visible" : "hidden" }}
              />
            </div>
          )}
        </StyledListDiv>
      </StyledWrap>
    </>
  );
};

export default createHeroBanner;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem auto;
  max-width: 90vw;
  gap: 5rem;
  flex-direction: ${({ imageFirst }) =>
    imageFirst ? "row-reverse" : "row"}!important;
`;

const StyleLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
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
`;

const StyledItemList = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1.5rem auto;
  max-width: 90vw;
  position: absolute;
  bottom: 0;
  left: 3.5rem;
  right: 0;
  transform: translateY(60%);
  overflow-x: auto;
`;

const StyledListDiv = styled.div`
  position: relative;
  margin: 1.5rem auto;
  max-width: 90vw;
  .icon {
    display: flex;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    justify-content: space-between;

    svg {
      color: ${({ theme }) => theme.colors.cartBg};
      font-size: 2.7rem;
      cursor: pointer;
      background-color: #fff;
      border-radius: 50%;
      scale: 1.2;
      border: 1px solid ${({ theme }) => theme.colors.cartBg};
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
