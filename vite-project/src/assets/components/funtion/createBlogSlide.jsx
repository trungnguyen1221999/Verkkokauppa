import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa6";

import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

const createBlogSlide = ({ data, heading, btn, viewAll }) => {
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
    <StyledContainer onMouseLeave={() => setHover(false)}>
      <h3>{heading}</h3>
      <StyledList
        onMouseEnter={() => setHover(true)}
        ref={slideRef}
        onScroll={hideArrow}
      >
        {data.title.map((item, index) => (
          <StyledItem key={index}>
            <img src={data.img[index]} alt="" />
            <h4>{item}</h4>
            <p>{data.des[index]}</p>
            <div className="btn">
              <a href="">{btn}</a>
              <FaArrowRight />
            </div>
          </StyledItem>
        ))}
      </StyledList>
      <div className="view-all">
        <a href="">{viewAll}</a>
        <FaArrowRightLong />
      </div>
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
    </StyledContainer>
  );
};

export default createBlogSlide;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem auto;
  margin-top: 13rem;
  max-width: 90vw;
  h3 {
    font-size: 2rem;
  }
  position: relative;
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
  .view-all {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    width: fit-content;
    padding: 1.2rem 1.5rem;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.cartBg};
    a {
      font-size: 1.2rem;
      color: white;
      font-weight: 600;
    }
    svg {
      color: white;
    }
  }
`;

const StyledList = styled.div`
  display: flex;
  gap: 1.5rem;
  max-width: 90vw;
  overflow-x: auto;
`;
const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  img {
    width: 37rem;
    border-radius: 2rem;
  }
  h4 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.4rem;
  }
  .btn {
    margin-top: auto;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.cartBg};
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;
