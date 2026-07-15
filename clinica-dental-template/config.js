/* ==========================================================================
   CONFIG.JS — ÚNICO ARCHIVO QUE DEBES EDITAR PARA CADA NUEVO CLIENTE

   IMPORTANTE: los textos de ejemplo abajo están escritos para VENDER,
   pero son EJEMPLOS. Antes de publicar con un cliente real:
   - Reemplaza nombre, bio y credenciales con datos reales confirmados.
   - No publiques cifras (años de experiencia, cantidad de pacientes,
     rating) que el cliente no te confirme por escrito. Por defecto
     esta plantilla NO incluye estadísticas inventadas — solo garantías
     de servicio (bioseguridad, tecnología, planes de pago), que son
     seguras de usar para cualquier clínica que opere legalmente.
   ========================================================================== */

const CONFIG = {
  // ---- Identidad ----
  clinicName: "Clínica Dental Sonrisa",
  tagline: "Sonrisas de confianza en Panamá.",
  logo: "assets/logo.svg",

  // ---- Colores (paleta genérica de clínica dental: azul médico + blanco) ----
  colors: {
    primary: "#0E6BA8",      // azul médico — confianza, limpieza, estándar del rubro
    primaryLight: "#2E8FCE",
    accent: "#3FC1C9",       // turquesa suave — acento fresco/clínico
    accentInk: "#0E7A80",    // versión oscura del acento, para texto sobre fondo claro (contraste AA)
    bg: "#FFFFFF",
    bgAlt: "#F0F6FA",
    text: "#1B2733",
    textSoft: "#5A6B7A"
  },

  // ---- Contacto ----
  whatsappNumber: "50760000000",
  phoneDisplay: "+507 6000-0000",
  address: "Vía Principal, Ciudad de Panamá",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239!2d-79.5199!3d8.9824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTgnNTYuNiJOIDc5wrAzMScxMS42Ilc!5e0!3m2!1ses!2spa!4v1600000000000",

  // ---- Hero ----
  hero: {
    eyebrow: "Consultorio dental privado · Panamá",
    title: "Tu tratamiento, explicado con claridad.",
    subtitle: "Diagnóstico honesto y un plan que entiendes antes de aceptarlo. Sin filas de espera, sin presión de venta.",
    microcopy: "Respuesta directa del consultorio en minutos. Sin call center, sin compromiso."
  },

  // ---- Franja de confianza (garantías de servicio, no estadísticas) ----
  // Cambia estos textos solo si aplican de verdad al cliente.
  trust: [
    { icon: "shield", text: "Bioseguridad certificada" },
    { icon: "tool", text: "Tecnología moderna" },
    { icon: "wallet", text: "Planes de pago flexibles" },
    { icon: "chat", text: "Respuesta rápida por WhatsApp" }
  ],

  // ---- Doctor ----
  doctor: {
    name: "Dr. Nombre Apellido",
    initials: "DR", // se muestran en el placeholder mientras no haya foto real
    role: "Cirujano Dentista · Universidad de Panamá",
    bio: "Casi una década ejerciendo en Panamá. Antes de cualquier tratamiento, explica cada paso en un lenguaje que se entiende — no solo términos clínicos.",
    image: null // si tienes foto real: "assets/doctor.jpg" — reemplaza el placeholder automáticamente
  },

  // ---- Servicios (icon: shield | tool | wallet | chat | tooth | sparkle | braces | drop | implant | alert) ----
  services: [
    { icon: "tooth", title: "Limpieza dental", desc: "Elimina placa y sarro antes de que se conviertan en un problema mayor." },
    { icon: "sparkle", title: "Blanqueamiento", desc: "Un tono más claro, de forma segura y supervisada por un profesional." },
    { icon: "braces", title: "Ortodoncia", desc: "Brackets tradicionales o alineadores discretos, según tu caso." },
    { icon: "drop", title: "Endodoncia", desc: "Tratamiento de conducto con anestesia adecuada: el objetivo es que no sientas dolor." },
    { icon: "implant", title: "Implantes dentales", desc: "Reemplaza una pieza perdida con un resultado que se ve y funciona natural." },
    { icon: "alert", title: "Urgencias dentales", desc: "Dolor agudo o un diente roto no espera. Escríbenos y te damos prioridad." }
  ],

  // ---- Testimonios (reemplazar por reseñas reales del cliente antes de publicar) ----
  testimonials: [
    { name: "María G.", text: "Llegué con miedo porque no iba al dentista hace años. El doctor me explicó cada paso antes de tocarme. Ya perdí el miedo.", stars: 5 },
    { name: "Carlos R.", text: "Pedí cita por WhatsApp un domingo en la noche y el lunes ya tenía hora confirmada. Así de simple.", stars: 5 },
    { name: "Ana P.", text: "Mi hija de 6 años salió sonriendo del consultorio. Eso ya dice mucho.", stars: 5 }
  ],

  // ---- Texto del CTA de refuerzo (tras los testimonios) ----
  midCtaText: "¿Listo para tu cita? Escríbenos y te respondemos hoy mismo.",

  // ---- FAQ ----
  faq: [
    { q: "¿Aceptan seguros dentales?", a: "Sí, trabajamos con la mayoría de las aseguradoras en Panamá. Escríbenos para confirmar la tuya." },
    { q: "¿Atienden emergencias?", a: "Sí, contamos con espacio para urgencias dentales el mismo día, sujeto a disponibilidad." },
    { q: "¿Tienen planes de pago?", a: "Sí, ofrecemos financiamiento en cuotas para tratamientos de mayor costo." },
    { q: "¿Atienden niños?", a: "Sí, contamos con atención pediátrica en un ambiente cómodo y amigable." }
  ],

  // ---- Horarios ----
  hours: [
    { day: "Lunes a Viernes", time: "8:00 am – 6:00 pm" },
    { day: "Sábados", time: "8:00 am – 1:00 pm" },
    { day: "Domingos", time: "Cerrado" }
  ],

  whatsappDefaultMessage: "Hola, quisiera agendar una cita 🦷"
};
