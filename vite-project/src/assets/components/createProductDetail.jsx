import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
import React, { useEffect, useState, useRef } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

// component tạo danh sách sản phẩm
function CreateProductDetail({ itemData, title, badge, badgeColor }) {
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
      <h3>{title}</h3>
      <div
        className="itemContainer"
        onMouseEnter={() => setHover(true)}
        ref={slideRef}
        onScroll={hideArrow}
      >
        {(itemData?.items ?? []).map((item, idx) => (
          <StyledItem key={idx}>
            <StyledUpper badgeColor={badgeColor}>
              <img src={itemData?.img?.[idx] ?? ""} alt={item} />
              <p>{badge}</p>
              <FaRegHeart />
            </StyledUpper>
            <StyledLower>
              <h5>{item}</h5>
              <ul>
                {(itemData?.details?.[idx] ?? []).map((detail, dIdx) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
              <div className="price-container">
                <StyledPrice>
                  <p className="price">{itemData?.price?.[idx] ?? ""}</p>
                  <p className="oldPrice">{itemData?.oldPrice?.[idx] ?? ""}</p>
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
}

export default CreateProductDetail;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem auto;
  gap: 1.5rem;
  max-width: 90vw;
  position: relative;

  .itemContainer {
    display: flex;
    gap: 1.2rem;
    overflow-x: auto; /* chỉ scroll ngang */
    scroll-behavior: smooth;
    padding-bottom: 0.5rem;
  }
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

const StyledItem = styled.div`
  flex: 0 0 28rem; /* width cố định, không co lại */
  height: 42rem; /* height cố định */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h5 {
    font-size: 1.35rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const StyledUpper = styled.div`
  position: relative;

  p {
    font-size: 1rem;
    font-weight: 900;
    padding: 0.5rem;
    background-color: ${({ badgeColor }) => badgeColor};
    position: absolute;
    top: 0;
    left: 0;
  }

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  img {
    height: 18rem;
    width: 100%;
    object-fit: contain;
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
    &:hover {
      background-color: #fff;
      cursor: pointer;
    }
  }
`;

const StyledLower = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;

  ul {
    list-style-type: disc;
    list-style-position: inside;
  }

  li {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }

  .price-container {
    margin-top: auto; /* đẩy xuống đáy */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
    color: white;
    background-color: ${({ theme }) => theme.colors.cartBg};
    padding: 0.6rem;
    border-radius: 50%;
    font-size: 2.2rem;
    scale: 1.3;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

const StyledPrice = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center; /* Đảm bảo căn giữa theo chiều dọc */
  gap: 0.5rem;

  .price {
    font-size: 2.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
    line-height: 1;
    display: flex;
    align-items: center;
  }

  .oldPrice {
    font-size: 1.4rem;
    text-decoration: line-through;
    color: gray;
    white-space: nowrap;
    line-height: 1;
    display: flex;
    align-items: center;
  }
`;
