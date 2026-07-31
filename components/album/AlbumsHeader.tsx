export default function AlbumsHeader() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-end">

      {/* Left */}

      <div>

        <span className="inline-block text-sm font-semibold uppercase tracking-[5px] text-blue-600">
          02 // PHOTO ALBUMS
        </span>

        <h2 className="mt-6 text-5xl font-bold leading-[1.1] text-[#0B1E33] md:text-6xl">
          Collection of Photos
          <br />
          All of Our Best Works
        </h2>

      </div>

      {/* Right */}

      <div className="lg:pl-20">

        <p className="max-w-xl text-lg leading-9 text-gray-500">
          Explore our gallery showcasing premium garment accessories,
          innovative craftsmanship, and high-quality production that
          reflects our commitment to excellence.
        </p>

      </div>

    </div>
  );
}