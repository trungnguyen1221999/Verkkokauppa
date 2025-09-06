import React, { useState } from "react";
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

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <Container>
        <StyledGiHamburgerMenu
          onClick={() => setOpenMenu(true)}
          openMenu={openMenu}
        />
        <StyledIoMdClose
          openMenu={openMenu}
          onClick={() => setOpenMenu(false)}
        />
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

      {/* Truyền state xuống NavBarMobile */}
      <NavBarMobile open={openMenu} onClose={() => setOpenMenu(false)} />
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
  display: ${({ openMenu }) => (openMenu ? "none" : "block")};
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
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 1rem;
  height: auto;
  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
  display: ${({ openMenu }) => (openMenu ? "block" : "none")};
  z-index: 30;
`;
