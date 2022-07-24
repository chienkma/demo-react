import React from "react";
import ProductList from "../ProductList";
import SlideShow from "./components/SlideShow";
import Social from "./components/Social";
import Subscribe from "./components/Subscribe";
import "./homePage.css";

function HomePage() {
  return (
    <div>
      <SlideShow />
      <ProductList />
      <div className='follow'>
        <Subscribe />
        <Social />
      </div>
    </div>
  );
}

export default HomePage;
