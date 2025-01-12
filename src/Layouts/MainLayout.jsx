import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home/Home";

function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          {/* home  section  */}
          <Home />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
