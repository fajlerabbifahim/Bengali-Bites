import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import axios from "axios";
import MenuItemCard from "../../../Components/MenuItemCard/MenuItemCard";

function PopularCategory() {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    axios.get("menu.json").then((res) => {
      const popularItem = res.data.filter(
        (item) => item.category === "popular"
      );
      setMenu(popularItem);
    });
  }, []);
  console.log(menu);
  return (
    <div>
      {/* title section */}
      <section>
        <SectionTitle subTitle={"Check it out"} title={"FROM OUR MENU"} />
      </section>
      {/* category card section  */}

      <section className=" grid grid-cols-1 md:grid-cols-2">
        {menu.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </section>
    </div>
  );
}

export default PopularCategory;
