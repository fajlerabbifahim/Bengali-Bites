import React from "react";
import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";
import PopularCategory from "../PopularCategory/PopularCategory";
import Callus from "../Callus/Callus";
import RecommendFood from "../RecomendFood/RecommendFood";
import Featured from "../Featured/Featured";

function Home() {
  return (
    <div>
      <section>
        <Banner />
        <CategorySlider />
        <PopularCategory />
        <Callus />
        <RecommendFood />
        <Featured />
      </section>
    </div>
  );
}

export default Home;
