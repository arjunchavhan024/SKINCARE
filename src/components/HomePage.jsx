import React from "react";
import "../styles/HomePage.css";
import Navbar from "./Navbar";
import HeroTop from "./HeroTop";
import HeroBottom from "./HeroBottom";
import ExperiencePage from "./ExperincePage";
import WhyOurProductPage from "./WhyOurProductPage";
import BestSellingProductPage from "./BestSellingProductPage";
import ShopNowPage from "./ShopNowPage";
import FeelBeautifulPage from "./FeelBeautifulPage";
import ProductImagesPage from "./ProductImagesPage";
import FrequentlyAskQuestionPage from "./FrequentllyAskQuestionPage";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="frist">
      <Navbar />
      <HeroTop />
      <HeroBottom />
      <ExperiencePage />
      <WhyOurProductPage />
      <BestSellingProductPage />
      <ShopNowPage />
      <FeelBeautifulPage />
      <ProductImagesPage />
      <FrequentlyAskQuestionPage />
      <Footer />
    </div>
  );
};

export default HomePage;
