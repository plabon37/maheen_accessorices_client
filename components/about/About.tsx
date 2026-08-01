import AboutHeader from "./AboutHeader";
import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

async function getAbout() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/about`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed");
    }

    const abouts = await res.json();

    return abouts
      .filter((item: any) => item.isActive)
      .sort((a: any, b: any) => a.order - b.order)[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function About() {
  const about = await getAbout();

  if (!about) return null;

  return (
    <section className="w-full bg-white py-28">

  <div className="w-full">

    <div className="mx-auto max-w-[1800px] px-8 2xl:px-16">

      <AboutHeader about={about} />

      <div className="mt-24 grid items-center gap-20 xl:grid-cols-2">

        <AboutImage about={about} />

        <AboutContent about={about} />

      </div>

    </div>

  </div>

</section>
  );
}