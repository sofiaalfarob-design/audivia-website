'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const featured = {
  icon: '/icon-service-3.png',
  title: 'Adaptación de audífonos',
  description: 'Tecnología de alta fidelidad, discreta y personalizada que se ajusta a tu ritmo, no al revés.',
  benefit: 'Comodidad y seguimiento continuo',
  link: 'https://wa.me/50686154823?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20*adaptaci%C3%B3n%20de%20aud%C3%ADfonos*%20en%20Audivia.%20%C2%BFQu%C3%A9%20opciones%20manejan%20y%20cu%C3%A1l%20ser%C3%ADa%20el%20proceso%3F',
};

const services = [
  {
    icon: '/icon-service-1.png',
    title: 'Evaluaciones profesionales',
    description: 'Un diagnóstico preciso de Audiometría Clínica y Impedanciometría.',
    benefit: 'Conoce el estado real de tu audición',
    link: 'https://wa.me/50686154823?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20las%20*evaluaciones%20auditivas*%20(audiometr%C3%ADa%20e%20impedanciometr%C3%ADa)%20que%20ofrecen%20en%20Audivia.',
  },
  {
    icon: '/icon-service-2.png',
    title: 'Limpieza de oídos',
    description: 'Elimina la obstrucción y recupera la frescura y claridad de forma inmediata y sin dolor.',
    benefit: 'Alivio inmediato y profesional',
    link: 'https://wa.me/50686154823?text=Hola%2C%20quisiera%20consultar%20sobre%20el%20servicio%20de%20*limpieza%20de%20o%C3%ADdos*%20en%20Audivia.%20%C2%BFC%C3%B3mo%20funciona%20y%20cu%C3%A1l%20es%20el%20costo%3F',
  },
  {
    icon: '/icon-service-4.png',
    title: 'Tamizaje auditivo',
    description: 'Protegemos la salud de los más pequeños y adultos mayores para detectar a tiempo cualquier riesgo.',
    benefit: 'Prevención para todas las edades',
    link: 'https://wa.me/50686154823?text=Hola%2C%20quisiera%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20*tamizaje%20auditivo*%20en%20Audivia%2C%20tanto%20para%20ni%C3%B1os%20como%20para%20adultos%20mayores.',
  },
];

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05);

  return (
    <section id="servicios" className="relative py-20 md:py-28 bg-light-bg">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`fade-up ${headerVisible ? 'visible' : ''} text-center mb-14`}
        >
          <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-3">
            Nuestros Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4">
            Servicios diseñados para tu vida
          </h2>
          <p className="text-gray-500 text-lg">
            No vendemos dispositivos;{' '}
            <strong className="text-navy">devolvemos momentos</strong>
          </p>
        </div>

        {/* Grid: featured full-width + 3 regular cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Featured card – Adaptación de audífonos */}
          <div
            className={`service-card fade-up ${cardsVisible ? 'visible' : ''} col-span-1 sm:col-span-2 lg:col-span-3 bg-navy rounded-2xl p-7 sm:p-9 flex flex-col sm:flex-row sm:items-center gap-7`}
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
              <Image
                src={featured.icon}
                alt={featured.title}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-2">
                Servicio principal
              </p>
              <h3 className="text-white font-bold text-xl mb-2">{featured.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{featured.description}</p>
            </div>
            <div className="flex flex-col sm:items-end gap-3 flex-shrink-0">
              <p className="text-orange text-sm font-semibold">✓ {featured.benefit}</p>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-orange text-white px-6 py-3 rounded-full font-semibold text-sm text-center whitespace-nowrap"
              >
                Consulta por el servicio
              </a>
            </div>
          </div>

          {/* Regular cards */}
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-card fade-up ${cardsVisible ? 'visible' : ''} bg-white rounded-2xl p-7 flex flex-col`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-orange flex items-center justify-center mb-5 overflow-hidden">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="text-navy font-bold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{service.description}</p>
              <p className="text-orange text-sm font-semibold mb-5">✓ {service.benefit}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy mt-auto text-sm font-semibold py-2.5 rounded-full text-center"
              >
                Consulta por el servicio
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
