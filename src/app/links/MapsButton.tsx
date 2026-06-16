'use client';
import { useState, useEffect, useRef } from 'react';

const ADDRESS_QUERY = 'Frente+al+Hospital+San+Carlos+Ciudad+Quesada+Edificio+Amore+Costa+Rica';

const APPS = [
  {
    name: 'Waze',
    href: `https://waze.com/ul?q=${ADDRESS_QUERY}&navigate=yes`,
    icon: WazeIcon,
  },
  {
    name: 'Google Maps',
    href: `https://maps.google.com/?q=${ADDRESS_QUERY}`,
    icon: GoogleMapsIcon,
  },
];

export default function MapsButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  return (
    <div ref={ref} className="relative w-full">

      {/* App picker popup – appears above the button */}
      {open && (
        <div className="absolute bottom-full mb-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest px-5 pt-4 pb-2">
            Abrir con…
          </p>
          {APPS.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 transition-colors duration-150 last:pb-4"
            >
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center">
                <Icon />
              </span>
              <span className="font-semibold text-[#245283] text-sm">{name}</span>
            </a>
          ))}
        </div>
      )}

      {/* Button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-center gap-2 rounded-full border-2 border-[#245283] text-[#245283] font-semibold text-center transition-colors duration-200 hover:bg-[#245283] hover:text-white"
        style={{ height: 52, fontSize: 15 }}
        aria-expanded={open}
      >
        <MapPinIcon />
        Cómo llegar
      </button>

    </div>
  );
}

function WazeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="11" r="9" fill="#33CCFF"/>
      <circle cx="9" cy="10" r="1.2" fill="white"/>
      <circle cx="15" cy="10" r="1.2" fill="white"/>
      <path d="M9 13.5c.8 1.2 5.2 1.2 6 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="17.5" cy="19" r="2" fill="#33CCFF" stroke="white" strokeWidth="1"/>
    </svg>
  );
}

function GoogleMapsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335"/>
      <circle cx="12" cy="9" r="2.5" fill="white"/>
    </svg>
  );
}


function MapPinIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
