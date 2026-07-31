"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

interface Hero {
  _id: string;
  backgroundImage: string;
  subTitle: string;
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  facebook: string;
  instagram: string;
  linkedin: string;
}

interface HeroSliderProps {
  heroes: Hero[];
}

export default function HeroSlider({
  heroes,
}: HeroSliderProps) {

  const [swiper, setSwiper] = useState<any>(null);
  return (
  <Swiper
    modules={[Autoplay, Pagination]}
    onSwiper={setSwiper}
    loop={heroes.length > 1}
    speed={1000}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    pagination={{
      clickable: true,
    }}
    className="hero-slider h-screen"
  >
    {heroes.map((hero) => (
  <SwiperSlide key={hero._id}>

    <section className="relative h-screen w-full overflow-hidden">

      {/* Background */}

      <Image
        src={hero.backgroundImage}
        alt={hero.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}

      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">

        <div className="max-w-3xl">

          {/* Subtitle */}

          <span className="mb-6 inline-block rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-cyan-400 backdrop-blur">
            {hero.subTitle}
          </span>

          {/* Title */}

          <h1 className="mb-8 text-5xl font-black uppercase leading-tight text-white md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>

          {/* Description */}

          <p className="max-w-2xl text-lg leading-8 text-gray-200">
            {hero.description}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href={hero.primaryButtonLink || "#"}
              className="inline-flex items-center rounded-full bg-cyan-500 px-8 py-4 font-semibold uppercase tracking-[2px] text-white transition hover:bg-cyan-400"
            >
              {hero.primaryButtonText}

              <FaArrowRight className="ml-3" />
            </Link>

            <Link
              href={hero.secondaryButtonLink || "#"}
              className="inline-flex items-center rounded-full border border-white px-8 py-4 font-semibold uppercase tracking-[2px] text-white transition hover:bg-white hover:text-black"
            >
              {hero.secondaryButtonText}
            </Link>

          </div>

        </div>
        {/* Social Icons */}

<div className="absolute right-8 top-1/2 hidden -translate-y-1/2 lg:flex">

  <div className="flex flex-col gap-5">

    <Link
      href={hero.facebook || "#"}
      target="_blank"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-cyan-500"
    >
      <FaFacebookF />
    </Link>

    <Link
      href={hero.instagram || "#"}
      target="_blank"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-cyan-500"
    >
      <FaInstagram />
    </Link>

    <Link
      href={hero.linkedin || "#"}
      target="_blank"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition hover:bg-cyan-500"
    >
      <FaLinkedinIn />
    </Link>

  </div>

</div>

</div>

</section>

</SwiperSlide>
))}
{/* Bottom Navigation */}

<div className="absolute bottom-8 left-0 z-30 w-full">

  <div className="mx-auto flex max-w-5xl items-center justify-between px-8">

    {/* Prev */}

    <button
      onClick={() => swiper?.slidePrev()}
      className="text-sm font-semibold uppercase tracking-[4px] text-white transition hover:text-cyan-400"
    >
      PREV
    </button>

    {/* Pagination */}

    <div className="flex items-center gap-5">

      <div className="h-px w-28 bg-white/40" />

      <div className="swiper-pagination !relative !w-auto" />

      <div className="h-px w-28 bg-white/40" />

    </div>

    {/* Next */}

    <button
      onClick={() => swiper?.slideNext()}
      className="text-sm font-semibold uppercase tracking-[4px] text-white transition hover:text-cyan-400"
    >
      NEXT
    </button>

  </div>

</div>
</Swiper>
)}