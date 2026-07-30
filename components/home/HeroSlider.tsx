"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
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
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{
        delay: 5000,
      }}
      navigation
      pagination={{
        clickable: true,
      }}
      loop
      className="hero-slider h-screen"
    >{heroes.map((hero) => (
  <SwiperSlide key={hero._id}>
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <Image
        src={hero.backgroundImage}
        alt={hero.title}
        fill
        priority
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-12">

        <div className="max-w-3xl">

          {/* Subtitle */}
          <span className="mb-5 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400 backdrop-blur-md">
            {hero.subTitle}
          </span>

          {/* Main Title */}
          <h1 className="mb-8 text-5xl font-black uppercase leading-tight text-white md:text-6xl lg:text-7xl">
            {hero.title}
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            {hero.description}
          </p>{/* Buttons */}
<div className="mt-10 flex flex-col gap-4 sm:flex-row">

  <Link
    href={hero.primaryButtonLink || "#"}
    className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-cyan-400 hover:scale-105"
  >
    {hero.primaryButtonText}

    <FaArrowRight className="ml-3" />
  </Link>

  <Link
    href={hero.secondaryButtonLink || "#"}
    className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black"
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
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500"
    >
      <FaFacebookF size={18} />
    </Link>

    <Link
      href={hero.instagram || "#"}
      target="_blank"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500"
    >
      <FaInstagram size={18} />
    </Link>

    <Link
      href={hero.linkedin || "#"}
      target="_blank"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-500"
    >
      <FaLinkedinIn size={18} />
    </Link>

  </div>

</div>
      </div>
    </section>
  </SwiperSlide>
))}

</Swiper>
  );
}