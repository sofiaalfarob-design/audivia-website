import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainSection from '@/components/PainSection';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Partners from '@/components/Partners';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-navy focus:px-4 focus:py-3 focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-navy"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <Hero />
      <PainSection />
      <Services />
      <Process />
      <About />
      <Partners />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
