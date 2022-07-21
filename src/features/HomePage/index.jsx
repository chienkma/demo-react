import React from "react";
import ProductList from "../ProductList";
import SlideShow from "./components/SlideShow";

function HomePage() {
  return (
    <div>
      <SlideShow />
      <ProductList />
    </div>
  );
}

export default HomePage;
