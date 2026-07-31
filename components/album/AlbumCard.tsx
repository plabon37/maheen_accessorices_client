import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";

interface AlbumCardProps {
  album: any;
}

export default function AlbumCard({
  album,
}: AlbumCardProps) {
  return (
    <div className="group relative mx-auto h-[650px] w-[850px] overflow-hidden rounded-[32px] bg-white shadow-2xl">

      {/* Image */}

      <Image
        src={album.image}
        alt={album.title}
        fill
        priority
        className="object-cover transition-all duration-700 group-hover:scale-105"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* White Circle Button */}

      <div className="absolute right-8 top-8 z-20">
        <Link
          href={album.buttonLink || "#"}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 shadow-xl transition-all duration-300 hover:scale-110"
        >
          <FaArrowRight className="text-xl" />
        </Link>
      </div>

      {/* Content */}

      <div className="absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-10">
                {/* Subtitle */}

        <span className="inline-block text-sm font-semibold uppercase tracking-[4px] text-blue-300">
          {album.subTitle || "BY MAHEEN ACCESSORIES LIMITED"}
        </span>

        {/* Title */}

        <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-white lg:text-5xl">
          {album.title}
        </h2>

        {/* Description */}

        <p className="mt-6 max-w-lg text-base leading-8 text-gray-200">
          {album.description}
        </p>

        {/* Button */}

        <div className="mt-10">

          <Link
            href={album.buttonLink || "#"}
            className="inline-flex items-center gap-3 text-lg font-semibold text-white transition-all duration-300 hover:text-blue-300"
          >
            {album.buttonText || "More Picture"}

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>

        </div>
                {/* Bottom Meta */}

        <div className="mt-10 flex items-center justify-between border-t border-white/20 pt-6">

          {/* Left */}

          <div>

            <p className="text-sm uppercase tracking-[4px] text-white/70">
              Photo Gallery
            </p>

            <p className="mt-2 text-xl font-semibold text-white">
              Maheen Accessories Ltd.
            </p>

          </div>

          {/* Right Circle */}

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-blue-500 group-hover:bg-blue-600">

            <FaArrowRight className="text-white text-lg" />

          </div>

        </div>

      </div>

      {/* Decorative Gradient */}

      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

    </div>
  );
}