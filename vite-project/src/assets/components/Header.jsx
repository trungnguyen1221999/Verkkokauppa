import React from "react";
import Logo from "./logo";
import Container from "./Container";
import ZipStore from "./ZipStore";
import Search from "./Search";
import Login from "./Login";
import Favorite from "./Favorite";
import Cart from "./Cart";
import NavBar from "./NavBar";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header>
      <Container>
        <StyledGiHamburgerMenu />
        <Logo />
        <ZipCodePC />
        <Search />
        <Login />
        <Favorite />
        <Cart />
      </Container>
      <StyledContainerMobile>
        <hr className="divider" />
        <ZipCodeMobile />
      </StyledContainerMobile>
      <Container>
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;

const ZipCodePC = styled(ZipStore)`
  @media (max-width: 768px) {
    /* ẩn trên mobile */
    display: none;
  }
`;

const ZipCodeMobile = styled(ZipStore)`
  justify-content: space-between;
  margin: 0 auto;
  width: 90vw;
  @media (min-width: 769px) {
    /* ẩn trên tablet/desktops */
    display: none;
  }
`;

const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
  @media (min-width: 769px) {
    /* ẩn trên tablet/desktops */
    display: none;
  }
  cursor: pointer;
  font-size: 2.5rem;
  margin-right: 1rem;
  @media (max-width: 400px) {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;

const StyledContainerMobile = styled.div`
  @media (min-width: 769px) {
    /* ẩn trên tablet/desktops */
    display: none;
  }
  display: flex;
  margin: 0 auto;
  max-width: 100vw;
  flex-direction: column !important;
  .divider {
    display: block;
    height: 1px;
    width: 100vw;
    background-color: #ccc; /* hoặc màu bạn muốn */
    border: none; /* bỏ viền mặc định */
  }
`;
