import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const SITE_URL = "https://audiviacr.com";
const BASE_PATH = "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Audivia – Audiología Karol Vega | Ciudad Quesada, San Carlos",
  description:
    "Clínica de audiología en Ciudad Quesada. Evaluaciones profesionales, limpieza de oídos y adaptación de audífonos de alta tecnología con la Dra. Karol Vega.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Audivia – Audiología Karol Vega",
    title: "Audivia – Audiología Karol Vega | Ciudad Quesada, San Carlos",
    description:
      "Clínica de audiología en Ciudad Quesada. Evaluaciones profesionales, limpieza de oídos y adaptación de audífonos de alta tecnología con la Dra. Karol Vega.",
    locale: "es_CR",
    images: [
      {
        url: "/Logo-audivia.png",
        alt: "Audivia – Audiología Karol Vega",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Audivia – Audiología Karol Vega | Ciudad Quesada",
    description:
      "Clínica de audiología en Ciudad Quesada. Evaluaciones profesionales, limpieza de oídos y adaptación de audífonos con la Dra. Karol Vega.",
    images: ["/Logo-audivia.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: `${BASE_PATH}/icono-audivia.svg`,
    apple: [{ url: `${BASE_PATH}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "Audiologist"],
      "@id": `${SITE_URL}/#organization`,
      name: "Audivia – Audiología Karol Vega",
      url: SITE_URL,
      logo: `${SITE_URL}/Logo-audivia.png`,
      image: `${SITE_URL}/image-hero.png`,
      description:
        "Clínica de audiología en Ciudad Quesada, San Carlos, Costa Rica. Evaluaciones auditivas profesionales, limpieza de oídos y adaptación de audífonos de alta tecnología con la Dra. Karol Vega.",
      telephone: "+50686154823",
      email: "audiologiakarolvega@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Frente al Hospital San Carlos, Edificio Amore, Consultorio 3",
        addressLocality: "Ciudad Quesada",
        addressRegion: "San Carlos",
        addressCountry: "CR",
      },
      areaServed: "Costa Rica",
      paymentAccepted: "Cash, Credit Card, SINPE Móvil, Bank Transfer",
      currenciesAccepted: "CRC",
      sameAs: [
        "https://www.facebook.com/clinicaauditivaaudivia",
        "https://www.instagram.com/audiviacr",
      ],
      employee: { "@id": `${SITE_URL}/#person-karol-vega` },
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Evaluaciones Auditivas Profesionales",
          description:
            "Audiometría Clínica e Impedanciometría para un diagnóstico preciso de tu capacidad auditiva.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Limpieza de Oídos",
          description:
            "Eliminación de obstrucción auditiva de forma inmediata, profesional y sin dolor.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Adaptación de Audífonos",
          description:
            "Tecnología de alta fidelidad, discreta y personalizada con seguimiento continuo.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Tamizaje Auditivo",
          description:
            "Detección temprana de riesgo auditivo para niños, adultos y adultos mayores.",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person-karol-vega`,
      name: "Karol Vega",
      givenName: "Karol",
      familyName: "Vega",
      jobTitle: "Audióloga",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      image: `${SITE_URL}/image-hero.png`,
      url: SITE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo sé si necesito una evaluación auditiva?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Si nota dificultades para escuchar conversaciones, necesita subir el volumen de la TV, presenta zumbidos (tinnitus) o siente el oído tapado, es momento de una valoración auditiva en Ciudad Quesada. La detección temprana evita que la pérdida auditiva avance y mejora su calidad de vida.",
          },
        },
        {
          "@type": "Question",
          name: "¿La evaluación auditiva duele?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Las pruebas de audición en nuestra clínica son completamente seguras, indoloras y no invasivas. Realizamos un estudio profesional para conocer el estado exacto de su salud auditiva de forma cómoda.",
          },
        },
        {
          "@type": "Question",
          name: "¿Necesito cita previa para una consulta de audiología?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. En Audivia trabajamos exclusivamente con cita previa para garantizarle una atención personalizada y sin esperas. Puede agendar su cita de audiología en San Carlos vía WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo sé si necesito aparatos auditivos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'Si le cuesta entender a los demás, evita eventos sociales por no escuchar bien o siente que las personas "hablan bajo", podría beneficiarse de un audífono moderno. Una evaluación profesional es el primer paso para determinar si un aparato auditivo es la solución correcta.',
          },
        },
        {
          "@type": "Question",
          name: "¿Los audífonos son visibles?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La tecnología actual permite crear audífonos muy discretos y ergonómicos. Muchos modelos son tan pequeños que pasan desapercibidos, adaptándose perfectamente a su estilo de vida.",
          },
        },
        {
          "@type": "Question",
          name: "¿Los audífonos modernos se conectan al celular?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí. Ofrecemos audífonos de alta tecnología con conectividad Bluetooth, permitiendo transmitir llamadas, música y audio directamente desde su celular u otros dispositivos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué pasa si ya utilicé audífonos y no tuve una buena experiencia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Muchas malas experiencias se deben a una adaptación incorrecta. En Audivia, garantizamos una programación y ajuste preciso, asegurando que su aparato auditivo sea cómodo y efectivo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Ofrecen seguimiento tras la adaptación de audífonos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Por supuesto. El seguimiento profesional es clave. Realizamos controles periódicos y ajustes personalizados para asegurar que su proceso de adaptación sea exitoso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto valen los audífonos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El precio depende del grado de pérdida auditiva y la tecnología necesaria. Le invitamos a realizar una valoración auditiva en nuestra clínica en Ciudad Quesada para recomendarle la opción que mejor se ajuste a su caso y presupuesto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Aceptan recetas de la CCSS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, en Audivia somos especialistas en el proceso de adaptación de audífonos con receta de la CCSS. Le brindamos asesoría y seguimiento durante todo el trámite.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué debo hacer si ya tengo una receta de audífonos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Contáctenos para orientarle. Nuestro equipo le guiará paso a paso para hacer efectiva su receta de la CCSS, facilitando la selección y adaptación de sus audífonos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Dónde se encuentran ubicados?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Estamos en Ciudad Quesada, San Carlos, frente a Emergencias del Hospital San Carlos, Edificio Amore (arriba de Farmacia La Villa, diagonal a Musmanni), consultorio 3. Ofrecemos atención profesional en nuestra clínica y contamos con servicios a domicilio en casos necesarios.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuál es el horario de atención de Audivia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atendemos bajo cita previa para brindarle tiempo exclusivo. Escríbanos por WhatsApp para consultar disponibilidad de horarios en nuestra clínica auditiva.",
          },
        },
        {
          "@type": "Question",
          name: "¿Atienden pacientes de otras zonas del país?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, atendemos pacientes de todo Costa Rica que buscan un acompañamiento profesional y humano en su salud auditiva.",
          },
        },
        {
          "@type": "Question",
          name: "¿Atienden a toda la población?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brindamos servicios de audiología integral para niños, adultos y adultos mayores en San Carlos y la región.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué métodos de pago aceptan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Para su comodidad, aceptamos efectivo, tarjeta, Sinpe Móvil y transferencia bancaria.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "Cómo recuperar tu audición con Audivia en 3 pasos",
      description:
        "El proceso de Audivia para mejorar tu salud auditiva en Ciudad Quesada, San Carlos.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Evaluación Integral en Ciudad Quesada",
          text: "Comenzamos con una valoración profunda de tu capacidad auditiva en nuestra clínica. Sin prisas, comprendiendo tu estilo de vida y necesidades actuales.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Plan de Solución a tu Medida",
          text: "No creemos en soluciones genéricas. Diseñamos un plan personalizado, ya sea mediante una limpieza profesional o la recomendación de audífonos de última generación ajustados a tu medida.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Acompañamiento y Adaptación",
          text: "La tecnología es solo el principio. La Dra. Karol Vega te guía en el proceso de adaptación, asegurando que te sientas cómodo, seguro y, sobre todo, que recuperes la nitidez que habías perdido.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
