'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const NAV_ANCHORS = [
  { anchor: '#servicios', label: 'Servicios' },
  { anchor: '#proceso',   label: 'Proceso' },
  { anchor: '#nosotros',  label: 'Nosotros' },
  { anchor: '#faq',       label: 'FAQ' },
  { anchor: '#contacto',  label: 'Contacto' },
];

export default function Navbar({ prefix = '' }: { prefix?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href={`${prefix}#inicio`} className="flex-shrink-0">
            <Image
              src="/Logo-audivia.png"
              alt="Audivia - Audiología Karol Vega"
              width={150}
              height={52}
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ANCHORS.map((link) => (
              <a
                key={link.anchor}
                href={`${prefix}${link.anchor}`}
                className="text-navy font-medium text-sm hover:text-orange transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/50686154823?text=Hola%20Karol%2C%20quisiera%20agendar%20una%20cita%20en%20Audivia.%20%C2%BFCu%C3%A1l%20es%20su%20disponibilidad%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 btn-orange text-white px-6 py-3 rounded-full font-semibold text-sm"
          >
            <PhoneIcon />
            Agendar Cita
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 rounded"
            aria-label="Menú"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        aria-hidden={!isOpen}
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {NAV_ANCHORS.map((link) => (
            <a
              key={link.anchor}
              href={`${prefix}${link.anchor}`}
              onClick={handleLinkClick}
              tabIndex={isOpen ? undefined : -1}
              className="block py-3.5 text-navy font-medium hover:text-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/50686154823?text=Hola%20Karol%2C%20quisiera%20agendar%20una%20cita%20en%20Audivia.%20%C2%BFCu%C3%A1l%20es%20su%20disponibilidad%3F"
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? undefined : -1}
            className="flex items-center justify-center gap-2 btn-orange text-white py-3 rounded-full font-semibold mt-2"
          >
            <PhoneIcon />
            Agendar Cita
          </a>
        </div>
      </div>
    </nav>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}
function XIcon() {
  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
