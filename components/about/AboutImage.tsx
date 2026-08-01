import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface AboutImageProps {
  about: any;
}

export default function AboutImage({
  about,
}: AboutImageProps) {
  return (
    <div className="relative">

      {/* Main Image */}

      <div className="relative h-[720px] overflow-hidden rounded-[40px]">

        <Image
          src={about.image}
          alt={about.titleTop}
          fill
          priority
          className="object-cover transition duration-700 hover:scale-105"
        />

      </div>

      {/* Floating Circle */}

      <div className="absolute -right-10 bottom-14">

        <Link
          href={about.circleButtonLink || "#"}
          className="group relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#6D7DF6] via-[#7F8EFF] to-[#56D4F8] p-6 text-center text-white shadow-2xl transition-all duration-500 hover:scale-110"
        >
          {/* Rotating Text */}

          <span className="absolute inset-0 flex items-center justify-center rounded-full border border-white/20"></span>

          <div className="flex flex-col items-center">

            <span className="mb-3 text-base font-semibold uppercase tracking-[2px] leading-6">
              {about.circleButtonText}
            </span>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#6D7DF6] transition duration-300 group-hover:rotate-45">
              <FaArrowRight />
            </div>

          </div>

        </Link>

      </div>

    </div>
  );
}