import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

const Error404 = () => {
  return (
    <OverLay>
      <StyledContainer>
        <StyledFont>
          <Link to="/etusivu">Front page</Link> / Page not found
        </StyledFont>

        <Styled404Container>
          <div className="heading">
            <h3>
              The page was not found, but here are our best-selling novelties...
            </h3>
          </div>
          <div className="error">404</div>
          <div className="desc-container">
            <div className="desc">
              <h4>Sorry, the page you were looking for couldn't be found</h4>
              <p>
                If you used a bookmark or a link outside of verkkokauppa.com,
                please check the address of the page or use the search function.
              </p>
              <label>
                <input type="text" placeholder="Enter a search term" />
                <IoIosSearch />
              </label>
            </div>
          </div>
        </Styled404Container>
      </StyledContainer>
    </OverLay>
  );
};

export default Error404;

const StyledFont = styled.div`
  text-align: left;
  font-size: 1.4rem;
  @media (max-width: 400px) {
    padding-top: 1rem;
    padding-left: 2rem;
    transform: translateY(1rem);
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  a {
    opacity: 0.7;
  }
`;

const Styled404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #d3d3d3;
  @media (max-width: 400px) {
    border: none;
  }

  .heading {
    padding: 1rem;
    width: 100%;

    text-align: center;
    background-color: #fff;
    h3 {
      font-size: 3rem;
      @media (max-width: 400px) {
        font-size: 2rem;
        text-align: center;
      }
    }
  }

  .error {
    background-color: #4e4e4e;
    width: 100%;
    text-align: center;
    padding: 1rem;
    color: #fff;
    font-size: 3rem;
  }

  .desc-container {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .desc {
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;

    @media (max-width: 400px) {
      max-width: 100%;
    }

    p {
      font-size: 1.5rem;
    }

    label {
      width: 60rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
      background-color: #d4d4d4;
      border-radius: 2rem;
      transition: background-color 0.3s ease;

      &:focus-within {
        background-color: #fff;
      }

      svg {
        color: ${({ theme }) => theme.colors.cartBg};
        cursor: pointer;
      }

      input {
        font-size: 1.4rem;
        width: 100%;
        border: none;
        background: transparent;

        &:focus {
          outline: none;
        }
      }

      @media (max-width: 400px) {
        width: 90vw;
      }
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;
  margin: 1.5rem auto;
  max-width: 90vw;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin: 0;
    max-width: 100%; /* chiếm full width */
    padding: 0;
  }
`;

const OverLay = styled.div`
  width: 100%;

  background-color: #d3d3d3;

  @media (max-width: 400px) {
    height: 50vh;
    transform: translateY(0);
  }
`;
