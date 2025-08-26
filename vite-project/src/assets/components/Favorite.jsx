import React from "react";
import { FaRegHeart } from "react-icons/fa";
import styled from "styled-components";

const Favorite = () => {
  return (
    <div>
      <StyledHeart />
    </div>
  );
};

export default Favorite;

const StyledHeart = styled(FaRegHeart)`
  cursor: pointer;
  scale: 2.5;
  padding: 0.4rem;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;
