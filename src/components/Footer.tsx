"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Zap } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-[3rem] p-12 md:p-20 border border-white/10 relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-electric-red/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-8 group">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-electric-red/50 transition-colors">
                  <Zap className="w-6 h-6 text-electric-red" />
                </div>
                <span className="text-2xl font-black tracking-tighter">
                  MEZZOLD<span className="text-electric-red">STUDIO</span>
                </span>
              </Link>
              <p className="text-white/40 max-w-sm mb-10 text-lg leading-relaxed">
                Engineering high-performance digital solutions for the next generation of SaaS and enterprise platforms.
              </p>
              <div className="flex gap-4">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <Link 
                    key={i} 
                    href="#" 
                    className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <Icon size={20} />
                  </Link>
                ))}
              </div>
            </div>
  
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Studio</h4>
              <ul className="space-y-4 text-white/40">
                <li><Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Process</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-4 text-white/40">
                <li><Link href="#" className="hover:text-white transition-colors">hello@mezzold.studio</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Schedule a Call</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              </ul>
            </div>
          </div>
  
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-sm text-white/30 relative z-10">
            <p>© 2026 Mezzold Studio. All rights reserved.</p>
            <div className="flex gap-10 mt-6 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
