import React from "react";
import Banner from "../Banner/Banner";
import CategorySlider from "../CategorySlider/CategorySlider";
import PopularCategory from "../PopularCategory/PopularCategory";

function Home() {
  return (
    <div>
      <section>
        <Banner />
        <CategorySlider />
        <PopularCategory />
      </section>
    </div>
  );
}

export default Home;
