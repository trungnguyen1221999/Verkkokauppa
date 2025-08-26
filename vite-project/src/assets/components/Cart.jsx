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
  scale: 2.5;
  padding: 0.4rem;
  border-radius: 50%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAlt};
  }
`;
