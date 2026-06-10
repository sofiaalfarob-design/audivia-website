import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function NotFound() {
  return (
    <>
      <Navbar prefix="/" />

      <main
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{ background: 'linear-gradient(224.05deg, #FAFBFD 17.28%, #EFF1F6 81.03%)' }}
      >
        {/* Gráfico superior derecha – círculos + U (viewBox 430.994 × 466) */}
        <div
          className="hidden md:block absolute pointer-events-none select-none"
          style={{ right: '-80px', top: '4%' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/bg-404-right.svg`} alt="" width={400} height={433} style={{ display: 'block' }} />
        </div>

        {/* Gráfico inferior izquierda – mismo shape rotado -90°
            Outer = dimensiones visuales post-rotación: 433 × 400
            Inner = dimensiones reales pre-rotación: 400 × 433 */}
        <div
          className="hidden md:flex absolute pointer-events-none select-none items-center justify-center"
          style={{ left: '-60px', bottom: '0', width: '433px', height: '400px' }}
        >
          <div style={{ transform: 'rotate(-90deg)', flexShrink: 0, width: '400px', height: '433px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/bg-404-left.svg`} alt="" width={400} height={433} style={{ display: 'block', width: '400px', height: '433px' }} />
          </div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center py-24">

          {/* Label */}
          <p className="text-orange text-xs font-semibold uppercase tracking-widest mb-4">
            Pagina no encontrada
          </p>

          {/* 404 */}
          <h1
            className="font-extrabold text-[#245283] leading-none mb-8"
            style={{ fontSize: 'clamp(8rem, 22vw, 16rem)' }}
          >
            404
          </h1>

          {/* Descripción */}
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Lo sentimos, la página que buscas no existe o fue movida. Desde aquí puedes volver al inicio o consultarnos directamente.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/"
              className="btn-orange w-full sm:w-auto flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-sm"
            >
              <HomeIcon />
              Volver al inicio
            </a>
            <a
              href="/#servicios"
              className="btn-navy w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm"
            >
              Consulta los servicios
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

function HomeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
