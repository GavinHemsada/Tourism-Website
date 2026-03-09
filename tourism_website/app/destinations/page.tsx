import type { Metadata } from "next";
import DestinationsContent from "./DestinationsContent";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore the world's most breathtaking destinations. From Bali to the Swiss Alps, find your next adventure with WanderCeylon.",
};

export default function DestinationsPage() {
  return <DestinationsContent />;
}
