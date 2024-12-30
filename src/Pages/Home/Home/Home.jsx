import React from "react";
import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";
import PopularCategory from "../PopularCategory/PopularCategory";
import Callus from "../Callus/Callus";

function Home() {
  return (
    <div>
      <section>
        <Banner />
        <CategorySlider />
        <PopularCategory />
        <Callus />
      </section>
    </div>
  );
}

export default Home;
