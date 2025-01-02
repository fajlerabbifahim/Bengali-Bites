import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Cover from "../../Components/Cover/Cover";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import oderCoverImg from "../../assets/shop/banner2.jpg";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Oder() {
  const categories = ["salad", "pizza", "soup", "desserts", "drink"];
  const { itemCategory } = useParams();
  const initialTab = categories.indexOf(itemCategory);
  const [tabIndex, setTabIndex] = useState(initialTab);
  console.log(tabIndex, "tab index ");
  const [menu] = useMenu();
  console.log(menu);
  const drinksItem = menu.filter((drink) => drink.category === "drinks");
  const dessertItem = menu.filter((dessert) => dessert.category === "dessert");
  const pizzaItem = menu.filter((pizza) => pizza.category === "pizza");
  const saladItem = menu.filter((salad) => salad.category === "salad");
  const soupItem = menu.filter((soup) => soup.category === "soup");
  return (
    <>
      <Helmet>
        <title>Bengali Bites Oder</title>
      </Helmet>

      <header className="w-11/12 mx-auto">
        <Navbar />

        {/* cover  */}
        <Cover
          title={"Oder Now"}
          subTitle={"Order Your Favorites with Just a Click!"}
          img={oderCoverImg}
        />
      </header>
      <main className="w-11/12 mx-auto my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          {/* Tab List */}
          <TabList className="flex justify-center space-x-6 border-b-2 border-gray-300 uppercase">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          {/* Tab Panels */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
              {saladItem.map((item) => (
                <FoodCard key={item._id} items={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
              {pizzaItem.map((item) => (
                <FoodCard key={item._id} items={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
              {soupItem.map((item) => (
                <FoodCard key={item._id} items={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
              {dessertItem.map((item) => (
                <FoodCard key={item._id} items={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-3">
              {drinksItem.map((item) => (
                <FoodCard key={item._id} items={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
        ;
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Oder;
