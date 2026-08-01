import Link from "next/link";

interface AboutHeaderProps {
  about: any;
}

export default function AboutHeader({
  about,
}: AboutHeaderProps) {
  return (
    <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">

      {/* Left */}

      <div className="max-w-4xl">

        {/* Small Heading */}

        <div className="mb-8 flex items-center gap-2">

          <span className="text-3xl font-bold text-[#8B96F8]">
            03
          </span>

          <span className="text-3xl font-bold text-[#8B96F8]">
            
          </span>

          <span className="text-lg font-medium uppercase tracking-wide text-black">
            {about.sectionTitle}
          </span>

        </div>

        {/* Main Heading */}

        <h2 className="max-w-5xl text-5xl font-semibold leading-tight text-black lg:text-7xl">

          {about.titleTop}

          <span className="ml-5 font-serif italic font-normal">
            {about.titleItalic}
          </span>

          <br />

          {about.titleBottom}

        </h2>

      </div>

      {/* Right Button */}

      <div className="lg:pt-12">

        <Link
          href={about.exploreButtonLink || "#"}
          className="group relative inline-flex items-center gap-4 overflow-hidden border border-gray-300 bg-white px-10 py-5 text-lg font-medium text-black transition-all duration-500 hover:bg-black hover:text-white"
        >
          {about.exploreButtonText}

          <span className="transition-transform duration-500 group-hover:translate-x-2">
            ↗
          </span>
        </Link>

      </div>

    </div>
  );
}