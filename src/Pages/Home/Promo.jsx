import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Promo() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/assets/images/page7.jpg'} alt="promo"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/assets/images/page1.jpg'} alt="promo"/>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <p>From product launch to a Marketing Campaign or just a simple re-imagination of your brand image.</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/assets/images/page2.jpg'} alt="promo" />
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <p>We have a team of experts who can take care of all your marketing needs.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/assets/images/page3.jpg'} alt="promo"/>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <p>Web development, Web deployment, Analytics to UI UX Designing,</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/assets/images/page4.jpg'} alt="promo"/>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <p>Our experts take care or all your digital needs.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/assets/images/page5.jpg'} alt="promo"/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={process.env.PUBLIC_URL + '/assets/images/page6.jpg'} alt="promo"/>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
