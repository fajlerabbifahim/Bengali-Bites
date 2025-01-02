import React from "react";
import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";
import PopularCategory from "../PopularCategory/PopularCategory";
import Callus from "../Callus/Callus";
import RecommendFood from "../RecomendFood/RecommendFood";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Bengali Bites Home</title>
      </Helmet>
      <section>
        <Banner />
        <CategorySlider />
        <PopularCategory />
        <Callus />
        <RecommendFood />
        <Featured />
        <Testimonials />
      </section>
    </div>
  );
}

export default Home;
