import type { Metadata } from "next";
import PackagesContent from "./PackagesContent";

export const metadata: Metadata = {
  title: "Tour Packages",
  description: "Browse our handpicked ultra-luxury tour packages. Crafted experiences, expert guides, and the best prices for your dream vacation.",
};

export default function PackagesPage() {
  return <PackagesContent />;
}
