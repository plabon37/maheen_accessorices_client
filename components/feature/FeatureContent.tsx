import { ArrowUpRight } from "lucide-react";

interface FeatureContentProps {
  feature: any;
}

export default function FeatureContent({
  feature,
}: FeatureContentProps) {
  return (
    <div className="flex flex-col justify-center">

      {/* Experience */}

      <div className="mb-12">

        <div className="inline-flex items-center rounded-full bg-[#EEF3FF] px-6 py-3">

          <span className="text-lg font-semibold text-[#6D7DF6]">
            {feature.experience}
          </span>

        </div>

      </div>

      {/* Feature List */}

      <div className="space-y-7">

        {feature.features
          ?.sort(
            (a: any, b: any) =>
              a.order - b.order
          )
          .map(
            (
              item: any,
              index: number
            ) => (
              <div
                key={index}
                className="group flex items-center justify-between border-b border-gray-200 pb-6 transition-all duration-300 hover:border-[#6D7DF6]"
              >

                <h3 className="text-2xl font-semibold text-black transition-all duration-300 group-hover:text-[#6D7DF6]">

                  {item.title}

                </h3>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 group-hover:border-[#6D7DF6] group-hover:bg-[#6D7DF6]">

                  <ArrowUpRight
                    size={22}
                    className="text-black transition-all duration-300 group-hover:text-white"
                  />

                </div>

              </div>
            )
          )}

      </div>

    </div>
  );
}