import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Cover/Cover";
import Navbar from "../../../Components/Navbar/Navbar";
import menuImg from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

function Menu() {
  const [menu] = useMenu();
  const offeredItem = menu.filter((offered) => offered.category === "offered");
  const dessertItem = menu.filter((dessert) => dessert.category === "dessert");
  const pizzaItem = menu.filter((pizza) => pizza.category === "pizza");
  const saladItem = menu.filter((salad) => salad.category === "salad");
  const soupItem = menu.filter((soup) => soup.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bengali Bites Menu</title>
      </Helmet>
      <div className="w-11/12 mx-auto">
        <header>
          <Navbar />
        </header>
        <main>
          <Cover
            img={menuImg}
            title={"Our Menu"}
            subTitle={"Would you like to try a dish?"}
          />

          {/* today's offer section  */}
          <section>
            <SectionTitle subTitle={"Don't miss"} title={"TODAY'S OFFER"} />
          </section>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default Menu;
