import { motion } from 'motion/react';
import { CheckCircle2, Zap } from 'lucide-react';

const tiers = [
  {
    name: "Starter",
    for: "For businesses under $500k/yr.",
    price: "Custom",
    timeline: "2-week launch",
    features: [
      "Custom Landing Page",
      "Basic Local SEO",
      "Lead Tracking Setup",
      "Monthly Reporting"
    ],
    popular: false
  },
  {
    name: "Growth",
    for: "For businesses scaling to $1M+.",
    price: "Custom",
    timeline: "4-week launch",
    features: [
      "Full Website Build",
      "AI PPC Management",
      "Advanced Local SEO",
      "Call Tracking & Recording",
      "Bi-weekly Strategy Calls"
    ],
    popular: true
  },
  {
    name: "Scale",
    for: "For established multi-location operators.",
    price: "Custom",
    timeline: "6-week launch",
    features: [
      "Custom Web App / Portal",
      "Omnichannel Ad Campaigns",
      "Dominant Regional SEO",
      "Custom CRM Integration",
      "Dedicated Account Manager"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 border-b-dashed-custom bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-soft-white mb-4">
            Simple, transparent pricing.
          </h2>
          <p className="text-soft-white/60 text-lg max-w-2xl mx-auto">
            Choose the tier that fits your current revenue stage. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative p-8 rounded-2xl bg-charcoal-100 border transition-all duration-300 flex flex-col ${
                tier.popular 
                  ? 'border-emerald shadow-[0_0_30px_rgba(15,106,75,0.15)] scale-105 z-10' 
                  : 'border-charcoal-300 hover:border-emerald/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald text-soft-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(15,106,75,0.5)]">
                  <Zap className="w-3 h-3" />
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-soft-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-soft-white/60 mb-6 h-10">
                  {tier.for}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-bold text-soft-white">
                    {tier.price}
                  </span>
                </div>
                <p className="text-xs font-medium text-emerald mt-2 uppercase tracking-wider">
                  {tier.timeline}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-soft-white/80">
                    <CheckCircle2 className="w-5 h-5 text-emerald shrink-0" />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#book" 
                className={`w-full py-4 text-center text-sm font-semibold rounded-md transition-all ${
                  tier.popular 
                    ? 'bg-emerald hover:bg-emerald-light text-soft-white glow-emerald-hover' 
                    : 'bg-charcoal-200 hover:bg-charcoal-300 text-soft-white border border-charcoal-300'
                }`}
              >
                Book a Discovery Call
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
