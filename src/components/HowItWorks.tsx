import { motion } from 'motion/react';
import { Search, Code2, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-6 h-6 text-emerald" />,
    title: "1. Audit",
    desc: "We analyze your current digital presence and identify hidden revenue gaps.",
    bullets: ["Competitor analysis", "Conversion rate review", "Keyword opportunity mapping"]
  },
  {
    icon: <Code2 className="w-6 h-6 text-emerald" />,
    title: "2. Build",
    desc: "We deploy a conversion-optimized website and launch targeted AI ad campaigns.",
    bullets: ["Custom landing pages", "AI-driven ad copy", "Tracking & attribution setup"]
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-emerald" />,
    title: "3. Scale",
    desc: "We continuously optimize bids, keywords, and conversion rates to maximize ROI.",
    bullets: ["Predictive bid adjustments", "A/B testing", "Monthly strategy reviews"]
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 border-b-dashed-custom bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-soft-white mb-4">
            A proven system for local services.
          </h2>
          <p className="text-soft-white/60 text-lg max-w-2xl mx-auto">
            No guesswork. Just a repeatable framework designed to turn clicks into calls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] border-t-dashed-custom border-charcoal-300 z-0" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-charcoal-200 border border-charcoal-300 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(15,106,75,0.1)]">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-display font-semibold text-soft-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-soft-white/60 text-sm leading-relaxed mb-6 max-w-xs">
                {step.desc}
              </p>

              <ul className="space-y-2 text-left w-full max-w-xs">
                {step.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2 text-xs text-soft-white/50">
                    <div className="w-1 h-1 rounded-full bg-emerald shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
