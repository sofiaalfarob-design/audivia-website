'use client';
import React from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const painPoints = [
  '¿Subes el volumen de la TV más de lo normal?',
  '¿Pides constantemente que te repitan lo que acaban de decir?',
  '¿Sientes esa molestia de "oído tapado" que no desaparece?',
];

export default function PainSection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-20 md:py-28 bg-white">
      {/* Gráfico de fondo – lado izquierdo, rotado 90°, igual que Figma */}
      <div
        className="hidden md:flex absolute items-center justify-center pointer-events-none select-none opacity-30"
        style={{ '--float-dur': '11s', top: 'calc(-64.92% - 230px)', right: '86.26%', left: '-0.29%', aspectRatio: '190.703 / 1157', containerType: 'size', transform: 'scale(0.9)', transformOrigin: 'top left' } as React.CSSProperties}
      >
        <div className="flex-none rotate-90" style={{ height: '100cqw', width: '100cqh' }}>
          <img src="/bg-pain.svg" alt="" loading="lazy" className="absolute block inset-0 max-w-none w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left – Doctor examining patient */}
        <div
          ref={leftRef}
          className={`fade-left ${leftVisible ? 'visible' : ''} flex justify-center order-2 md:order-1`}
        >
          <div className="relative">
            {/* Blue circle */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] bg-navy rounded-full overflow-hidden">
              <Image
                src="/image0section-2.png"
                alt="Audióloga examinando a paciente"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Badge "Mejor proceso" */}
            <div className="badge-float absolute top-8 -left-4 sm:-left-8 bg-white border-2 border-orange rounded-xl shadow-lg px-4 py-2">
              <p className="text-navy font-bold text-sm">Mejor proceso</p>
            </div>

            {/* Badge "Audífonos con 2 años de garantía" */}
            <div className="absolute bottom-8 -right-2 sm:-right-6 bg-white border-2 border-orange rounded-xl shadow-lg px-4 py-3 max-w-[180px]">
              <p className="text-navy font-bold text-sm leading-snug">Audífonos con 2 años de garantía</p>
            </div>
          </div>
        </div>

        {/* Right – Pain points */}
        <div
          ref={rightRef}
          className={`fade-right ${rightVisible ? 'visible' : ''} order-1 md:order-2`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-6">
            El silencio no debería costarte tu conexión con los demás
          </h2>
          <p className="text-gray-500 mb-5 leading-relaxed">
            ¿Notas que el mundo suena "lejos"? Si te identificas con esto, no estás solo/a:
          </p>
          <ul className="space-y-3 mb-6">
            {painPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                  <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 mb-4 leading-relaxed">
            No son solo síntomas. Son pequeñas barreras que te aíslan de tus momentos favoritos en familia.
          </p>
          <p className="text-gray-500 mb-8 leading-relaxed">
            En Audivia, te devolvemos la claridad. Recuperar tu audición en Ciudad Quesada es el primer paso hacia una vida plena, segura y conectada.
          </p>
          <a
            href="https://wa.me/50686154823?text=Hola%20Karol%2C%20tengo%20algunas%20dudas%20sobre%20los%20servicios%20de%20Audivia%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange w-full sm:w-auto flex sm:inline-flex items-center justify-center gap-2 text-white px-7 py-4 rounded-full font-semibold text-sm"
          >
            <PhoneIcon />
            Agendar mi Evaluación Auditiva
          </a>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}
