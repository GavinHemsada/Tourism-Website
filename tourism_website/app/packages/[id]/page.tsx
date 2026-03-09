import Image from "next/image";
import { Clock, CheckCircle, MapPin, Share2, Heart, Calendar, Users, Star } from "lucide-react";
import { tourPackages } from "@/app/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return tourPackages.map((pkg) => ({
    id: pkg.id,
  }));
}

export default async function PackageDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pkg = tourPackages.find((p) => p.id === id);

  if (!pkg) {
    notFound();
  }

  // Mock gallery
  const gallery = [
    pkg.image,
    "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <main className="min-h-screen pt-24">
      {/* Header / Gallery Section */}
      <section className="px-6 py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                        <MapPin className="w-4 h-4" /> Best Selling Package
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black">{pkg.name}</h1>
                    <div className="flex items-center gap-6 text-slate-500 font-medium">
                        <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> {pkg.duration}</span>
                        <span className="flex items-center gap-2"><Users className="w-5 h-5 text-primary" /> Max 15 People</span>
                        <span className="flex items-center gap-1 text-accent"><Star className="w-5 h-5 fill-current" /> 4.9 (1.2k Reviews)</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="p-4 bg-white rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"><Share2 className="w-5 h-5" /></button>
                    <button className="p-4 bg-white rounded-2xl border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm text-red-500"><Heart className="w-5 h-5" /></button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                <div className="md:col-span-2 md:row-span-2 relative rounded-[40px] overflow-hidden group shadow-xl">
                    <Image src={gallery[0]} alt={pkg.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="md:col-span-2 relative rounded-[40px] overflow-hidden group shadow-xl">
                    <Image src={gallery[1]} alt="Gallery 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative rounded-[40px] overflow-hidden group shadow-xl">
                    <Image src={gallery[2]} alt="Gallery 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative rounded-[40px] overflow-hidden bg-slate-900 group shadow-xl cursor-pointer">
                    <Image src={gallery[0]} alt="View All" fill className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-black text-2xl">+12 Photos</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl font-black">About This Tour</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        {pkg.description} Immerse yourself in the local culture, explore hidden gems, and create memories that will last a lifetime. Our expert guides ensure a safe and enriching experience throughout the journey.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        From luxury accommodations to hand-picked local eateries, every detail of this tour has been meticulously planned to provide you with the ultimate travel experience. Whether you&apos;re looking for adventure, relaxation, or cultural immersion, this package has it all.
                    </p>
                </div>

                <div className="space-y-8">
                    <h2 className="text-3xl font-black">Tour Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {pkg.highlights.map((highlight, i) => (
                            <div key={i} className="flex gap-4 items-start p-6 bg-slate-50 rounded-3xl group hover:bg-white inset-2 hover:shadow-lg transition-all border border-slate-100">
                                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="font-bold text-slate-800 text-lg">{highlight}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8 p-10 bg-slate-900 rounded-[40px] text-white">
                    <h2 className="text-3xl font-black">What&apos;s Included?</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                        {["All Transportation", "Luxury Accommodation", "Breakfast & Lunch", "Professional Guide", "Entrance Fees", "Travel Insurance"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                <div className="w-2 h-2 bg-primary rounded-full"></div> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Sticky Sidebar / Booking */}
            <div className="flex flex-col gap-8">
                <div className="sticky top-32 bg-white rounded-[40px] p-10 shadow-2xl border border-slate-100 space-y-8">
                    <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                        <div>
                            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest">Price starts from</p>
                            <h3 className="text-4xl font-black text-primary">${pkg.price}</h3>
                        </div>
                        <div className="bg-primary/10 px-4 py-2 rounded-2xl text-primary font-bold text-sm">
                            -20% OFF
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                             <label className="text-sm font-bold text-slate-500 uppercase flex items-center gap-2"><Calendar className="w-4 h-4" /> Select Date</label>
                             <input type="date" className="w-full bg-slate-50 border-none h-14 rounded-2xl px-6 font-bold outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-sm font-bold text-slate-500 uppercase flex items-center gap-2"><Users className="w-4 h-4" /> Travelers</label>
                             <select className="w-full bg-slate-50 border-none h-14 rounded-2xl px-6 font-bold outline-none focus:ring-2 focus:ring-primary appearance-none">
                                <option>1 Person</option>
                                <option>2 Persons</option>
                                <option>3-5 Persons</option>
                                <option>Group (10+)</option>
                             </select>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-5 rounded-[24px] font-black text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                            Book This Tour
                        </button>
                        <p className="text-center text-slate-400 text-sm font-medium">Free cancellation up to 48 hours before</p>
                    </div>

                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex -space-x-3">
                            {[1,2,3,4].map((i) => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center font-bold text-xs`}>U{i}</div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center font-bold text-xs">+15</div>
                        </div>
                        <span className="text-slate-400 text-sm font-bold">19 People booked recently</span>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
