import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Image from 'next/image';
import MapsButton from './MapsButton';

export const metadata: Metadata = {
  title: 'Links | Audivia – Audiología Karol Vega',
  description: 'Agendá tu cita, visitá nuestras redes y conocé la clínica auditiva Audivia en Ciudad Quesada.',
};

const WA_HREF = 'https://wa.me/50686154823?text=Hola%2C%20quisiera%20agendar%20una%20cita%20en%20Audivia.';
const FB_HREF = 'https://www.facebook.com/people/Cl%C3%ADnica-Auditiva-Audivia/61586504600678/?ref=PROFILE_EDIT_xav_ig_profile_page_web#';
const IG_HREF = 'https://www.instagram.com/audiviacr';

export default function LinksPage() {
  return (
    <main className="hero-bg min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-5 py-12">

      {/* Left blob – upper left corner, bleeds off edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute w-[167px] h-[207px] md:w-[305px] md:h-[376px]"
        style={{ left: -30, top: -10 }}
      >
        <img src="/link-graf1.svg" alt="" className="w-full h-full" />
      </div>

      {/* Right blob – lower right corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute w-[121px] h-[132px] md:w-[219px] md:h-[240px]"
        style={{ right: -30, bottom: 0 }}
      >
        <img src="/link-graf2.svg" alt="" className="w-full h-full" />
      </div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-3">

        {/* Logo – above card, shown in brand color */}
        <Image
          src="/Logo-audivia.png"
          alt="Audivia – Audiología Karol Vega"
          width={198}
          height={46}
          className="w-auto h-auto mb-1"
          priority
        />

        {/* Header card */}
        <div className="w-full rounded-3xl px-8 py-9 flex flex-col items-center gap-2 text-center" style={{ backgroundColor: '#2e5c90' }}>
          <p className="text-white text-xl font-bold leading-snug tracking-tight w-full" style={{ letterSpacing: '-0.4px' }}>
            <strong>Audivia</strong>
            <span className="font-normal"> | </span>
            <strong>Audiología Karol Vega</strong>
          </p>
          <p className="text-sm leading-normal w-full" style={{ color: '#ccd1d9' }}>
            Mejora tu calidad de vida a través de una audición clara.{' '}
            Agenda tu valoración profesional hoy.
          </p>
        </div>

        {/* Orange accent */}
        <div className="w-10 rounded-full bg-orange" style={{ height: 3 }} />

        {/* Primary CTA */}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-orange w-full flex items-center justify-center rounded-full font-semibold text-white text-center"
          style={{ height: 52, fontSize: 15 }}
        >
          Agenda tu Consulta de Valoración
        </a>

        {/* Section label */}
        <p className="font-semibold text-center pt-1" style={{ color: '#245283', fontSize: 15 }}>
          Conoce nuestros Servicios Audiológicos
        </p>

        {/* Service buttons */}
        <OutlineLink href="https://audiviacr.com">Sitio web</OutlineLink>
        <OutlineLink href={FB_HREF}>Facebook</OutlineLink>
        <OutlineLink href={IG_HREF}>Instagram</OutlineLink>

        {/* Section label */}
        <p className="font-semibold text-center pt-1" style={{ color: '#245283', fontSize: 15 }}>
          Visita nuestra Clínica
        </p>

        {/* Maps button – opens app picker (Waze / Google Maps / Apple Maps) */}
        <MapsButton />

        {/* Footer */}
        <p className="text-gray-400 text-xs text-center pt-2">
          © 2026 Audivia · Ciudad Quesada, San Carlos
        </p>

      </div>
    </main>
  );
}

function OutlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex items-center justify-center rounded-full border-2 border-[#245283] text-[#245283] font-semibold text-center transition-colors duration-200 hover:bg-[#245283] hover:text-white"
      style={{ height: 52, fontSize: 15 }}
    >
      {children}
    </a>
  );
}
