import React from "react";
import Card from "./components/Card";
import CardListSlide from "./components/CardListSlide";
import CardSlide from "./components/CardSlide";
import "./productList.css";

function ProductList() {
  return (
    <div className='wrapper'>
      <div className='block__first'>
        <h1>BST gia đình</h1>
        <div className='product'>
          <div className='product--slide'>
            <CardSlide />
          </div>
          <div className='product--card'>
            <CardListSlide />
          </div>
        </div>
      </div>
      <div className='block__second'>
        <h1>Hàng mới</h1>
        <div className='card--list'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
