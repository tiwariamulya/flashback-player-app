import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { Player } from "@/components/player/Player";
import { StationProvider } from "@/lib/station";
import logoAsset from "@/assets/logo.webp.asset.json";


const SITE_URL = "https://driverdai.lovable.app/";
const OG_IMAGE =
  "https://driverdai.lovable.app/__l5e/assets-v1/4a6c2553-7e4a-46e2-8d62-8ecb72a19022/driver-dai-og.png";
const TITLE = "Driver Dai — Nonstop Nepali Music Radio";
const DESCRIPTION =
  "Driver Dai plays nonstop Nepali songs — hand-picked classics and road-trip favourites, shuffled fresh every visit. Press play, no signup.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RadioChannel",
          name: "Driver Dai",
          url: SITE_URL,
          image: OG_IMAGE,
          description: DESCRIPTION,
          genre: "Nepali music",
        }),
      },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
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
    <StationProvider>
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
    </StationProvider>
  );

}
