import React from "react";
import CardList from "./components/CardList";
import CardSlide from "./components/CardSlide";
import "./style.css";

function ProductList() {
  return (
    <div className='wrapper'>
      <h1>BST gia đình</h1>
      <div className='product'>
        <div className='product--slide'>
          <CardSlide />
        </div>
        <div className='product--card'>
          <CardList />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
