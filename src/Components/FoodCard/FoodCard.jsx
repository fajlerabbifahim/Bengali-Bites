import React from "react";

function FoodCard({ items }) {
  const { name, recipe, price, image } = items;
  return (
    <div>
      <div className="card h-[440px]  bg-base-100 w-96 shadow-xl border ">
        <figure className="px-10 pt-10 relative">
          <img src={image} alt="Shoes" className="rounded-xl" />
          <p className="bg-black px-1 font-semibold rounded-sm text-white absolute right-7 top-7">
            $ {price}
          </p>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn btn-outline  mt-4">Add to Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
