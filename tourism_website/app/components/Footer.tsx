import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">WanderCeylon</h3>
          <p className="text-slate-400">
            Making your travel dreams come true since 2010. Explore the world with confidence and comfort.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors"><Youtube className="w-5 h-5" /></Link>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/destinations" className="hover:text-primary transition-colors">Destinations</Link></li>
            <li><Link href="/packages" className="hover:text-primary transition-colors">Tour Packages</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold">Contact Info</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> +94 77 123 4567</li>
            <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> info@wanderceylon.com</li>
            <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /> Colombo, Sri Lanka</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <p className="text-slate-400 text-sm">Subscribe to get the latest travel news and deals.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-slate-800 border-none rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary outline-none"
            />
            <button className="bg-primary px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} WanderCeylon. All rights reserved.
      </div>
    </footer>
  );
}
