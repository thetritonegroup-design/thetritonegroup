import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden border-b-dashed-custom">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Animated Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-emerald/10 rounded-full blur-[120px] pointer-events-none" 
      />
      
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute top-1/3 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-emerald-light/5 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Animated Grid Shimmer */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none opacity-50"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-charcoal-300 bg-charcoal-200/50 backdrop-blur-sm text-xs font-medium text-soft-white/80 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            Built for local service businesses
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[80px] font-display font-bold tracking-tighter leading-[1.05] text-soft-white mb-8"
          >
            Turn Clicks Into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light to-emerald">Booked Jobs</span> With AI.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-soft-white/60 max-w-2xl mb-12 font-light leading-relaxed"
          >
            We build high-converting websites and manage PPC/SEO to scale local service businesses in NZ & AU. Measurable ROI, simple reporting.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#book" 
              className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-emerald hover:bg-emerald-light text-soft-white text-base font-semibold rounded-md transition-all glow-emerald-hover border border-emerald-light/20"
            >
              Book a Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#proof" 
              className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-4 bg-charcoal-200 hover:bg-charcoal-300 text-soft-white text-base font-medium rounded-md transition-all border border-charcoal-300"
            >
              <PlayCircle size={18} className="text-soft-white/70 group-hover:text-soft-white transition-colors" />
              See Results
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
