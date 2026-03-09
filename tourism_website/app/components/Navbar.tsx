"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Destinations", href: "/destinations" },
  { name: "Packages", href: "/packages" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 md:px-8 py-3 flex items-center justify-between shadow-lg">
        {/* Logo */}
        <Link 
          href="/" 
          title="WanderCeylon"
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          <Image 
            src="/icon.png" 
            alt="WanderCeylon Logo" 
            width={32} 
            height={32} 
            className="w-8 h-8 object-contain"
          />
          <span className="tracking-tight">WanderCeylon</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-foreground/80 hover:text-primary transition-colors font-medium flex items-center gap-2 relative",
                pathname === item.href && "text-primary"
              )}
            >
              
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-primary text-white px-6 py-2 rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-md">
            Book Now
          </button>
          
          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass rounded-2xl p-6 shadow-2xl flex flex-col gap-4 overflow-hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl font-bold transition-all",
                  pathname === item.href 
                    ? "bg-primary text-white shadow-lg" 
                    : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <button className="sm:hidden w-full bg-primary text-white py-4 rounded-xl font-black text-lg mt-2 shadow-lg">
              Book Your Trip
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
