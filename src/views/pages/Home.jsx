import React from "react";
import Carousel from "./Carousel";
import Featured from "./Featured";
import Category from "./Category";
import FeaturedProduct from "./FeaturedProduct";
import Offer from "./Offer";
import RecentProduct from "./RecentProduct";
import Vendor from "./Vendor";


const Home = () => {
  return (
    <>
    
    <Carousel />
      <Featured />
      <Category />
      <FeaturedProduct />
      <Offer />
      <RecentProduct />
      <Vendor />
     
    </>
  );
};

export default Home;
