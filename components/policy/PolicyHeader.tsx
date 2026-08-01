interface PolicyHeaderProps {
  policy: any;
}

export default function PolicyHeader({
  policy,
}: PolicyHeaderProps) {
  return (
    <div className="grid items-end gap-12 lg:grid-cols-2">

      {/* Left Side */}

      <div>

        <div className="mb-8 flex items-center gap-3">

          <span className="text-3xl font-bold text-[#6D7DF6]">
            05
          </span>

          <span className="text-3xl font-bold text-[#6D7DF6]">
            //
          </span>

          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#6D7DF6]">
            {policy.sectionTitle}
          </span>

        </div>

        <h2 className="text-5xl font-bold leading-tight text-black lg:text-7xl">

          {policy.title}

          <span className="ml-4 font-light italic">
            {policy.italicTitle}
          </span>

        </h2>

      </div>

      {/* Right Side */}

      <div className="lg:pl-16">

        <p className="text-lg leading-9 text-gray-500">

          {policy.rightDescription}

        </p>

      </div>

    </div>
  );
}