"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { destinations } from "@/app/lib/data";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-foreground"
          >
            Explore <span className="text-primary">Destinations</span>
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Find your next perfect getaway from our handpicked selection of top-rated destinations around the world.
          </p>
          
          <div className="max-w-xl mx-auto mt-10 relative">
            <input 
              type="text" 
              placeholder="Search destinations..."
              className="w-full bg-white border-none h-16 rounded-2xl px-12 shadow-lg focus:ring-2 focus:ring-primary outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-xl font-bold">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{dest.name}</h3>
                <p className="text-slate-500 leading-relaxed line-clamp-3">
                  {dest.description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    href={`/destinations/${dest.id}`}
                    className="text-primary font-bold flex items-center gap-2 group/btn"
                  >
                    View Details 
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-slate-400 text-sm font-medium">12+ Tours Available</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
