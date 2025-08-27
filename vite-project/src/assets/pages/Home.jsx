import React from "react";
import Annoucement from "../components/Annoucement";
import Container from "../components/Container";
import SlideTrending from "../components/SlideTrending";

const Home = () => {
  return (
    <>
      <Container>
        <Annoucement />
      </Container>
      <Container>
        <SlideTrending />
      </Container>
    </>
  );
};

export default Home;
