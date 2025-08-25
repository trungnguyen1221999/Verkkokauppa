import React from "react";
import Logo from "./logo";
import Container from "./Container";
import ZipStore from "./ZipStore";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <ZipStore />
        <Search />
      </Container>
    </header>
  );
};

export default Header;
