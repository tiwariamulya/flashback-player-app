import { createFileRoute } from "@tanstack/react-router";
import { Copyright } from "lucide-react";
import { TopBar } from "@/components/TopBar";
import { Player } from "@/components/player/Player";
import { StationProvider } from "@/lib/station";
import logoUrl from "@/assets/logo.webp";
import sceneWideUrl from "@/assets/scene-wide.webp";
import sceneTallUrl from "@/assets/scene-tall.webp";


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
      { rel: "preload", as: "image", href: logoUrl, fetchPriority: "high" },
      {
        rel: "preload",
        as: "image",
        href: sceneWideUrl,
        media: "(orientation: landscape)",
        fetchPriority: "high",
      },
      {
        rel: "preload",
        as: "image",
        href: sceneTallUrl,
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
      <main className="relative flex min-h-dvh flex-1 flex-col items-center overflow-hidden">
        <div className="hero-bg fixed inset-0 -z-20 bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/80" />
        </div>
        <div className="grain pointer-events-none fixed inset-0 -z-10" />

        <TopBar />

        <header className="safe-t pointer-events-none mt-20 flex justify-center px-6 sm:mt-24">
          <img
            src={logoUrl}
            alt="Station logo"
            width={672}
            height={362}
            fetchPriority="high"
            decoding="async"
            className="h-28 w-auto max-w-[80vw] object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:h-32"
          />
        </header>

        <div className="safe-px safe-pb z-20 mt-auto flex w-full max-w-3xl flex-col items-center justify-center pb-4">
          <Player />
          <footer className="mt-3 text-center text-sm text-white/90">
            <Copyright className="inline-block size-4 align-text-bottom" /> 2026 Driver Dai | Developed by{" "}
            <a
              href="https://tiwariamulya.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 transition-colors hover:text-yellow-300 hover:underline"
            >
              Amulya Tiwari
            </a>
          </footer>
        </div>
      </main>
    </StationProvider>
  );
}
