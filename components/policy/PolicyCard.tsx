import Image from "next/image";

interface PolicyCardProps {
  card: any;
}

export default function PolicyCard({
  card,
}: PolicyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-[#F8F9FC] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#6D7DF6] hover:bg-white hover:shadow-2xl">

      {/* Corner Decoration */}

      <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[28px] border-b border-l border-gray-200 transition-all duration-500 group-hover:border-[#6D7DF6]" />

      {/* Icon */}

      <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow">

        {card.icon ? (

          <Image
            src={card.icon}
            alt={card.title}
            width={56}
            height={56}
            className="h-auto w-auto object-contain transition duration-500 group-hover:scale-110"
          />

        ) : (

          <div className="text-gray-400">
            Icon
          </div>

        )}

      </div>

      {/* Number */}

      <div className="mb-5 text-5xl font-bold text-[#6D7DF6]">

        {card.number}

      </div>

      {/* Title */}

      <h3 className="text-2xl font-semibold leading-9 text-black transition duration-500 group-hover:text-[#6D7DF6]">

        {card.title}

      </h3>

    </div>
  );
}