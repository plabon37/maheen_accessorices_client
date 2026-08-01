interface FeatureHeaderProps {
  feature: any;
}

export default function FeatureHeader({
  feature,
}: FeatureHeaderProps) {
  return (
    <div className="max-w-3xl">

      {/* Section Title */}

      <div className="mb-8 flex items-center gap-3">

        <span className="text-3xl font-bold text-[#6D7DF6]">
          04
        </span>

        <span className="text-3xl font-bold text-[#6D7DF6]">
          
        </span>

        <span className="text-sm font-semibold uppercase tracking-[4px] text-[#6D7DF6]">
          {feature.sectionTitle}
        </span>

      </div>

      {/* Main Title */}

      <h2 className="text-5xl font-bold leading-tight text-black lg:text-7xl">
        {feature.title}
      </h2>

    </div>
  );
}