'use client';
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tabs = [
  'Valoración y Exámenes Auditivos',
  'Audífonos (Aparatos Auditivos)',
  'Recetas de la CCSS',
  'La Clínica en Ciudad Quesada',
];

const faqData: Record<string, { q: string; a: string }[]> = {
  'Valoración y Exámenes Auditivos': [
    {
      q: '¿Cómo sé si necesito una evaluación auditiva?',
      a: 'Si nota dificultades para escuchar conversaciones, necesita subir el volumen de la TV, presenta zumbidos (tinnitus) o siente el oído tapado, es momento de una valoración auditiva en Ciudad Quesada. La detección temprana evita que la pérdida auditiva avance y mejora su calidad de vida.',
    },
    {
      q: '¿La evaluación auditiva duele?',
      a: 'No. Las pruebas de audición en nuestra clínica son completamente seguras, indoloras y no invasivas. Realizamos un estudio profesional para conocer el estado exacto de su salud auditiva de forma cómoda.',
    },
    {
      q: '¿Necesito cita previa para una consulta de audiología?',
      a: 'Sí. En Audivia trabajamos exclusivamente con cita previa para garantizarle una atención personalizada y sin esperas. Puede agendar su cita de audiología en San Carlos vía WhatsApp.',
    },
  ],
  'Audífonos (Aparatos Auditivos)': [
    {
      q: '¿Cómo sé si necesito aparatos auditivos?',
      a: 'Si le cuesta entender a los demás, evita eventos sociales por no escuchar bien o siente que las personas "hablan bajo", podría beneficiarse de un audífono moderno. Una evaluación profesional es el primer paso para determinar si un aparato auditivo es la solución correcta.',
    },
    {
      q: '¿Los audífonos son visibles?',
      a: 'La tecnología actual permite crear audífonos muy discretos y ergonómicos. Muchos modelos son tan pequeños que pasan desapercibidos, adaptándose perfectamente a su estilo de vida.',
    },
    {
      q: '¿Los audífonos modernos se conectan al celular?',
      a: 'Sí. Ofrecemos audífonos de alta tecnología con conectividad Bluetooth, permitiendo transmitir llamadas, música y audio directamente desde su celular u otros dispositivos.',
    },
    {
      q: '¿Qué pasa si ya utilicé audífonos y no tuve una buena experiencia?',
      a: 'Muchas malas experiencias se deben a una adaptación incorrecta. En Audivia, garantizamos una programación y ajuste preciso, asegurando que su aparato auditivo sea cómodo y efectivo.',
    },
    {
      q: '¿Ofrecen seguimiento tras la adaptación de audífonos?',
      a: 'Por supuesto. El seguimiento profesional es clave. Realizamos controles periódicos y ajustes personalizados para asegurar que su proceso de adaptación sea exitoso.',
    },
    {
      q: '¿Cuánto valen los audífonos?',
      a: 'El precio depende del grado de pérdida auditiva y la tecnología necesaria. Le invitamos a realizar una valoración auditiva en nuestra clínica en Ciudad Quesada para recomendarle la opción que mejor se ajuste a su caso y presupuesto.',
    },
  ],
  'Recetas de la CCSS': [
    {
      q: '¿Aceptan recetas de la CCSS?',
      a: 'Sí, en Audivia somos especialistas en el proceso de adaptación de audífonos con receta de la CCSS. Le brindamos asesoría y seguimiento durante todo el trámite.',
    },
    {
      q: '¿Qué debo hacer si ya tengo una receta de audífonos?',
      a: 'Contáctenos para orientarle. Nuestro equipo le guiará paso a paso para hacer efectiva su receta de la CCSS, facilitando la selección y adaptación de sus audífonos.',
    },
  ],
  'La Clínica en Ciudad Quesada': [
    {
      q: '¿Dónde se encuentran ubicados?',
      a: 'Estamos en Ciudad Quesada, San Carlos, frente a Emergencias del Hospital San Carlos, Edificio Amore (arriba de Farmacia La Villa, diagonal a Musmanni), consultorio 3. Ofrecemos atención profesional en nuestra clínica y contamos con servicios a domicilio en casos necesarios.',
    },
    {
      q: '¿Cuál es el horario de atención de Audivia?',
      a: 'Atendemos bajo cita previa para brindarle tiempo exclusivo. Escríbanos por WhatsApp para consultar disponibilidad de horarios en nuestra clínica auditiva.',
    },
    {
      q: '¿Atienden pacientes de otras zonas del país?',
      a: 'Sí, atendemos pacientes de todo Costa Rica que buscan un acompañamiento profesional y humano en su salud auditiva.',
    },
    {
      q: '¿Atienden a toda la población?',
      a: 'Brindamos servicios de audiología integral para niños, adultos y adultos mayores en San Carlos y la región.',
    },
    {
      q: '¿Qué métodos de pago aceptan?',
      a: 'Para su comodidad, aceptamos efectivo, tarjeta, Sinpe Móvil y transferencia bancaria.',
    },
  ],
};

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1);
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollAnimation(0.05);

  const items = faqData[activeTab] ?? [];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(0);
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-white">
      {/* Gráfico derecho – sangra hacia Partners, entre dos secciones */}
      <div
        className="hidden md:block absolute pointer-events-none select-none opacity-30"
        style={{
          '--float-dur': '8s',
          width: 'min(348px, 25.6vw)',
          aspectRatio: '348 / 376',
          right: '-80px',
          top: 'max(-188px, -13.84vw)',
        } as React.CSSProperties}
      >
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/bg-faq-right.svg`} alt="" className="w-full h-full object-contain" />
      </div>
      {/* Gráfico izquierdo – sangra hacia Footer, entre dos secciones */}
      <div
        className="hidden md:flex absolute items-center justify-center pointer-events-none select-none opacity-30"
        style={{ '--float-dur': '10s', top: '80.66%', right: '88.23%', left: '-1.69%', aspectRatio: '183 / 264.007', containerType: 'size' } as React.CSSProperties}
      >
        <div className="-rotate-90 flex-none" style={{ height: '100cqw', width: '100cqh' }}>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/bg-faq-left.svg`} alt="" className="absolute block inset-0 max-w-none w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`fade-up ${headerVisible ? 'visible' : ''} text-center mb-10`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3A6B] mb-3">
            Claridad ante tus dudas
          </h2>
          <p className="text-gray-500 text-lg">Resolvemos las preguntas más frecuentes</p>
        </div>

        {/* Tabs */}
        <div className="faq-tabs flex overflow-x-auto gap-2 mb-10 pb-1 -mx-4 px-4 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0 sm:mx-0 sm:px-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`shrink-0 whitespace-nowrap px-3 py-2 rounded-full text-xs font-semibold border-2 transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#1B3A6B] border-[#1B3A6B] text-white'
                  : 'border-[#1B3A6B] text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div ref={bodyRef} className={`fade-up ${bodyVisible ? 'visible' : ''} space-y-3`}>
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#EFF5FA] rounded-2xl overflow-hidden border border-transparent hover:border-[#E8541A] transition-colors duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-[#1B3A6B] font-semibold text-sm md:text-base pr-4">
                  {item.q}
                </span>
                <span
                  className={`flex-shrink-0 text-[#E8541A] transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronIcon />
                </span>
              </button>
              <div className={`faq-body ${openIndex === i ? 'open' : ''}`}>
                <div className="px-6 pb-5 mx-6">
                  <div className="border-l-4 border-[#E8541A] pl-4">
                    <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-5">¿Tienes más preguntas? Estamos aquí para ayudarte</p>
          <a
            href="https://wa.me/50686154823?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20servicios%20de%20Audivia.%20%C2%BFMe%20pueden%20ayudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange block sm:inline-block w-full sm:w-auto text-white px-8 py-4 rounded-full font-semibold text-center"
          >
            Contáctanos ahora
          </a>
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}
