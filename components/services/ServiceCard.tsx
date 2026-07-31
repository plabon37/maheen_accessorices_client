import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  service: any;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
  <div className="group relative h-[480px] overflow-hidden rounded-[35px] bg-black shadow-2xl">

    {/* Background Image */}

    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-cover transition-all duration-1000 ease-out group-hover:scale-115"
    />

    {/* Dark Overlay */}

    <div className="absolute inset-0 bg-gradient-to-t from-[#06192d] via-[#06192d]/50 to-transparent transition-all duration-500 group-hover:from-[#0A2C52]" />

    {/* Blue Hover Overlay */}

    <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
    {/* Glow Effect */}
    {/* Accent Line */}

<div className="absolute left-10 top-10 h-1 w-16 rounded-full bg-cyan-400 transition-all duration-500 group-hover:w-28" />

<div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:bg-cyan-500/30" />


    {/* Content */}

    <div className="absolute inset-0 flex flex-col justify-end px-10 pb-12 pt-24">
              {/* Service Number */}

        <div className="mb-4">

          <span className="text-[110px] lg:text-[140px] font-black leading-none tracking-tight text-white/10 transition-all duration-500 group-hover:text-white/25 lg:text-[120px]">
            {service.number}
          </span>

        </div>

        {/* Service Title */}

        <h3 className="max-w-xs text-[42px] font-bold leading-[1.15] text-white transition-all duration-300 group-hover:text-cyan-300">
          {service.title}
        </h3>

        {/* Description */}

        <p className="mt-6 max-w-md text-lg leading-8 text-gray-200">
          {service.description}
        </p>
                  {/* Bottom Area */}

        <div className="mt-12 flex items-center justify-between border-t border-white/20 pt-8">

          {/* Discover Work */}

          <Link
            href={service.buttonLink || "#"}
            className="inline-flex items-center gap-3 text-lg font-semibold tracking-wide text-white transition-all duration-300 hover:text-cyan-400"
          >
            {service.buttonText || "Discover Work"}

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>

          {/* Circle Button */}

          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-cyan-400 group-hover:bg-cyan-500">

            <FaArrowRight className="text-white transition-transform duration-300 group-hover:rotate-45" />

          </div>

        </div>

      </div>

    </div>
  )
}