import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { Player } from "@/components/player/Player";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Golden Hour Radio — nostalgia on loop" },
      {
        name: "description",
        content:
          "A one-page nostalgia radio: dusty evening streets, a spinning record and hand-picked playlists that keep playing.",
      },
      { property: "og:title", content: "Golden Hour Radio — nostalgia on loop" },
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

      <TopBar listeners={128} />

      <header className="safe-t pointer-events-none mt-20 px-6 text-center sm:mt-24">
        <h1 className="text-2xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-3xl">
          Golden Hour Radio
        </h1>
        <p className="mt-1 text-[12.5px] text-white/70">Songs from the long way home</p>
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
