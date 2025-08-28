import React from "react";
import Container from "./Container";
import styled from "styled-components";
import ForShoppingData from "./ForShoppingData";
import { FaArrowRightLong } from "react-icons/fa6";

const ForShopping = () => {
  return (
    <StyledContainer>
      {ForShoppingData.title.map((title, index) => (
        <StyledItem key={index}>
          <div className="item">
            <h3>{title}</h3>
            <p>{ForShoppingData.desc[index]}</p>
            <div className="btn">
              <button>For Shopping</button>
              <FaArrowRightLong />
            </div>
          </div>
          <img src={ForShoppingData.img[index]} alt={title} />
        </StyledItem>
      ))}
    </StyledContainer>
  );
};

export default ForShopping;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5rem;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  margin-top: 22rem;
  max-width: 90vw;
`;

const StyledItem = styled.div`
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
  }
  display: flex;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  overflow: hidden;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  .item {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
  img {
    width: 50%;
  }
  h3 {
    font-weight: 900;
    font-size: 2rem;
  }
  p {
    font-size: 1.4rem;
  }
  .btn {
    display: flex;
    width: fit-content;
    align-items: center;
    gap: 0.5rem;
    background-color: black;
    padding: 0.8rem 1.6rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
    button {
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
    }
    svg {
      color: white;
      font-size: 1.25rem;
    }
  }
`;
