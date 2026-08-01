import { Check } from "lucide-react";

interface AboutContentProps {
  about: any;
}

export default function AboutContent({
  about,
}: AboutContentProps) {
  return (
    <div className="flex flex-col justify-center">

      {/* Short Description */}

      <p className="text-lg leading-9 text-gray-600">
        {about.shortDescription}
      </p>

      {/* Description */}

      <p className="mt-8 text-lg leading-9 text-gray-500">
        {about.description}
      </p>

      {/* Features */}

      <div className="mt-12 grid gap-6 sm:grid-cols-2">

        <div className="flex items-start gap-4">

          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF3FF] text-[#6D7DF6]">
            <Check size={18} />
          </div>

          <div>

            <h3 className="text-lg font-semibold text-black">
              Premium Quality
            </h3>

            <p className="mt-2 text-gray-500">
              High-quality garments and accessories manufactured with precision.
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF3FF] text-[#6D7DF6]">
            <Check size={18} />
          </div>

          <div>

            <h3 className="text-lg font-semibold text-black">
              Professional Team
            </h3>

            <p className="mt-2 text-gray-500">
              Skilled professionals delivering world-class production standards.
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF3FF] text-[#6D7DF6]">
            <Check size={18} />
          </div>

          <div>

            <h3 className="text-lg font-semibold text-black">
              Global Export
            </h3>

            <p className="mt-2 text-gray-500">
              Trusted by international buyers with reliable delivery.
            </p>

          </div>

        </div>

        <div className="flex items-start gap-4">

          <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF3FF] text-[#6D7DF6]">
            <Check size={18} />
          </div>

          <div>

            <h3 className="text-lg font-semibold text-black">
              Customer Satisfaction
            </h3>

            <p className="mt-2 text-gray-500">
              Building long-term relationships through quality and trust.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}