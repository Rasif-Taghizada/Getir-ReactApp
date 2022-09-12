import React from "react";
import Header from "./components/Header.jsx"
import HeroSection from "components/HeroSection.jsx";
import Categories from "components/Categories.jsx";
import Compaigns from "components/Compaigns.jsx";
import Favorites from "components/Favorites.jsx"; 
import MobileApp from "components/MobileApp.jsx";
import Cards from "components/Cards.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header/>
      <HeroSection/>
      <Categories/>
      <Compaigns/>
      <Favorites/>
      <MobileApp/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
