import React from "react";
import Annoucement from "../components/Annoucement";
import Container from "../components/Container";
import SlideTrending from "../components/SlideTrending";
import HeroBanner from "../components/HeroBanner";
import ForShopping from "../components/ForShopping";
import TrendingNow from "../components/TrendingNow";
import ProductDetailSlide from "../components/ProductDetailSlide";
import TVBanner from "../components/TVBanner";
import BlogSaleOffSlide from "../components/funtion/BlogSaleOffSlide";

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

      <TrendingNow />
      <ProductDetailSlide />
      <TVBanner />
      <BlogSaleOffSlide />
    </>
  );
};

export default Home;
