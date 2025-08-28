import React, { useEffect, useState } from "react";
import SliderTrendingData from "./SliderTrendingData";
import styled from "styled-components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useRef } from "react";

const SlideTrending = () => {
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
    <StyledWrap onMouseLeave={() => setHover(false)}>
      <h3>The most trending product areas</h3>
      <StyledSlide
        onMouseEnter={() => setHover(true)}
        ref={slideRef}
        onScroll={hideArrow}
      >
        {SliderTrendingData.img.map((item, index) => (
          <a key={index}>
            <div>
              <img src={item} alt={SliderTrendingData.items[index]} />
              <p>{SliderTrendingData.items[index]}</p>
            </div>
          </a>
        ))}
      </StyledSlide>

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
    </StyledWrap>
  );
};

export default SlideTrending;

const StyledSlide = styled.div`
  display: flex;
  gap: 1.5rem;
  img {
    width: auto;
    height: 10rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    &:hover {
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }
  overflow: auto;
  max-width: calc(100vw - 12rem);
  p {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  a {
    cursor: pointer;
  }
`;

const StyledWrap = styled.div`
  h3 {
    font-size: 1.6rem;
    margin-bottom: 2rem;
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
      &:hover {
        opacity: 0.8;
      }
    }
  }
  max-width: 90vw;
  margin-bottom: 1.5rem;
`;
