import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useRef } from "react";

// component tạo danh sách sản phẩm
const createProductDetail = (itemData, title) => {
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
    <StyledContainer>
      <h3>{title}</h3>
      <div className="itemContainer">
        {itemData.items.map((item, idx) => (
          <StyledItem key={idx}>
            <StyledUpper>
              <img src={itemData.img[idx]} alt={item} />
              <p>Offer</p>
              <FaRegHeart />
            </StyledUpper>
            <StyledLower>
              <h5>{item}</h5>
              <ul>
                {itemData.details[idx].map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
              <div className="price-container">
                <StyledPrice>
                  <p className="price">{itemData.price[idx]}</p>
                  <p className="oldPrice">{itemData.oldPrice[idx]}</p>
                </StyledPrice>
                <BsBasketFill />
              </div>
            </StyledLower>
          </StyledItem>
        ))}
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

export default createProductDetail;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem auto;
  gap: 1.5rem;
  max-width: 90vw;
  .itemContainer {
    display: flex;
    gap: 1.2rem;
  }
`;
// styled-components
const StyledItem = styled.div`
  display: inline-flex;
  padding: 1rem;
  flex-direction: column;
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  h5 {
    font-size: 1.35rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
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
    height: 18rem;
    width: auto;
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    &:hover {
      background-color: #fff;
      cursor: pointer;
    }
  }
`;

const StyledPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  .price {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
  .oldPrice {
    font-size: 1.2rem;
    text-decoration: line-through;
  }
`;

const StyledLower = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  svg {
    color: white;
    background-color: ${({ theme }) => theme.colors.cartBg};
    padding: 0.6rem;
    border-radius: 50%;
    font-size: 2.5rem;
    scale: 1.1;
    fill-opacity: 0.8;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .price-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  ul {
    list-style-type: disc;
    list-style-position: inside;
  }
  li {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;
