import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Navigation } from "swiper";

export default function SlideShow() {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className='mySwiper'
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src='https://media.canifa.com/Simiconnector/banner_name_tablet1658204741.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://media.canifa.com/Simiconnector/list_image_tablet1656647556.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://media.canifa.com/Simiconnector/banner_name_tablet1647593218.png' />
      </SwiperSlide>
    </Swiper>
  );
}
