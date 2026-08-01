interface FeatureStatsProps {
  feature: any;
}

export default function FeatureStats({
  feature,
}: FeatureStatsProps) {
  return (
    <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-16 lg:grid-cols-4">

      {/* Designs */}

      <div className="group">

        <h2 className="text-6xl font-bold text-black transition duration-300 group-hover:text-[#6D7DF6]">
          {feature.designCount}
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          {feature.designLabel}
        </p>

      </div>

      {/* Orders */}

      <div className="group">

        <h2 className="text-6xl font-bold text-black transition duration-300 group-hover:text-[#6D7DF6]">
          {feature.orderCount}
        </h2>

        <p className="mt-4 text-lg text-gray-500">
          {feature.orderLabel}
        </p>

      </div>

    </div>
  );
}