import FeatureHeader from "./FeatureHeader";
import FeatureContent from "./FeatureContent";
import FeatureImage from "./FeatureImage";
import FeatureStats from "./FeatureStats";

async function getFeature() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/feature`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed");
    }

    const features = await res.json();

    return features
      .filter((item: any) => item.isActive)
      .sort((a: any, b: any) => a.order - b.order)[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function Feature() {
  const feature = await getFeature();

  if (!feature) return null;

  return (
    <section className="relative overflow-hidden bg-[#F6F9FC] py-24">

      {/* Background Blur */}

      <div className="absolute inset-0">

        <div className="absolute -left-60 top-20 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-100 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-6 lg:px-8 xl:px-10">

        <FeatureHeader
          feature={feature}
        />

        <div className="mt-20 grid items-center gap-20 xl:grid-cols-2">

          <FeatureContent
            feature={feature}
          />

          <FeatureImage
            feature={feature}
          />

        </div>

        <div className="mt-20">

          <FeatureStats
            feature={feature}
          />

        </div>

      </div>

    </section>
  );
}