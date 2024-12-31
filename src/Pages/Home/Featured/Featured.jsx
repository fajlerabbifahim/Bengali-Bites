import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";

function Featured() {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImage})` }}
      className="bg-cover bg-center relative py-20 text-white"
    >
      {/* Black overlay with backdrop filter */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm pointer-events-none"></div>

      {/* Title section */}
      <div className="relative z-10 text-center mb-10">
        <SectionTitle subTitle={"Check it out"} title={"FROM OUR MENU"} />
      </div>

      {/* Featured content */}
      <section className="relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center w-10/12 mx-auto gap-10">
          {/* Image Section */}
          <div className="md:w-1/3">
            <img
              className="w-full rounded-lg shadow-lg"
              src={featuredImage}
              alt="Featured Dish"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 text-white">
            <p className="text-sm mb-2">30.12.2024</p>
            <h3 className="text-xl uppercase font-bold mb-4">
              Where I get some?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our food section showcases a diverse range of dishes designed to
              satisfy your cravings. Each category represents a unique flavor
              profile, offering something for everyone.
            </p>
            <button className="btn btn-outline text-white mt-4 ">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;
