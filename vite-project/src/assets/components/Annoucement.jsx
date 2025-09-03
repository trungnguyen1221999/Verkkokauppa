import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import styled from "styled-components";

const Annoucement = () => {
  return (
    <StyledAnnoucement>
      <a>Post, tag, redeem – we reward viral TikTok videos. Explore</a>
      <FaArrowRightLong />
    </StyledAnnoucement>
  );
};

export default Annoucement;

const StyledAnnoucement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  padding: 0.8rem 1rem;
  font-weight: 600;
  font-size: 1.25rem;
  width: 100%;

  a {
    font-size: 1.7rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  svg {
    font-size: 1.7rem;
  }
  @media (max-width: 768px) {
    a {
      text-align: center;
    }
    padding: 1rem 2rem;
  }
  @media (max-width: 400px) {
    margin: 0 !important;
  }
`;
