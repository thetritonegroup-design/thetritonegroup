import { motion } from 'motion/react';
import { Target, MousePointerClick, BarChart3, CheckCircle2 } from 'lucide-react';

const tiles = [
  {
    icon: <Target className="w-6 h-6 text-emerald" />,
    title: "AI-Driven Lead Gen",
    desc: "Smart PPC & SEO systems that target high-intent customers.",
    bullets: ["Automated bid management", "Hyper-local SEO targeting", "Lower Cost Per Lead (CPL)"]
  },
  {
    icon: <MousePointerClick className="w-6 h-6 text-emerald" />,
    title: "Conversion-First Websites",
    desc: "Engineered to turn traffic into qualified phone calls.",
    bullets: ["Lightning-fast load times", "Mobile-optimized booking flows", "Built-in trust signals"]
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-emerald" />,
    title: "Transparent Tracking",
    desc: "Know exactly where every dollar goes and every lead comes from.",
    bullets: ["Real-time ROI dashboard", "Call tracking & recording", "Clear attribution models"]
  }
];

export default function ValueProp() {
  return (
    <section className="py-24 md:py-32 border-b-dashed-custom bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-dotted-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-soft-white mb-4">
            Built for measurable growth.
          </h2>
          <p className="text-soft-white/60 text-lg max-w-2xl mx-auto">
            We don't just build websites. We build systems that generate predictable revenue.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {tiles.map((tile, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-2xl bg-charcoal-100 border border-charcoal-300 hover:border-emerald/50 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              
              <div className="w-12 h-12 rounded-lg bg-charcoal-200 border border-charcoal-300 flex items-center justify-center mb-6">
                {tile.icon}
              </div>
              
              <h3 className="text-xl font-display font-semibold text-soft-white mb-3">
                {tile.title}
              </h3>
              
              <p className="text-soft-white/60 text-sm leading-relaxed">
                {tile.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Value Prop Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {tiles.map((tile, idx) => (
            <motion.div 
              key={`details-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="px-4 border-l-dashed-custom border-charcoal-300"
            >
              <ul className="space-y-4">
                {tile.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-soft-white/70">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                    <span className="leading-tight">{bullet}</span>
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
