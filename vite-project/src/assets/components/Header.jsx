import React from "react";
import Logo from "./logo";
import Container from "./Container";
import ZipStore from "./ZipStore";

const Header = () => {
  return (
    <header>
      <Container>
        <Logo />
        <ZipStore />
      </Container>
    </header>
  );
};

export default Header;
