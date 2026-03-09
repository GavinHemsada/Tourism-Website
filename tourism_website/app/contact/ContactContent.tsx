"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Globe } from "lucide-react";

export default function ContactContent() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
                <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-black tracking-widest uppercase"
                >
                    Get In Touch
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black leading-tight"
                >
                    Let&apos;s Plan Your <br />
                    <span className="text-primary underline decoration-slate-100 decoration-8 underline-offset-8">Next Adventure!</span>
                </motion.h1>
                <p className="text-slate-500 text-xl leading-relaxed">
                    Have questions about a destination or package? Our travel experts are here to help you 24/7.
                </p>
            </div>

            <div className="space-y-8">
                {[
                    { icon: Phone, title: "Phone", info1: "+94 77 123 4567", info2: "+94 77 123 4567", color: "bg-blue-500" },
                    { icon: Mail, title: "Email", info1: "hello@Wanderceylon.com", info2: "support@Wanderceylon.com", color: "bg-purple-500" },
                    { icon: MapPin, title: "Office", info1: "Colombo, Sri Lanka", info2: "Colombo, Sri Lanka", color: "bg-orange-500" },
                ].map((item, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="flex gap-6 group"
                    >
                        <div className={`${item.color} w-16 h-16 rounded-[24px] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                            <item.icon className="w-7 h-7" />
                        </div>
                        <div>
                            <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                            <p className="text-xl font-bold text-slate-800">{item.info1}</p>
                            <p className="text-slate-500">{item.info2}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="pt-10 space-y-6 border-t border-slate-100">
                <h4 className="text-2xl font-black">Follow Us</h4>
                <div className="flex gap-4">
                    {[Facebook, Twitter, Instagram, Globe].map((Icon, i) => (
                        <button key={i} className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm border border-slate-100 group">
                            <Icon className="w-6 h-6" />
                        </button>
                    ))}
                </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 md:p-16 rounded-[60px] shadow-2xl border border-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-6">
                    <h3 className="text-3xl font-black mb-10">Send a Message</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                             <label className="text-xs font-black uppercase text-slate-400 tracking-tighter">Full Name</label>
                             <input type="text" placeholder="John Doe" className="w-full bg-white border-none h-16 rounded-2xl px-6 font-bold shadow-sm focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                        <div className="space-y-2">
                             <label className="text-xs font-black uppercase text-slate-400 tracking-tighter">Email Address</label>
                             <input type="email" placeholder="john@example.com" className="w-full bg-white border-none h-16 rounded-2xl px-6 font-bold shadow-sm focus:ring-2 focus:ring-primary outline-none" />
                        </div>
                    </div>

                    <div className="space-y-2">
                         <label className="text-xs font-black uppercase text-slate-400 tracking-tighter">Subject</label>
                         <input type="text" placeholder="Trip Inquiry" className="w-full bg-white border-none h-16 rounded-2xl px-6 font-bold shadow-sm focus:ring-2 focus:ring-primary outline-none" />
                    </div>

                    <div className="space-y-2">
                         <label className="text-xs font-black uppercase text-slate-400 tracking-tighter">Your Message</label>
                         <textarea rows={5} placeholder="How can we help you?" className="w-full bg-white border-none rounded-2xl p-6 font-bold shadow-sm focus:ring-2 focus:ring-primary outline-none resize-none"></textarea>
                    </div>
                </div>

                <button className="w-full bg-slate-900 text-white py-5 rounded-[30px] font-black text-xl flex items-center justify-center gap-3 hover:translate-y-[-2px] hover:shadow-2xl active:translate-y-[0px] transition-all">
                    Send Message <Send className="w-6 h-6" />
                </button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <div className="mt-32 h-[500px] w-full rounded-[60px] overflow-hidden shadow-2xl relative border-8 border-white">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63155362954!2d79.773803!3d6.927079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596b0c3b2d9f%3A0x94a5c7e2e1f3b2d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                width="100%"
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-10 left-10 bg-white p-6 rounded-[30px] shadow-2xl max-w-sm hidden md:block border-2 border-slate-50">
                <h4 className="font-black text-xl mb-2">Visit Our Headquarters</h4>
                <p className="text-slate-500 text-sm">Our main office is located in the heart of NYC, ready to welcome you for any custom trip arrangements.</p>
            </div>
        </div>
      </div>
    </main>
  );
}
