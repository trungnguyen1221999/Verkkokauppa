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
import TwoSection from "../components/TwoSection";
import Banner3 from "../components/Banner3";
import VerkkisBestSelling from "../components/VerkkisBestSelling";
import NewProductsHeroBanner from "../components/NewProductsHeroBanner";
import PopularBlogSlide from "../components/PopularBlogSlide";
import MightLike from "../components/MightLike";
import TwoSection3 from "../components/TwoSection3";
import UsedProduct from "../components/UsedProduct";
import DeliveryHeroBAnner from "../components/DeliveryHeroBAnner";
import PopularServicesSlide from "../components/PopularServicesSlide";
import YoBanner from "../components/YoBanner";
import MightLikeSlide2 from "../components/MightLikeSlide2";
import TwoSection4 from "../components/TwoSection4";

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
      <TwoSection />
      <Banner3 />
      <VerkkisBestSelling />
      <NewProductsHeroBanner />
      <PopularBlogSlide />
      <MightLike />
      <TwoSection3 />
      <UsedProduct />
      <DeliveryHeroBAnner />
      <PopularServicesSlide />
      <YoBanner />
      <MightLikeSlide2 />
      <TwoSection4 />
    </>
  );
};

export default Home;
