import React from "react";
import Logo from "./logo";
import Container from "./Container";
import ZipStore from "./ZipStore";
import Search from "./Search";
import Login from "./Login";
import Favorite from "./Favorite";
import Cart from "./Cart";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <ZipStore />
        <Search />
        <Login />
        <Favorite />
        <Cart />
      </Container>
      <Container>
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
