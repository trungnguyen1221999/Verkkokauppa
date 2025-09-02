import React from "react";
import FooterNavData from "./data/FooterNavData";
import styled from "styled-components";

const FooterNav = () => {
  return (
    <div>
      <StyledContainer>
        <StyledColumn>
          <h3>Customer service</h3>
          <p>
            Our customer service offers answers to frequently asked questions
            and help, guidance and advice for many different situations.
          </p>
          <a href="">Customer Service »</a>
        </StyledColumn>
        {FooterNavData.title.map((title, index) => (
          <StyledColumn key={index}>
            <h3>{title}</h3>
            <ul>
              {FooterNavData.subtitle[index].map((subtitle, subIndex) => (
                <li key={subIndex}>
                  <a>{subtitle}</a>
                </li>
              ))}
            </ul>
          </StyledColumn>
        ))}
      </StyledContainer>
    </div>
  );
};

export default FooterNav;

const StyledContainer = styled.div`
  display: flex;
  max-width: 90vw;
  justify-content: space-between;
  align-items: flex-start;
  margin: 3rem auto;
  h3,
  p,
  a,
  li {
    color: white;
    opacity: 0.85;
  }
`;

const StyledColumn = styled.div`
  max-width: 15vw;
  h3 {
    font-size: 1.6rem;
    opacity: 1;
  }
  display: flex;
  flex-direction: column;
  gap: 2rem;
  p,
  a,
  li {
    font-size: 1.4rem;
  }
  a {
    cursor: pointer;
    width: fit-content;
    &:hover {
      text-decoration: underline;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
