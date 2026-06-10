'use client';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.05);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.05);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20 hero-bg">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div
          ref={leftRef}
          className={`fade-left ${leftVisible ? 'visible' : ''}`}
        >
          <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-5">
            Clínica de Audiología en Ciudad Quesada&nbsp;|&nbsp;Audivia – Karol Vega
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-navy leading-tight mb-6">
            Recupera tu audición<br />con la audióloga<br />
            <span className="text-navy">Karol Vega</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-3 leading-relaxed">
            Vuelve a ser parte de cada conversación con evaluaciones profesionales, limpieza de oídos y tecnología auditiva de vanguardia en San Carlos.
          </p>
          <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
            En Audivia, transformamos el silencio y la confusión en sonidos nítidos mediante un acompañamiento humano que entiende tu proceso desde el primer día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/50686154823?text=Hola%2C%20me%20interesa%20agendar%20una%20evaluaci%C3%B3n%20auditiva%20en%20Audivia.%20%C2%BFPodr%C3%ADa%20darme%20informaci%C3%B3n%20sobre%20disponibilidad%20y%20costo%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange w-full sm:w-auto flex items-center justify-center gap-2 text-white px-7 py-4 rounded-full font-semibold text-sm"
            >
              <PhoneIcon />
              Agendar mi Evaluación Auditiva
            </a>
            <a
              href="https://wa.me/50686154823?text=Hola%20Karol%2C%20tengo%20algunas%20dudas%20sobre%20los%20servicios%20de%20Audivia%20y%20quisiera%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </div>

        {/* Right – Doctor image */}
        <div
          ref={rightRef}
          className={`fade-right ${rightVisible ? 'visible' : ''} flex justify-center relative`}
        >
          <div className="relative">
            {/* Orange circle */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px] bg-orange rounded-full overflow-hidden">
              <Image
                src="/image-hero.png"
                alt="Dra. Karol Vega - Audióloga"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Experience badge */}
            <div className="badge-float absolute bottom-8 -right-4 sm:right-0 lg:-right-6 bg-white rounded-2xl shadow-xl px-5 py-4 text-center border border-gray-100">
              <p className="text-2xl lg:text-3xl font-extrabold text-navy">+ 5 años</p>
              <p className="text-gray-500 text-sm font-medium">de experiencia</p>
            </div>
          </div>
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
