"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import styles from "../styles/Carousel.module.css";

const Carousel: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        className={`mySwiper ${styles.swiperCustomTheme} h-full`}
        speed={1000}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
      >
        <div slot="container-start" className={styles.parallaxBg} data-swiper-parallax="-23%"></div>
        {/* slide 1 */}
        <SwiperSlide>
          <div className="sliderContainer flex h-full flex-col items-center justify-center relative">
            <div className="bannerImg absolute z-0">
              <img src="/banner1.jpg" alt="" />
              <div className="darkOverlay absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="content w-[50%] h-full flex items-center justify-center flex-col absolute z-10">
              <div className="text-4xl font-bold text-white " data-swiper-parallax="-300">
                Slide 1
              </div>
              <div className="text-xl font-semibold text-gray-300" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text-base text-gray-400 mt-4" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet
                  faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                  Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit
                  facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
                  libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide className="h-full flex flex-col items-center justify-center relative">
          <div className="bannerImg absolute z-0">
            <img src="/banner2.jpg" alt="" />
            <div className="darkOverlay absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="content h-full flex items-center justify-center flex-col absolute z-10">
            <div className="text-4xl font-bold text-white " data-swiper-parallax="-300">
              Slide 1
            </div>
            <div className="text-xl font-semibold text-gray-300" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text-base text-gray-400 mt-4" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer
                laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis
                rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide className="h-full flex flex-col items-center justify-center relative">
          <div className="bannerImg absolute z-0">
            <img src="/banner3.jpg" alt="" />
            <div className="darkOverlay absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="content h-full flex items-center justify-center flex-col absolute z-10">
            <div className="text-4xl font-bold text-white " data-swiper-parallax="-300">
              Slide 1
            </div>
            <div className="text-xl font-semibold text-gray-300" data-swiper-parallax="-200">
              Subtitle
            </div>
            <div className="text-base text-gray-400 mt-4" data-swiper-parallax="-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
                felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer
                laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis
                rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
