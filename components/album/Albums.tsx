import AlbumsHeader from "./AlbumsHeader";
import AlbumSlider from "./AlbumSlider";

async function getAlbums() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/album`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed");
    }

    const albums = await res.json();

    return albums
      .filter((item: any) => item.isActive)
      .sort((a: any, b: any) => a.order - b.order);
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function Albums() {
  const albums = await getAlbums();

  if (!albums.length) return null;

  return (
    <section className="bg-white rounded-24">

      <div className="mx-auto max-w-auto px-6">

        <AlbumsHeader />

        <div className="mt-20">

          <AlbumSlider
            albums={albums}
          />

        </div>

      </div>

    </section>
  );
}