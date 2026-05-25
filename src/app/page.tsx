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
