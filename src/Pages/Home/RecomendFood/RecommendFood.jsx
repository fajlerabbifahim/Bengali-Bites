import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";

function RecommendFood() {
  const [recommendedFood, setRecommendFood] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/menu").then((res) => {
      const recommendFoods = res.data;
      setRecommendFood(recommendFoods);
    });
  }, []);

  return (
    <div className="my-20">
      {/* title section  */}
      <section>
        <SectionTitle subTitle={"Should Try"} title={"CHEF RECOMMENDS"} />
      </section>

      {/* recommended food card  */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  w-11/12">
        {recommendedFood
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((item) => (
            <div key={item._id} className="card bg-base-100 max-w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={item.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions">
                  <button className="btn btn-outline  mt-4">Add to Card</button>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default RecommendFood;
