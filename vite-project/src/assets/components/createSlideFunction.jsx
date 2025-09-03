import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

function CreateSlideFunction({ itemData, title, btn }) {
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
      <div className="header">
        <h3>{title}</h3>
        {btn && (
          <div className="btn">
            <a href="">{btn}</a>
            <FaArrowRightLong />
          </div>
        )}
      </div>

      <StyledSlide
        className="slide"
        onMouseEnter={() => setHover(true)}
        ref={slideRef}
        onScroll={hideArrow}
      >
        {(itemData && Array.isArray(itemData.img) ? itemData.img : []).map(
          (item, index) => (
            <div className="item" key={index}>
              <a>
                <div>
                  <img src={item} alt={itemData?.items?.[index] ?? ""} />
                  <p>{itemData?.items?.[index] ?? ""}</p>
                </div>
              </a>
            </div>
          )
        )}
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
}

export default CreateSlideFunction;

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
  max-width: 90vw;
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
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    h3 {
      padding: 1rem 1.5rem;
      margin-bottom: 0;
      font-size: 1.6rem;
    }
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: fit-content;
      padding: 1rem 1.5rem;
      border-radius: 2rem;
      background-color: black;
      gap: 1rem;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
      a {
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
      }
      svg {
        font-size: 1.2rem;
        color: white;
      }
    }
    @media (max-width: 768px) {
      .btn {
        padding: 0.8rem 1rem;
      }
    }
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

  .item {
    p {
      flex-wrap: wrap;
      max-width: 12rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  @media (max-width: 768px) {
    .item {
      p {
        font-size: 1.3rem;
      }
      img {
        padding: 1rem;
      }
    }
  }

  max-width: 90vw;
  margin: 1.5rem auto;
`;
