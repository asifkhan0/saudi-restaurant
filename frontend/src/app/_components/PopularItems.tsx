"use client";

import React from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/PopularItem.css";

const PopularItems: React.FC = () => {
  return (
    <section className="popular-items h-full py-20 w-full flex flex-col popularBannerImg" lang="ar" dir="ltr">
      {/* Section Heading */}
      <header className="heading py-10 text-center">
        <span className="text-yellow-300 uppercase subHeadingborder text-nowrap">popular items</span>
        <h1 className="text-secondary text-4xl font-extrabold mt-3">Popular Items</h1>
      </header>

      {/* Swiper Carousel */}
      <div className="swiper-container w-full max-w-7xl mx-auto z-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper h-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[...Array(8)].map((_, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide bg-[transparent] flex items-center justify-center text-lg font-medium"
            >
              <div className="card relative min-h-[34rem]">
                <img
                  className="w-[20rem] h-[20rem] object-cover absolute z-[2] popular-item_cardStyle"
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Popular Item"
                />
                {/* <div className="absolute top-0 left-0 bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 70 71" className="w-8 h-8">
                      <path
                        fill="#fff"
                        d="M69.5 34c-.3-.4-.4-1-.5-1.5C68.8 31.6 68.6 30.5 68.3 29.4c-.1-.5-.2-1-.5-1.4-.2-.3-.4-.6-.6-.9-.1-.1-.2-.3-.1-.3-.4-.6-.9-1.1-1.2-1.7-.6-1-1.1-2.1-1.8-3-..."
                      />
                    </svg>
                  </div> */}
                <div className="content absolute bottom-0 justify-end min-h-[20rem] borderStyle blurBg text-secondary py-4 pb-8 px-6 flex flex-col items-center gap-5">
                  <div className="review">
                    ⭐⭐⭐⭐⭐
                    <span>Review(5)</span>
                  </div>
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p className="text-center ">It is a long established fact that a reader will be distracted.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-8 gap-2 flex items-center justify-center"></div>
      </div>
    </section>
  );
};

export default PopularItems;
