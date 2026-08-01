import PolicyCard from "./PolicyCard";

interface PolicyGridProps {
  policy: any;
}

export default function PolicyGrid({
  policy,
}: PolicyGridProps) {

  const cards = [...policy.cards]
    .filter((card: any) => card.isActive)
    .sort(
      (a: any, b: any) =>
        a.order - b.order
    );

  return (
    <div className="space-y-10">

      {/* First Row */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {cards
          .slice(0, 4)
          .map((card: any) => (

            <PolicyCard
              key={card.number}
              card={card}
            />

          ))}

      </div>

      {/* Second Row */}

      {cards.length > 4 && (

        <div className="flex justify-center">

          <div className="grid w-full max-w-3xl gap-8 md:grid-cols-2">

            {cards
              .slice(4)
              .map((card: any) => (

                <PolicyCard
                  key={card.number}
                  card={card}
                />

              ))}

          </div>

        </div>

      )}

    </div>
  );
}