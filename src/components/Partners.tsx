'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const partners = [
  { src: '/audinsa-logo-parner.png', alt: 'Audinsa - Clínica Auditiva', height: 100, w: 1600, h: 946 },
  { src: '/nuear-logo-parner.png',   alt: 'NuEar',                      height: 58,  w: 360,  h: 140 },
  { src: '/audibel-logo-parner.png', alt: 'Audibel',                    height: 100, w: 588,  h: 318 },
];

export default function Partners() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''} text-center`}>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-28">
            {partners.map((p, i) => (
              <Image
                key={i}
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                style={{ height: p.height, width: 'auto', mixBlendMode: 'multiply' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
