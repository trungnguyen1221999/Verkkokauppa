import React from "react";
import SubscribeData from "./data/SubscribeData";
import { MdOutlineMail } from "react-icons/md";
import styled from "styled-components";

const Subscribe = () => {
  return (
    <StyledContainer>
      <div className="mobile">
        <h2>{SubscribeData.title}</h2>
        <p>{SubscribeData.description}</p>
      </div>
      <form>
        <input type="text" placeholder="Email address" />
        <div>
          <button>{SubscribeData.button}</button>
          <MdOutlineMail />
        </div>
      </form>
    </StyledContainer>
  );
};

export default Subscribe;

const StyledContainer = styled.div`
  max-width: 90vw;
  margin: 1.5rem auto;
  padding: 2rem;
  background-color: #dde9fd;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h2 {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }
  p {
    font-size: 1.7rem;
    margin-bottom: 2rem;
    max-width: 60%;
  }
  form {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
    div {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      background-color: ${({ theme }) => theme.colors.cartBg};
      padding: 1rem 1.5rem;
      border-radius: 2rem;
    }
    button {
      color: white;
      font-size: 1.3rem;
      font-weight: 600;
    }
    svg {
      color: white;
    }
  }
  input {
    width: 30rem;
    background-color: white;
    border: 1px solid ${({ theme }) => theme.colors.cartBg};
    border-radius: 0.4rem;
    padding: 1rem 1.5rem;
  }
  @media (max-width: 768px) {
    display: flex;
    width: 90vw;
    flex-direction: column;
    h2 {
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1.4rem;
      max-width: 100%;
    }
    form {
      flex-direction: column;
      align-items: start;
      margin-bottom: 0;
    }
  }
`;
