import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import MenuItemCard from "../../../Components/MenuItemCard/MenuItemCard";
import useMenu from "../../../Hooks/useMenu";

function PopularCategory() {
  const [menu] = useMenu();

  const popularItem = menu.filter((item) => item.category === "popular");

  return (
    <div>
      {/* title section */}
      <section>
        <SectionTitle subTitle={"Check it out"} title={"FROM OUR MENU"} />
      </section>
      {/* category card section  */}

      <section className=" grid grid-cols-1 md:grid-cols-2 mb-10 w-11/12 mx-auto">
        {popularItem.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </section>
    </div>
  );
}

export default PopularCategory;
