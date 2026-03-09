import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "WanderCeylon | Explore Your Dream Destinations",
    template: "%s | WanderCeylon"
  },
  description: "Discover the world's most beautiful destinations and ultra-luxury tour packages with WanderCeylon. Your legend starts today.",
  keywords: ["tourism", "travel", "WanderCeylon", "luxury travel", "vacation", "destinations", "tour packages"],
  authors: [{ name: "WanderCeylon Team" }],
  creator: "WanderCeylon",
  publisher: "WanderCeylon",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "WanderCeylon",
    title: "WanderCeylon | Explore Your Dream Destinations",
    description: "Discover the world's most beautiful destinations and tour packages with WanderCeylon. Your legend starts today.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
