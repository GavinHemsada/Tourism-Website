import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Globe, Camera, Info, ArrowLeft } from "lucide-react";
import { destinations } from "@/app/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return destinations.map((d) => ({
    id: d.id,
  }));
}

export default async function DestinationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dest = destinations.find((d) => d.id === id);

  if (!dest) {
    notFound();
  }

  // Gallery
  const gallery = [
    dest.image,
    "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <main className="min-h-screen pb-24">
      {/* Back Button */}
      <div className="absolute top-32 left-8 z-50">
        <Link 
            href="/destinations" 
            className="flex items-center gap-2 bg-white/20 hover:bg-white/40 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-2xl font-black transition-all group"
        >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image 
          src={dest.image} 
          alt={dest.name} 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end mb-20 px-6">
            <div className="max-w-7xl mx-auto w-full">
                <div className="space-y-6 max-w-4xl">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary px-4 py-2 rounded-xl text-white font-bold text-sm tracking-widest uppercase">
                            Featured
                        </div>
                        <div className="flex items-center gap-1 text-white/90">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-accent text-accent" />)}
                            <span className="text-sm font-bold ml-2">(4.9 Rated)</span>
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white leading-tight">{dest.name}</h1>
                    <div className="flex items-center gap-6 text-white/80 font-medium">
                        <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                            <MapPin className="w-5 h-5 text-accent" /> Top Destination
                        </span>
                        <span className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
                            <Globe className="w-5 h-5 text-accent" /> Explore Now
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mt-[-80px] px-6 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Content Card */}
            <div className="lg:col-span-2 space-y-12">
                <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl shadow-slate-200/50 space-y-12 border border-slate-50">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-primary">
                            <Info className="w-6 h-6" />
                            <h2 className="text-2xl font-black uppercase tracking-widest text-sm">Overview</h2>
                        </div>
                        <p className="text-slate-600 text-xl leading-relaxed font-medium">
                            {dest.description} WanderCeylon provides the ultimate curated experience for {dest.name}, ensuring you see both the iconic landmarks and the hidden secrets of this magnificent place.
                        </p>
                        <p className="text-slate-500 text-lg leading-relaxed">
                            Discover a world of beauty and culture. From the moment you arrive, {dest.name} will captivate your senses with its unique atmosphere, stunning landscapes, and rich history. Whether you are seeking adventure or peace, this destination offers something extraordinary for every traveler.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                        <div className="space-y-2">
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Avg Temp</p>
                            <p className="text-2xl font-black text-slate-800">24°C - 31°C</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Best Season</p>
                            <p className="text-2xl font-black text-slate-800">Dec - April</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Local Language</p>
                            <p className="text-2xl font-black text-slate-800">English, Native</p>
                        </div>
                    </div>
                </div>

                {/* Gallery */}
                <div className="space-y-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-primary">
                            <Camera className="w-6 h-6" />
                            <h2 className="text-3xl font-black">Visual Experience</h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative h-[400px] rounded-[40px] overflow-hidden shadow-xl group">
                            <Image src={gallery[1]} alt="Gallery 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="relative h-[400px] rounded-[40px] overflow-hidden shadow-xl group">
                            <Image src={gallery[2]} alt="Gallery 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                    <div className="bg-primary rounded-[40px] p-12 text-white shadow-2xl shadow-primary/30 relative overflow-hidden">
                        <div className="relative z-10 space-y-8">
                            <h3 className="text-3xl font-black leading-tight text-white mb-4">Want to visit <br />{dest.name}?</h3>
                            <p className="text-white/80 font-medium">Get a personalized itinerary for this destination from our travel experts.</p>
                            <button className="w-full bg-white text-primary py-5 rounded-2xl font-black text-lg hover:scale-[1.05] transition-transform active:scale-95">
                                Plan Your Trip
                            </button>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    </div>

                    <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl space-y-6">
                        <h4 className="font-black text-xl mb-4">Quick Facts</h4>
                        <div className="space-y-4">
                            {[
                                { l: "Visa", v: "On Arrival" },
                                { l: "Currency", v: "LKR / USD" },
                                { l: "Connectivity", v: "High Speed 5G" },
                                { l: "Transport", v: "Private / Public" },
                            ].map((f, i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0 text-slate-600">
                                    <span className="font-bold text-slate-400 uppercase text-xs tracking-widest">{f.l}</span>
                                    <span className="font-black text-slate-800">{f.v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
