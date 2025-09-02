import React from "react";
import FooterTimeSlide from "./FooterTimeSlide";
import styled from "styled-components";
import FooterTimeColumn from "./data/FooterTimeColumn";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <StyledContainer>
      <FooterTimeSlide />
      <FooterTimeColumn />
      <FooterNav />
      <StyledFinal>© 1992–2025 Verkkokauppa.com Plc</StyledFinal>
    </StyledContainer>
  );
};

export default Footer;

const StyledContainer = styled.footer`
  width: 100vw;
  background-color: #131313ea;
`;

const StyledFinal = styled.div`
  color: white;
  background-color: black;
  padding: 2rem 0;
  text-align: center;
  font-size: 1.5rem;
  opacity: 0.85;
`;
