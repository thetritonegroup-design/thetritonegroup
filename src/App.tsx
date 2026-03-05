import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import HowItWorks from './components/HowItWorks';
import Proof from './components/Proof';
import Services from './components/Services';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-soft-white font-sans selection:bg-emerald selection:text-obsidian">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <HowItWorks />
        <Proof />
        <Services />
        <Pricing />
        <FAQ />
      </main>
      <FooterCTA />
    </div>
  );
}
