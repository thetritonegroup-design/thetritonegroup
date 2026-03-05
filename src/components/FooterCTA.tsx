import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section id="book" className="py-32 md:py-48 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter leading-[1.05] text-soft-white mb-6"
        >
          Ready to dominate your <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light to-emerald">local market?</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-soft-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Stop losing jobs to competitors with worse service but better marketing. Let's build a predictable revenue engine.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="mailto:hello@tritonegroup.com" 
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-10 py-5 bg-emerald hover:bg-emerald-light text-soft-white text-lg font-bold rounded-md transition-all glow-emerald-hover border border-emerald-light/20"
          >
            Book a Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="mailto:hello@tritonegroup.com" 
            className="w-full sm:w-auto group flex items-center justify-center gap-2 px-10 py-5 bg-charcoal-200 hover:bg-charcoal-300 text-soft-white text-lg font-medium rounded-md transition-all border border-charcoal-300"
          >
            <Mail size={20} className="text-soft-white/70 group-hover:text-soft-white transition-colors" />
            Email Us
          </a>
        </motion.div>
      </div>
      
      {/* Footer Bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t-dashed-custom border-charcoal-300 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-soft-white/40">
          <p>&copy; {new Date().getFullYear()} Tritone Group. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-soft-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-soft-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
