import React from "react";

function FoodCard({ items }) {
  const { name, recipe, price, image } = items;
  return (
    <div>
      <div className="card h-[440px]  bg-base-100 w-96 shadow-xl border ">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
