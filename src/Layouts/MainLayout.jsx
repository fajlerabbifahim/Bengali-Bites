import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Home from "../Pages/Home/Home/Home";

function MainLayout() {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto">
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
