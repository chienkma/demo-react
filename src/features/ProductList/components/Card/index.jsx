import React from "react";
import PropTypes from "prop-types";
import "./card.css";

function Card() {
  return (
    <div className='card'>
      <div className='card__img'>
        <img src='https://canifa.com/img/486/733/resize/6/t/6ts22s045-pg073-1-thumb.jpg' />
      </div>
      <div className='card__text'>
        <h4 className='card__text--title'>Áo phông nữ kẻ in hình</h4>
        <p className='card__text--price'>201.750 ₫</p>
        <p className='card__text--sale'>269.000 ₫</p>
      </div>
    </div>
  );
}

export default Card;
