import React from "react";

function MenuItemCard({ item }) {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex flex-col sm:flex-row items-center max-w-full sm:max-w-md h-auto sm:h-24 bg-white shadow-lg rounded-lg p-4 my-2 relative mx-auto">
      <img
        src={image}
        alt="Product"
        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-r-full rounded-b-full mb-4 sm:mb-0"
      />

      <div className="text-center sm:text-left sm:ml-4">
        <h2 className="text-base sm:text-lg font-semibold uppercase">{name}</h2>
        <p className="text-xs sm:text-sm text-gray-600">{recipe}</p>
      </div>

      <span className="absolute sm:static top-2 right-2 bg-green-500 text-white text-xs sm:text-sm font-bold px-2 py-1 rounded-r-full rounded-b-full ">
        ${price}
      </span>
    </div>
  );
}

export default MenuItemCard;
