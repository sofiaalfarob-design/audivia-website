import Image from 'next/image';

const quickLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Nuestro Proceso' },
  { href: '#nosotros', label: 'Sobre Nosotros' },
  { href: '#faq', label: 'Preguntas Frecuentes' },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-footer-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/Logo-audivia.png"
              alt="Audivia"
              width={140}
              height={48}
              className="h-12 w-auto brightness-0 invert mb-5"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-6 font-semibold">
              Escuchar bien también es calidad de vida
            </p>
            <a
              href="https://wa.me/50686154823?text=Hola%2C%20tengo%20una%20consulta%20sobre%20los%20servicios%20de%20Audivia.%20%C2%BFMe%20pueden%20ayudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange block sm:inline-block w-full sm:w-auto text-white px-6 py-3 rounded-full font-semibold text-sm text-center"
            >
              Contáctanos ahora
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white text-base mb-5">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-orange transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-base mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <LocationIcon />
                <a
                  href="https://maps.google.com/?q=Frente+al+Hospital+San+Carlos+Ciudad+Quesada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange transition-colors"
                >
                  Frente al Hospital San Carlos,<br />Edificio Amore, Consultorio 3,<br />Ciudad Quesada
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <PhoneIcon />
                <a href="tel:+50686154823" className="hover:text-orange transition-colors">
                  +506 8615-4823
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <EmailIcon />
                <a href="mailto:audiologiakarolvega@gmail.com" className="hover:text-orange transition-colors">
                  audiologiakarolvega@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white text-base mb-5">Síguenos</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.facebook.com/clinicaauditivaaudivia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-orange transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <FacebookIcon />
                  </div>
                  Clínica Auditiva Audivia
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/audiviacr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-orange transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <InstagramIcon />
                  </div>
                  @audiviacr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-gray-500 text-sm">
            © 2026 AUDIVIA – Audiología Karol Vega. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg aria-hidden="true" className="flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
