import React from "react";
import { BsBasketFill } from "react-icons/bs";
import styled from "styled-components";

const Cart = () => {
  return (
    <div>
      <StyledCart />
    </div>
  );
};

export default Cart;
const StyledCart = styled(BsBasketFill)`
  cursor: pointer;
  font-size: 3.5rem;
  padding: 0.8rem;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;
