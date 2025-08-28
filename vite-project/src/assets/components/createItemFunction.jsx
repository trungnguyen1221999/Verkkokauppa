import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs";
const createItem = (itemData, index) => {
  return (
    <StyledItem key={index}>
      <StyledUpper>
        <img src={itemData.img[index]} alt="" />
        <p>Offer</p>
        <FaRegHeart />
      </StyledUpper>
      <StyledLower>
        <h5>{itemData.items[index]}</h5>
        <div className="price-container">
          <StyledPrice>
            <p className="price">{itemData.price[index]}</p>
            <p className="oldPrice">{itemData.oldPrice[index]}</p>
          </StyledPrice>
          <BsBasketFill />
        </div>
      </StyledLower>
    </StyledItem>
  );
};

export default createItem;
const StyledItem = styled.div`
  display: inline-flex;
  padding: 1rem;
  flex-direction: column;
  background-color: white;
  max-width: 14rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  h5 {
    font-size: 1.2rem;
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
    width: 12rem;
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
`;
