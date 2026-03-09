"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Star, ArrowRight, Play, Globe, Shield, CreditCard, Users, Map, CheckCircle, Compass } from "lucide-react";
import { destinations, tourPackages, reviews } from "./lib/data";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center text-white px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
              Adventure Awaits <br />
              <span className="text-accent">Beyond Borders</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Experience the world like never before. From tropical paradises to ancient wonders, your next epic journey starts here with WanderCeylon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/packages"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-primary/25"
              >
                Plan Your Trip <ChevronRight className="w-5 h-5" />
              </Link>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all">
                <Play className="w-5 h-5 fill-white" /> Watch Journey
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative bg-white overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
          {[
            { label: "Happy Travelers", value: "50k+", icon: Users },
            { label: "Destinations", value: "200+", icon: Map },
            { label: "Success Rate", value: "99%", icon: CheckCircle },
            { label: "Expert Guides", value: "500+", icon: Compass },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center flex flex-col items-center justify-center gap-2"
            >
              <div className="w-16 h-16 rounded-3xl bg-white shadow-inner flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <stat.icon className="w-8 h-8 text-primary drop-shadow-sm" />
              </div>
              <h3 className="text-4xl font-black text-primary drop-shadow-sm">{stat.value}</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              
              {/* Subtle underline animation */}
              <div className="w-0 h-0.5 bg-accent group-hover:w-12 transition-all duration-500 mt-2" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-accent font-bold tracking-widest text-sm mb-4 uppercase">Popular Places</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                Destinations <span className="text-primary">Everyone</span> Loves
              </h3>
            </div>
            <Link href="/destinations" className="text-primary font-bold flex items-center gap-2 group">
              Browse All Destinations <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.slice(0, 4).map((dest, i) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h4 className="text-2xl font-bold text-white mb-2">{dest.name}</h4>
                  <p className="text-white/70 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {dest.description}
                  </p>
                  <Link href={`/destinations/${dest.id}`} className="inline-block bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-white hover:text-primary transition-colors">
                    Explore Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
                <div className="relative h-[600px] w-full rounded-[40px] overflow-hidden shadow-2xl z-10">
                    <Image 
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
                        alt="Why choose us" 
                        fill 
                        className="object-cover"
                    />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-accent via-orange-500 to-orange-600 rounded-full flex flex-col justify-center items-center text-white z-20 shadow-[0_25px_60px_rgba(245,158,11,0.5)] group/badge transition-all duration-700 hover:scale-105 active:scale-95 border-8 border-white/10 backdrop-blur-sm overflow-hidden">
                    {/* Inner Glassy Ring Effect */}
                    <div className="absolute inset-0 rounded-full border border-white/30 m-3 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
                    
                    {/* Floating Glow */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
                    
                    <div className="relative z-10 text-center px-4">
                        <p className="text-7xl font-black leading-none mb-1 drop-shadow-xl tracking-tighter group-hover:tracking-normal transition-all duration-700">15+</p>
                        <div className="space-y-0.5">
                            <p className="font-bold text-xl uppercase tracking-wider leading-none">Years of Travel</p>
                            <p className="text-white/80 font-semibold text-sm">Experience</p>
                        </div>
                    </div>
                    
                    {/* Subtle pulse animation for life */}
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse -z-10" />
                </div>
            </div>
            
            <div className="space-y-10">
                <div className="space-y-4">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Best Choice</h2>
                    <h3 className="text-4xl md:text-5xl font-black">Why Choose <span className="text-primary">WanderCeylon</span>?</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">We provide personalized itineraries, professional guides, and 24/7 support to ensure your journey is seamless and unforgettable.</p>
                </div>
                
                <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                
                <div className="space-y-6">
                    {[
                        { icon: Globe, title: "World Wide Coverage", desc: "We cover over 200 destinations across all 7 continents." },
                        { icon: Shield, title: "Safe & Secure", desc: "Your safety is our top priority. We use certified vendors and secure payments." },
                        { icon: CreditCard, title: "Best Price Guaranteed", desc: "Found a cheaper price elsewhere? We'll match it and give you a discount." },
                    ].map((feature, i) => (
                        <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow group">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                <p className="text-slate-500">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Featured Tour Packages */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm">Tour Packages</h2>
            <h3 className="text-4xl md:text-5xl font-black">Our Best Tour Packages</h3>
            <p className="text-slate-500 text-lg">Hand-picked experiences designed for true travelers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {tourPackages.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-slate-800 font-bold text-sm z-20">
                    {pkg.duration}
                  </div>
                  <div className="absolute bottom-6 right-6 bg-primary text-white px-5 py-2 rounded-2xl font-bold text-lg z-20 shadow-lg">
                    ${pkg.price}
                  </div>
                </div>
                <div className="p-8 space-y-4 flex-grow flex flex-col">
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{pkg.name}</h4>
                  <p className="text-slate-500 line-clamp-2">{pkg.description}</p>
                  <div className="flex items-center gap-1 text-accent pt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-slate-400 text-xs ml-2 font-medium">(250+ Reviews)</span>
                  </div>
                  <div className="pt-6 mt-auto">
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="w-full bg-slate-900 group-hover:bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all"
                    >
                      View Package Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-accent font-bold uppercase tracking-[.3em] text-xs">Guest Experiences</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tight">Voices of <span className="text-gradient">Adventure</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] space-y-8 hover:bg-white/[0.05] transition-colors relative group"
              >
                <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor"><path d="M0 30h12L18 0H6L0 30zm22 0h12L40 0h-12l-6 30z"/></svg>
                </div>
                <div className="flex gap-1 text-accent">
                    {[1, 2, 3, 4, review.rating].map((star, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                </div>
                <p className="text-xl leading-relaxed text-slate-300 font-light">&quot;{review.text}&quot;</p>
                <div className="flex items-center gap-5 pt-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center font-black text-xl text-white shadow-lg shadow-primary/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-lg leading-none mb-1">{review.name}</h5>
                    <p className="text-primary font-medium text-sm tracking-wide">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[4rem] overflow-hidden group shadow-2xl"
          >
            {/* Background Image with Parallax effect via framer motion if possible (simplified here) */}
            <div className="absolute inset-0 h-[120%] -top-[10%] group-hover:top-0 transition-all duration-[3000ms] ease-out">
                <Image 
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
                    alt="CTA Background"
                    fill
                    className="object-cover"
                />
            </div>
            
            {/* Dynamic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-20" />
            
            {/* Content Container */}
            <div className="relative z-30 px-10 py-24 md:p-32 flex flex-col items-start text-left max-w-4xl space-y-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2 rounded-full text-white font-bold text-sm uppercase tracking-widest">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        Limited Time Offers
                    </div>
                    <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        Your Story <br />
                        <span className="text-accent underline decoration-white/20">Is Waiting</span>
                    </h3>
                    <p className="text-xl text-white/80 max-w-xl font-medium leading-relaxed">
                        Don&apos;t just dream about it. Join 50k+ travelers who turned their bucket lists into reality with WanderCeylon&apos;s curated experiences.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 pt-4 w-full sm:w-auto"
                >
                    <Link href="/contact" className="bg-primary hover:bg-white hover:text-primary text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                        Start Planning <ChevronRight className="w-5 h-5" />
                    </Link>
                    <Link href="/packages" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center">
                        Explore Tours
                    </Link>
                </motion.div>
            </div>

            {/* Floating Glassmorphic Badge */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-20 hidden lg:flex flex-col items-center justify-center w-40 h-40 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full z-40 text-white shadow-2xl"
            >
                <p className="text-3xl font-black">20%</p>
                <p className="text-xs font-bold uppercase tracking-widest">Off Now</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
