import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "WanderCeylon | Your Journey Starts Here",
  description: "Experience the world beyond borders. WanderCeylon offers premium curated travel experiences, luxury tour packages, and unforgettable adventures.",
};

export default function HomePage() {
  return <HomeContent />;
}
