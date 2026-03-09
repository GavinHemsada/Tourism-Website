import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with WanderCeylon's travel experts. We are available 24/7 to help you plan your next legendary adventure.",
};

export default function ContactPage() {
  return <ContactContent />;
}
