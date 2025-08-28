import React from "react";
import Annoucement from "../components/Annoucement";
import Container from "../components/Container";
import SlideTrending from "../components/SlideTrending";
import HeroBanner from "../components/HeroBanner";
import ForShopping from "../components/ForShopping";

const Home = () => {
  return (
    <>
      <Container>
        <Annoucement />
      </Container>
      <Container>
        <SlideTrending />
      </Container>
      <HeroBanner />
      <ForShopping />
    </>
  );
};

export default Home;
