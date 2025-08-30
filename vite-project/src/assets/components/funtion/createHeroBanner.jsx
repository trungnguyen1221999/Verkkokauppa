import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";

import Container from "../Container";
import createItem from "./../createItemFunction";

const createHeroBanner = ({ data, title, desc, btn, img, imageFirst }) => {
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
        <StyledItemList>
          {data.items.map((item, index) => createItem(data, index))}
        </StyledItemList>
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
`;
