'use client';
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    number: '1',
    title: 'Evaluación Integral en Ciudad Quesada',
    description:
      'Comenzamos con una valoración profunda de tu capacidad auditiva en nuestra clínica. Sin prisas, comprendiendo tu estilo de vida y necesidades actuales.',
  },
  {
    number: '2',
    title: 'Plan de Solución a tu Medida',
    description:
      'No creemos en soluciones genéricas. Diseñamos un plan personalizado, ya sea mediante una limpieza profesional o la recomendación de audífonos de última generación ajustados a tu medida.',
  },
  {
    number: '3',
    title: 'Acompañamiento y Adaptación',
    description:
      'La tecnología es solo el principio. La Dra. Karol Vega te guía en el proceso de adaptación, asegurando que te sientas cómodo, seguro y, sobre todo, que recuperes la nitidez que habías perdido.',
  },
];

export default function Process() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.1);

  return (
    <section id="proceso" className="relative py-20 md:py-28 bg-white">
      {/* Gráfico de fondo – esquina superior derecha */}
      <div
        className="hidden md:flex absolute items-center justify-center pointer-events-none select-none opacity-30"
        style={{ top: '-33%', right: '0', left: '79.69%', aspectRatio: '276 / 398.174', containerType: 'size' } as React.CSSProperties}
      >
        <div className="flex-none rotate-90" style={{ height: '100cqw', width: '100cqh' }}>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/bg-services.svg`} alt="" loading="lazy" className="absolute block inset-0 max-w-none w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left */}
        <div ref={leftRef} className={`fade-left ${leftVisible ? 'visible' : ''}`}>
          <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-4">
            Nuestro Proceso
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-6">
            Tu salud auditiva en manos expertas
          </h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            En Audivia, no tratamos solo oídos;{' '}
            <strong className="text-navy">escuchamos a las personas</strong>. Sabemos que
            cada historia es única y merece una respuesta a medida.
          </p>
          <p className="text-gray-500 leading-relaxed mb-4">
            Bajo la dirección de la Dra. Karol Vega, especialista en audiología, combinamos{' '}
            <strong className="text-navy">
              rigor científico con un trato cálido y cercano que te hará sentir en casa
            </strong>{' '}
            desde que cruzas nuestra puerta en Ciudad Quesada.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            Nuestro compromiso va más allá de la tecnología:{' '}
            <strong className="text-navy">
              te acompañamos en cada etapa de tu proceso
            </strong>{' '}
            para asegurar que vuelvas a disfrutar de los sonidos que le dan sentido a tu vida.
          </p>
          <a
            href="https://wa.me/50686154823?text=Hola%20Karol%2C%20me%20gustar%C3%ADa%20iniciar%20mi%20proceso%20de%20evaluaci%C3%B3n%20auditiva%20en%20Audivia.%20%C2%BFPodr%C3%ADa%20agendar%20una%20cita%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange w-full sm:w-auto flex sm:inline-flex items-center justify-center gap-2 text-white px-7 py-4 rounded-full font-semibold text-sm"
          >
            <PhoneIcon />
            Agendar mi Evaluación Auditiva
          </a>
        </div>

        {/* Right – Steps card */}
        <div ref={rightRef} className={`fade-right ${rightVisible ? 'visible' : ''}`}>
          <div className="bg-light-bg rounded-3xl p-8 md:p-10">
            <h3 className="text-navy font-bold text-xl mb-8">
              Tu camino hacia una mejor audición en 3 pasos sencillos:
            </h3>
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div
                      className="step-number w-11 h-11 rounded-full bg-orange flex items-center justify-center text-white font-extrabold text-lg"
                      style={{ '--step-delay': `${i * 0.8}s` } as React.CSSProperties}
                    >
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-navy font-bold mb-2">{step.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
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
