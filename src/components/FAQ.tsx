import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "How long until I see results?",
    a: "PPC campaigns typically generate leads within days. SEO is a long-term play, usually showing significant movement in 3-6 months. Websites start converting immediately upon launch."
  },
  {
    q: "What is the minimum ad spend?",
    a: "We recommend starting at $1,500/mo to give our AI systems enough data to optimize bids and target the highest-intent customers in your local area."
  },
  {
    q: "Do I own my website and data?",
    a: "Yes. You own 100% of your assets, ad accounts, analytics, and data from day one. We believe in earning your business every month, not holding your assets hostage."
  },
  {
    q: "How exactly do you use AI?",
    a: "We use AI for predictive bidding, keyword clustering, and A/B testing ad copy—not for writing generic website content. It's a tool to scale performance, not a replacement for strategy."
  },
  {
    q: "How often do we get reports?",
    a: "You get access to a live, real-time ROI dashboard 24/7. Additionally, we provide a concise monthly strategy review to discuss performance and next steps."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 border-b-dashed-custom bg-obsidian relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-soft-white mb-4">
            Frequently asked questions.
          </h2>
          <p className="text-soft-white/60 text-lg">
            Clear answers to common objections.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-charcoal-300 rounded-xl bg-charcoal-100 overflow-hidden transition-colors hover:border-charcoal-300/80"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-display font-medium text-soft-white pr-8">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-emerald transition-transform duration-300 shrink-0 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-soft-white/60 leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
