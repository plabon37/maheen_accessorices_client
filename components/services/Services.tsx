import ServicesHeader from "./ServicesHeader";
import ServiceGrid from "./ServiceGrid";

async function getServices() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/service`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const services = await res.json();

    return services
      .filter((item: any) => item.isActive)
      .sort((a: any, b: any) => a.order - b.order);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Services() {
  const services = await getServices();

  if (!services.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#F6F9FC] py-24 lg:py-32">

      {/* Background Shape */}

      <div className="absolute inset-0">

        <div className="absolute -left-52 top-10 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-100 blur-[120px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        <ServicesHeader />

        <div className="mt-20">

          <ServiceGrid
            services={services}
          />

        </div>

      </div>

    </section>
  );
}