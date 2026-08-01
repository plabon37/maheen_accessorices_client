import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FeatureImageProps {
  feature: any;
}

export default function FeatureImage({
  feature,
}: FeatureImageProps) {
  return (
    <div className="relative">

      {/* Main Image */}

      <div className="relative h-[700px] overflow-hidden rounded-[40px]">

        <Image
          src={feature.image}
          alt={feature.title}
          fill
          priority
          className="object-cover transition duration-700 hover:scale-105"
        />

      </div>

      {/* Floating Card */}

      <div className="absolute -left-10 bottom-10 w-[360px] rounded-[30px] bg-[#111111] p-8 text-white shadow-2xl">

        {/* Logo */}

        <div className="relative mb-6 h-16 w-40">

          {feature.logo ? (
            <Image
              src={feature.logo}
              alt="Logo"
              fill
              className="object-contain object-left"
            />
          ) : (
            <div className="flex h-full items-center text-xl font-bold">
              LOGO
            </div>
          )}

        </div>

        {/* Description */}

        <p className="leading-8 text-gray-300">
          {feature.description}
        </p>

        {/* Read More */}

        <Link
          href={feature.buttonLink || "#"}
          className="mt-8 inline-flex items-center gap-3 font-semibold text-white transition hover:text-[#6D7DF6]"
        >
          {feature.buttonText}

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white transition hover:border-[#6D7DF6]">

            <ArrowUpRight size={18} />

          </span>

        </Link>

      </div>

    </div>
  );
}
