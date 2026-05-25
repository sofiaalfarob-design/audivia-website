'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: '/icon-service-1.png',
    title: 'Evaluaciones profesionales',
    description: 'Un diagnóstico preciso de Audiometría Clínica y Impedanciometría.',
    benefit: 'Conoce el estado real de tu audición',
  },
  {
    icon: '/icon-service-2.png',
    title: 'Limpieza de oídos',
    description: 'Elimina la obstrucción y recupera la frescura y claridad de forma inmediata y sin dolor.',
    benefit: 'Alivio inmediato y profesional',
  },
  {
    icon: '/icon-service-3.png',
    title: 'Adaptación de audífonos',
    description: 'Tecnología de alta fidelidad, discreta y personalizada que se ajusta a tu ritmo, no al revés.',
    benefit: 'Comodidad y seguimiento continuo',
  },
  {
    icon: '/icon-service-4.png',
    title: 'Tamizaje auditivo',
    description: 'Protegemos la salud de los más pequeños y adultos mayores para detectar a tiempo cualquier riesgo.',
    benefit: 'Prevención para todas las edades',
  },
];

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05);

  return (
    <section id="servicios" className="relative py-20 md:py-28" style={{ background: '#EFF5FA' }}>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`fade-up ${headerVisible ? 'visible' : ''} text-center mb-14`}
        >
          <p className="text-[#E8541A] text-xs font-semibold uppercase tracking-widest mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3A6B] mb-4">
            Servicios diseñados para tu vida
          </h2>
          <p className="text-gray-500 text-lg">
            No vendemos dispositivos;{' '}
            <strong className="text-[#1B3A6B]">devolvemos momentos</strong>
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-card fade-up ${cardsVisible ? 'visible' : ''} bg-white rounded-2xl p-7 flex flex-col`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#E8541A] flex items-center justify-center mb-5 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${service.icon}?v=2`} alt={service.title} width={32} height={32} className="object-contain" />
              </div>

              <h3 className="text-[#1B3A6B] font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{service.description}</p>

              {/* Benefit */}
              <p className="text-[#E8541A] text-sm font-semibold mb-5">✓ {service.benefit}</p>

              {/* CTA */}
              <a
                href="https://wa.me/50686154830"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto border-2 border-[#1B3A6B] text-[#1B3A6B] text-sm font-semibold py-2.5 rounded-full text-center hover:bg-[#1B3A6B] hover:text-white transition-all duration-300"
              >
                Consultar por WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
