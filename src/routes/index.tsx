import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { Player } from "@/components/player/Player";
import logoAsset from "@/assets/logo.webp.asset.json";

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
        content: "A one-page nostalgia radio: dusty evening streets, a spinning record and hand-picked playlists that keep playing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: logoAsset.url, fetchPriority: "high" },
      {
        rel: "preload",
        as: "image",
        href: "/__l5e/assets-v1/18fa3a48-c300-443a-bd25-13a8686fbb70/scene-wide.webp",
        media: "(orientation: landscape)",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        as: "image",
        href: "/__l5e/assets-v1/7ae66946-e258-4f09-9bb4-c762d1a935ce/scene-tall.webp",
        media: "(orientation: portrait)",
        fetchPriority: "high",
      },
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
          width={672}
          height={362}
          fetchPriority="high"
          decoding="async"
          className="h-28 w-auto max-w-[80vw] object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:h-32"
        />
      </header>


      <div className="safe-b safe-l safe-r fixed z-20 flex justify-center">
        <div className="mx-auto flex w-full max-w-3xl justify-center px-4">
          <Player />
        </div>
      </div>

      <div className="h-[420px] w-full shrink-0" aria-hidden="true" />
    </main>
  );
}
