import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { Player } from "@/components/player/Player";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Nepali Nostalgia Radio — songs on loop" },
      {
        name: "description",
        content:
          "A one-page nostalgia radio: dusty evening streets, a spinning record and hand-picked playlists that keep playing.",
      },
      { property: "og:title", content: "Nepali Nostalgia Radio — songs on loop" },
      {
        property: "og:description",
        content: "Hand-picked nostalgia playlists, playing over a warm evening street scene.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      <div className="hero-bg fixed inset-0 -z-20 bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/80" />
      </div>
      <div className="grain pointer-events-none fixed inset-0 -z-10" />

      <TopBar />

      <header className="safe-t pointer-events-none mt-20 flex justify-center px-6 sm:mt-24">
        <img
          src={logoAsset.url}
          alt="Station logo"
          className="h-24 w-auto max-w-[80vw] object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:h-32"
        />
      </header>


      <div className="safe-b safe-l safe-r fixed z-20 flex justify-center">
        <div className="mx-auto flex w-full max-w-xl justify-center px-4">
          <Player />
        </div>
      </div>

      <div className="h-[420px] w-full shrink-0" aria-hidden="true" />
    </main>
  );
}
