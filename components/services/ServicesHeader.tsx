export default function ServicesHeader() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

      {/* Left */}

      <div>

        <span className="inline-block text-sm font-semibold uppercase tracking-[5px] text-sky-600">
          01 // SERVICES
        </span>

        <h2 className="mt-6 text-5xl font-bold leading-[1.1] text-[#0B1E33] md:text-6xl">
          Our Core
          <br />
          Services
        </h2>

      </div>

      {/* Right */}

      <div className="lg:pl-20">

        <p className="max-w-xl text-lg leading-9 text-gray-500">
          We specialize in premium garment accessories,
          delivering innovative manufacturing solutions,
          exceptional craftsmanship, and consistent quality
          for global fashion brands.
        </p>

      </div>

    </div>
  );
}