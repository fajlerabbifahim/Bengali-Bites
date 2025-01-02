import React from "react";
import Cover from "../../../../Components/Cover/Cover";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import MenuItemCard from "../../../../Components/MenuItemCard/MenuItemCard";

function MenuCategory({ items, title, subTitle, img }) {
  return (
    <div>
      {title && <Cover img={img} subTitle={subTitle} title={title} />}

      <section className="my-10">
        <SectionTitle subTitle={"Don't miss"} title={"TODAY'S OFFER"} />

        {/* section card  */}
        <section className=" grid grid-cols-1 md:grid-cols-2">
          {items.map((item) => (
            <MenuItemCard key={item._id} item={item} />
          ))}
        </section>
      </section>
    </div>
  );
}

export default MenuCategory;
