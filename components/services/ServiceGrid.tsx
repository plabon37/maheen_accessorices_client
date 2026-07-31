import ServiceCard from "./ServiceCard";

interface ServiceGridProps {
  services: any[];
}

export default function ServiceGrid({
  services,
}: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

      {services.map((service) => (
        <ServiceCard
          key={service._id}
          service={service}
        />
      ))}

    </div>
  );
}