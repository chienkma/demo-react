import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function CardSlide() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>
        <img src='https://media.canifa.com/Simiconnector/list_image_tablet_second1651737068.png' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://media.canifa.com/Simiconnector/list_image_tablet1651737068.png' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://media.canifa.com/Simiconnector/list_image_tablet_third1651737068.png' />
      </SwiperSlide>
    </Swiper>
  );
}
