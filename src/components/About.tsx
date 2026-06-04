'use client';
import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1);

  return (
    <section id="nosotros" className="relative py-20 md:py-28" style={{ background: '#EFF5FA' }}>
      {/* Gráfico de fondo – lado izquierdo, sangra hacia Process, igual que Figma */}
      <div
        className="hidden md:flex absolute items-center justify-center pointer-events-none select-none opacity-30"
        style={{ '--float-dur': '9s', top: '-24.52%', right: '80.06%', left: '-0.88%', aspectRatio: '283 / 674.805', containerType: 'size' } as React.CSSProperties}
      >
        <div className="flex-none rotate-90" style={{ height: '100cqw', width: '100cqh' }}>
          <img src="/bg-about.svg" alt="" className="absolute block inset-0 max-w-none w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left */}
        <div ref={leftRef} className={`fade-left ${leftVisible ? 'visible' : ''}`}>
          <p className="text-[#E8541A] text-xs font-semibold uppercase tracking-widest mb-4">
            Sobre Nosotros
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A6B] leading-tight mb-8">
            El propósito detrás de la profesión
          </h2>

          {/* Quote block */}
          <div className="bg-[#1B3A6B] rounded-2xl px-7 py-6 mb-6">
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
            <WhatsAppIcon />
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
          >
            {/* Imagen – se desvanece en hover */}
            <Image
              src="/image-section-5.png"
              alt="Clínica Audivia - Ciudad Quesada"
              width={700}
              height={500}
              className="w-full h-auto block transition-opacity duration-500 group-hover:opacity-0"
            />

            {/* Mapa incrustado – aparece en hover (solo visual, sin interacción) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <iframe
                src="https://maps.google.com/maps?q=Frente+Emergencias+Hospital+San+Carlos+Ciudad+Quesada+Costa+Rica&output=embed&z=17&hl=es"
                className="w-full h-full border-0 pointer-events-none"
                title="Ubicación Clínica Audivia"
                loading="lazy"
              />
            </div>

            {/* Badge "Conoce nuestra clínica" – se oculta en hover */}
            <div className="badge-float absolute top-5 left-5 bg-white border-2 border-[#E8541A] rounded-2xl shadow-lg px-5 py-3 text-center transition-opacity duration-300 group-hover:opacity-0">
              <p className="text-[#1B3A6B] font-bold text-sm leading-snug">
                Conoce nuestra<br />clínica
              </p>
            </div>

            {/* Indicador – aparece en hover */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="bg-white text-[#1B3A6B] text-xs font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5">
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
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
