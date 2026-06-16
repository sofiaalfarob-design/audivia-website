'use client';
import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const [mapLoaded, setMapLoaded] = React.useState(false);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1);

  return (
    <section id="nosotros" className="relative py-20 md:py-28 bg-light-bg">
      {/* Gráfico de fondo – lado izquierdo, sangra hacia Process, igual que Figma */}
      <div
        className="hidden md:flex absolute items-center justify-center pointer-events-none select-none opacity-30"
        style={{ '--float-dur': '9s', top: '-24.52%', right: '80.06%', left: '-0.88%', aspectRatio: '283 / 674.805', containerType: 'size' } as React.CSSProperties}
      >
        <div className="flex-none rotate-90" style={{ height: '100cqw', width: '100cqh' }}>
          <img src="/bg-about.svg" alt="" loading="lazy" className="absolute block inset-0 max-w-none w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left */}
        <div ref={leftRef} className={`fade-left ${leftVisible ? 'visible' : ''}`}>
          <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-4">
            Sobre Nosotros
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-8">
            El propósito detrás de la profesión
          </h2>

          {/* Quote block */}
          <div className="bg-navy rounded-2xl px-7 py-6 mb-6">
            <p className="text-white italic text-base leading-relaxed">
              &ldquo;Soy Karol Vega, y fundé Audivia con una convicción clara:{' '}
              <strong>Escuchar bien también es calidad de vida.</strong>&rdquo;
            </p>
          </div>

          <p className="text-gray-500 leading-relaxed mb-4">
            Mi objetivo no es solo tratar una condición médica, sino devolverte la seguridad de comunicarte con
            tus hijos y sentirte presente en Ciudad Quesada.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Mi experiencia como especialista está al servicio de tu bienestar.
          </p>

          <a
            href="https://maps.google.com/?q=Frente+al+Hospital+San+Carlos+Ciudad+Quesada+Edificio+Amore+Consultorio+3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange w-full sm:w-auto flex sm:inline-flex items-center justify-center gap-2 text-white px-7 py-4 rounded-full font-semibold text-sm"
          >
            Visita nuestra clínica
          </a>
        </div>

        {/* Right – Clinic photo */}
        <div ref={rightRef} className={`fade-right ${rightVisible ? 'visible' : ''} relative w-full`}>
          {/* Contenedor – hover muestra mapa, clic abre Google Maps */}
          <a
            href="https://maps.google.com/?q=Frente+al+Hospital+San+Carlos+Ciudad+Quesada+Edificio+Amore+Consultorio+3"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-3xl overflow-hidden w-full block group cursor-pointer"
            onMouseEnter={() => setMapLoaded(true)}
          >
            {/* Imagen – se desvanece en hover */}
            <Image
              src="/image-section-5.png"
              alt="Clínica Audivia - Ciudad Quesada"
              width={700}
              height={500}
              className="w-full h-auto block transition-opacity duration-500 group-hover:opacity-0"
            />

            {/* Mapa incrustado – se carga solo al primer hover y aparece en hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {mapLoaded && (
                <iframe
                  src="https://maps.google.com/maps?q=Frente+Emergencias+Hospital+San+Carlos+Ciudad+Quesada+Costa+Rica&output=embed&z=17&hl=es"
                  className="w-full h-full border-0 pointer-events-none"
                  title="Ubicación Clínica Audivia"
                  sandbox="allow-scripts allow-same-origin"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>

            {/* Badge "Conoce nuestra clínica" – se oculta en hover */}
            <div className="badge-float absolute top-5 left-5 bg-white border-2 border-orange rounded-2xl shadow-lg px-5 py-3 text-center transition-opacity duration-300 group-hover:opacity-0">
              <p className="text-navy font-bold text-sm leading-snug">
                Conoce nuestra<br />clínica
              </p>
            </div>

            {/* Indicador – aparece en hover */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="bg-white text-navy text-xs font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5">
                <MapPinIcon />
                Abrir en Google Maps
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
