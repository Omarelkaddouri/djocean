"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
const slid = () => {
  return (
    <Swiper style={{marginTop:"10px"}}
    navigation={true}
    modules={[Navigation, Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 3000, // Wait 3 seconds before sliding to the next slide
      disableOnInteraction: false, // Keep autoplay running after user interactions
    }}
  >
    <SwiperSlide style={{paddingTop:"10px",paddingLeft:"10px"}}>
      <img src="https://t4.ftcdn.net/jpg/00/64/91/37/360_F_64913707_PNS2WMobSFvvUgZrr4LuXbPUmpTSlBl1.jpg" alt="Slide 1" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://t3.ftcdn.net/jpg/02/16/35/78/360_F_216357832_E67FUQu5RRRCe9pUb1uefbJJSBK0Wiza.jpg" alt="Slide 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://i.imgur.com/rwvqF14.jpeg" alt="Slide 3" />
    </SwiperSlide>
  </Swiper>
  )
}

export default slid