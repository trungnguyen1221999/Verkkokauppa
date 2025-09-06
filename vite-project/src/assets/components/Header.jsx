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
import NavBarMobile from "./NavBarMobile";
import { IoMdClose } from "react-icons/io";
import { useMenu } from "./MenuContext";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { isOpen, openMenu, closeMenu } = useMenu();

  return (
    <header>
      <Container>
        <StyledGiHamburgerMenu onClick={openMenu} />
        {isOpen && (
          <div>
            <StyledIoMdClose onClick={closeMenu} />
            <NavLink to="/etusivu">
              <StyledMobie src="/images/logo.PNG" alt="" />
            </NavLink>
          </div>
        )}
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
      <NavBarMobile />
    </header>
  );
};

export default Header;

const ZipCodePC = styled(ZipStore)`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ZipCodeMobile = styled(ZipStore)`
  justify-content: space-between;
  margin: 0 auto;
  width: 90vw;
  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
  @media (min-width: 769px) {
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
    display: none;
  }
  display: flex;
  margin: 0 auto;
  max-width: 100vw;
  flex-direction: column;
  .divider {
    display: block;
    height: 1px;
    width: 100vw;
    background-color: #ccc;
    border: none;
  }
`;

const StyledIoMdClose = styled(IoMdClose)`
  @media (min-width: 769px) {
    display: none;
  }
  cursor: pointer;
  font-size: 2.5rem;
  margin-right: 1rem;
  position: fixed;
  top: 1.5rem;
  left: 1rem;
  @media (max-width: 400px) {
    font-size: 2rem;
  }
  z-index: 30;
`;

const StyledMobie = styled.img`
  position: fixed;
  top: 1rem;
  left: 5rem;
  @media (min-width: 769px) {
    display: none;
  }
  width: 4rem;
  @media (max-width: 400px) {
    width: 3rem;
  }
  z-index: 30;
`;
