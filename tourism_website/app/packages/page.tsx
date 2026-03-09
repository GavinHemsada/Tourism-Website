"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Star, ArrowRight, Filter } from "lucide-react";
import { tourPackages } from "@/app/lib/data";

export default function PackagesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-6xl font-black text-foreground"
            >
              Tour <span className="text-primary">Packages</span>
            </motion.h1>
            <p className="text-slate-500 text-lg">
              Explore our wide range of tour packages crafted to give you the best experience at competitive prices.
            </p>
          </div>
          
          <div className="flex gap-4 self-center md:self-end">
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md transition-all">
                <Filter className="w-4 h-4" /> Filter
            </button>
            <select className="bg-white border border-slate-200 px-6 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md outline-none">
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tourPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-slate-800 font-bold text-xs flex items-center gap-2 shadow-sm">
                        <Clock className="w-3.5 h-3.5 text-primary" /> {pkg.duration}
                    </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-primary text-white px-6 py-2.5 rounded-[20px] font-black text-xl shadow-lg">
                    ${pkg.price}
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow space-y-6">
                <div className="flex items-center gap-1 text-accent">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                    <span className="text-slate-400 text-xs ml-auto uppercase font-bold tracking-widest">Featured</span>
                </div>
                
                <div>
                   <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{pkg.name}</h3>
                   <p className="text-slate-500 line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-auto">
                    <Link 
                        href={`/packages/${pkg.id}`}
                        className="w-full bg-slate-100 group-hover:bg-primary group-hover:text-white text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                    >
                        View Details <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
