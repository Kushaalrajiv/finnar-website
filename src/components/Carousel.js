import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from "./images/1.png"
import img2 from "./images/2.png"
import img3 from "./images/3.png"
import img4 from "./images/4.png"
import img5 from "./images/5.png"
import img6 from "./images/6.png"

const Carousel = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

      <SwiperSlide><img src={img1} alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src={img2} alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src={img3} alt="Slide 3" /></SwiperSlide>
      <SwiperSlide><img src={img4} alt="Slide 4" /></SwiperSlide>
      <SwiperSlide><img src={img5} alt="Slide 5" /></SwiperSlide>
      <SwiperSlide><img src={img6} alt="Slide 6" /></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
