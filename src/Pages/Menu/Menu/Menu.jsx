import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Cover/Cover";
import Navbar from "../../../Components/Navbar/Navbar";
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import Footer from "../../../Components/Footer/Footer";

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

          {/* offered section  */}
          <MenuCategory items={offeredItem} />

          {/* dessert section  */}
          <MenuCategory
            items={dessertItem}
            title={"DESSERTS"}
            subTitle={
              '"Delight in our heavenly desserts, crafted with love and the finest ingredients. From creamy cakes to rich pastries, every bite is a sweet escape to bliss!"'
            }
            img={dessertImg}
          />
          {/* pizza section  */}
          <MenuCategory
            items={pizzaItem}
            title={"PIZZA"}
            subTitle={
              '"Savor the perfect pizza, baked to perfection with a crispy crust, rich tomato sauce, and fresh toppings. Every slice is a mouthwatering blend of flavor and happiness!"'
            }
            img={pizzaImg}
          />
          {/* salad section  */}
          <MenuCategory
            items={saladItem}
            title={"SALAD"}
            subTitle={
              '"Experience freshness in every bite with our vibrant salads, crafted from crisp greens, juicy vegetables, and flavorful dressings. A healthy and delicious choice for any meal!"'
            }
            img={saladImg}
          />
          {/* soup section  */}
          <MenuCategory
            items={soupItem}
            title={"SOUP"}
            subTitle={
              '"Warm your soul with our comforting soups, made from fresh ingredients and rich flavors. From creamy blends to hearty broths, each bowl is a hug in every sip!"'
            }
            img={soupImg}
          />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Menu;
