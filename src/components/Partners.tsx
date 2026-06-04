'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const partners = [
  { src: '/audinsa-logo-parner.png',  alt: 'Audinsa - Clínica Auditiva', height: 80 },
  { src: '/nuear-logo-parner.png',    alt: 'NuEar',                      height: 44 },
  { src: '/audibel-logo-parner.png',  alt: 'Audibel',                    height: 80 },
];

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''} text-center`}>
          <h3 className="text-[#1B3A6B] font-bold text-xl mb-12">Partners de Audivia</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {partners.map((p, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={p.src}
                alt={p.alt}
                style={{ height: p.height, width: 'auto' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
