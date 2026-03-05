import { motion } from 'motion/react';
import { LayoutTemplate, Megaphone, SearchCheck } from 'lucide-react';

const services = [
  {
    icon: <LayoutTemplate className="w-6 h-6 text-emerald" />,
    title: "Website Design",
    what: "High-performance landing pages and sites.",
    who: "For service businesses needing a digital storefront that converts.",
    outcome: "Drives qualified calls and form fills."
  },
  {
    icon: <Megaphone className="w-6 h-6 text-emerald" />,
    title: "PPC Management",
    what: "AI-optimized Google & Meta ads.",
    who: "For businesses wanting immediate, scalable lead flow.",
    outcome: "Drives high-intent traffic instantly."
  },
  {
    icon: <SearchCheck className="w-6 h-6 text-emerald" />,
    title: "Local SEO",
    what: "Data-driven organic search dominance.",
    who: "For owners looking for long-term, sustainable growth.",
    outcome: "Drives consistent, free local leads."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-b-dashed-custom bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-dotted-pattern opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-soft-white mb-4">
            Services built for scale.
          </h2>
          <p className="text-soft-white/60 text-lg max-w-2xl mx-auto">
            We focus on three core pillars powered by AI systems to dominate your local market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
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
                {service.icon}
              </div>
              
              <h3 className="text-xl font-display font-semibold text-soft-white mb-6">
                {service.title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium text-soft-white/40 uppercase tracking-wider mb-1">What it is</div>
                  <p className="text-sm text-soft-white/70">{service.what}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-soft-white/40 uppercase tracking-wider mb-1">Who it's for</div>
                  <p className="text-sm text-soft-white/70">{service.who}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-emerald uppercase tracking-wider mb-1">Outcome</div>
                  <p className="text-sm font-medium text-soft-white">{service.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
