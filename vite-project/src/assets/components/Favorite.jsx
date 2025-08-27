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
  font-size: 3.5rem;
  padding: 0.8rem;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;
