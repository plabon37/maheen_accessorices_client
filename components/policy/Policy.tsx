import PolicyHeader from "./PolicyHeader";
import PolicyGrid from "./PolicyGrid";

async function getPolicy() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/policy`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed");
    }

    const policies = await res.json();

    return policies
      .filter((item: any) => item.isActive)
      .sort((a: any, b: any) => a.order - b.order)[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function Policy() {
  const policy = await getPolicy();

  if (!policy) return null;

  return (
    <section className="bg-white py-28">

      <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-8 xl:px-10">

        <PolicyHeader
          policy={policy}
        />

        <div className="mt-20">

          <PolicyGrid
            policy={policy}
          />

        </div>

      </div>

    </section>
  );
}