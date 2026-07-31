"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import AlbumCard from "./AlbumCard";

import "swiper/css";
import "swiper/css/navigation";

interface AlbumSliderProps {
  albums: any[];
}

export default function AlbumSlider({
  albums,
}: AlbumSliderProps) {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Text */}

      <h1 className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[220px] font-black uppercase leading-none text-slate-200/40 xl:block">
        PORTFOLIO
      </h1>

      {/* Left Arrow */}

      <button
        className="album-prev absolute left-8 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-5 shadow-xl transition hover:bg-blue-600 hover:text-white"
      >
        <FaArrowLeft size={22} />
      </button>

      {/* Right Arrow */}

      <button
        className="album-next absolute right-8 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white p-5 shadow-xl transition hover:bg-blue-600 hover:text-white"
      >
        <FaArrowRight size={22} />
      </button>
            <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".album-prev",
          nextEl: ".album-next",
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        centeredSlides={true}
        watchSlidesProgress={true}
        speed={900}
        spaceBetween={-140}
        slidesPerView={"auto"}
        breakpoints={{
          0: {
            spaceBetween: -40,
          },
          640: {
            spaceBetween: -60,
          },
          768: {
            spaceBetween: -80,
          },
          1024: {
            spaceBetween: -100,
          },
          1280: {
            spaceBetween: -140,
          },
        }}
        className="album-swiper"
      >
                {albums.map((album) => (
          <SwiperSlide
            key={album._id}
            className="!w-[320px] sm:!w-[450px] lg:!w-[720px] xl:!w-[850px] !flex justify-center"
          >
            <AlbumCard
              album={album}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}