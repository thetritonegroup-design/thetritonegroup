import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-3">
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="16" r="5" fill="var(--color-emerald)"/>
      <path d="M16 34L28 14" stroke="var(--color-emerald)" strokeWidth="10" strokeLinecap="round"/>
    </svg>
    <div className="flex flex-col justify-center -space-y-0.5">
      <span className="font-sans font-bold text-[22px] leading-none tracking-tight text-soft-white">Tritone</span>
      <span className="font-sans font-bold text-[22px] leading-none tracking-tight text-soft-white">Group</span>
    </div>
  </div>
);

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian/80 backdrop-blur-md border-b-dashed-custom">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-soft-white/70">
          <a href="#services" className="hover:text-soft-white transition-colors">Services</a>
          <a href="#proof" className="hover:text-soft-white transition-colors">Proof</a>
          <a href="#pricing" className="hover:text-soft-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-soft-white transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="#book" 
            className="px-5 py-2.5 bg-emerald hover:bg-emerald-light text-soft-white text-sm font-semibold rounded-md transition-all glow-emerald-hover border border-emerald-light/20"
          >
            Book a Call
          </a>
        </div>

        <button className="md:hidden text-soft-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
