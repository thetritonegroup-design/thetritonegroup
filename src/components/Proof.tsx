import { motion } from 'motion/react';
import { ArrowUpRight, Building2, Wrench } from 'lucide-react';

const metrics = [
  { label: "Call Volume", value: "+42%" },
  { label: "Average ROAS", value: "2.1x" },
  { label: "Cost Per Lead", value: "-28%" }
];

const caseStudies = [
  {
    icon: <Wrench className="w-5 h-5 text-emerald" />,
    industry: "Plumbing Co.",
    problem: "Struggled with low-quality leads and high ad spend.",
    approach: "Deployed AI Search + New Landing Page.",
    result: "3x booked jobs in 60 days."
  },
  {
    icon: <Building2 className="w-5 h-5 text-emerald" />,
    industry: "Roofing Pros",
    problem: "Zero local visibility despite high ad spend.",
    approach: "Rebuilt SEO & Tracking infrastructure.",
    result: "Dominating local search pack."
  }
];

export default function Proof() {
  return (
    <section id="proof" className="py-24 md:py-32 border-b-dashed-custom bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-soft-white mb-4">
            Real results for local businesses.
          </h2>
          <p className="text-soft-white/60 text-lg max-w-2xl mx-auto">
            We don't deal in vanity metrics. We measure success by booked jobs and revenue.
          </p>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-charcoal-100 border border-charcoal-300 flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-emerald mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-soft-white/70 uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {caseStudies.map((study, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              className="group relative p-8 rounded-2xl bg-charcoal-100 border border-charcoal-300 hover:border-emerald/50 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-charcoal-200 border border-charcoal-300 flex items-center justify-center">
                    {study.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-soft-white">
                    {study.industry}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-soft-white/30 group-hover:text-emerald transition-colors" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-medium text-soft-white/40 uppercase tracking-wider mb-1">Problem</div>
                  <p className="text-sm text-soft-white/70">{study.problem}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-soft-white/40 uppercase tracking-wider mb-1">Approach</div>
                  <p className="text-sm text-soft-white/70">{study.approach}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-emerald uppercase tracking-wider mb-1">Result</div>
                  <p className="text-sm font-medium text-soft-white">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos Placeholder */}
        <div className="pt-12 border-t-dashed-custom border-charcoal-300">
          <p className="text-center text-sm font-medium text-soft-white/40 uppercase tracking-wider mb-8">
            Trusted by growing service businesses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Replace with actual logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-32 bg-charcoal-300 rounded animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
