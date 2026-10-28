export const profile = {
  name: 'Sarhen Ramirez',
  role: 'Backend Developer',
  secondaryRole: 'Full Stack Developer',
  location: 'Bogotá, Colombia',
  email: 'sarhenramirez2@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sarhen-ramirez-657a012a0/',
  github: 'https://github.com/SarhenRamirez',
  cvUrl: 'cv.pdf',
};

export const heroWords = ['seguras.', 'escalables.', 'testeadas.', 'en tiempo real.'];

export const heroStats = [
  { value: 1, label: 'Proyecto en producción en equipo' },
  { value: 4, label: 'APIs REST construidas' },
  { value: 88, label: 'Tests e2e en GuildGamer' },
];

// `image` es opcional: si hay captura se muestra encima de los endpoints.
export const projects = [
  {
    title: 'Vesta',
    subtitle: 'Plataforma de alquileres temporarios y residenciales',
    featured: true,
    category: 'Proyecto final · Henry',
    team: 'Equipo de 6 · Backend',
    image: 'projects/vesta.jpg',
    imageAlt: 'Detalle de una propiedad en Vesta con mapa de ubicación, panel de reserva con Mercado Pago y botón para agendar visita',
    description:
      'Conecta a usuarios con propiedades mediante búsqueda avanzada, reservas, citas de visita y pagos online. Proyecto final grupal con el que aprobamos la carrera, desplegado en producción.',
    highlightsTitle: 'Mi aporte en el backend',
    highlights: [
      'Módulo de citas completo: agendar, confirmar, reprogramar y vista de admin, evitando choques en una ventana de 30 min.',
      'Seguridad en auth: bloqueo temporal por intentos fallidos, recuperación de contraseña por mail y un RolesGuard reutilizable.',
      'Notificaciones por mail en citas, reservas y pagos; migración de SMTP a SendGrid porque Render bloquea SMTP.',
      'Búsqueda por cercanía (lat/lng/radio) y filtros avanzados de propiedades.',
      'Recuperé la suite de Jest tras la migración de Nest v12 a ESM y sumé tests de Auth, Payments, Reservations y Appointments.',
    ],
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'JWT', 'Google OAuth', 'Mercado Pago', 'SendGrid', 'Jest'],
    endpoints: [
      ['POST', '/auth/forgot-password'],
      ['GET', '/properties/nearby'],
      ['PATCH', '/appointments/:id/confirm'],
      ['POST', '/payments/webhook'],
    ],
    demo: 'https://proyecto-final-grupo-2.vercel.app',
    github: 'https://github.com/appvestapf/Proyecto-Final-Grupo-2',
  },
  {
    title: 'GuildGamer',
    subtitle: 'Red social para organizar partidas',
    featured: true,
    category: 'Proyecto personal',
    image: 'projects/guildgamer.jpg',
    imageAlt: 'Pantalla de inicio de GuildGamer con sesiones, juegos populares y actividad reciente',
    description:
      'Plataforma para encontrar jugadores, crear sesiones y comunicarse por texto y voz en tiempo real antes de entrar a jugar.',
    highlightsTitle: 'Puntos técnicos',
    highlights: [
      'Chat por sesión y mensajes privados en tiempo real con Socket.IO, autenticados con JWT y con límite anti-spam.',
      'Señalización WebRTC para canales de voz estilo Discord.',
      'Tareas programadas: recordatorio una hora antes de cada sesión y cambio automático de estado.',
      'Moderación con reportes, roles y baneos; suscripción Premium con Stripe.',
      '88 tests e2e contra PostgreSQL real, CI con GitHub Actions y despliegue con Docker Compose + nginx.',
    ],
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Socket.IO', 'WebRTC', 'Stripe', 'Docker', 'GitHub Actions', 'Vitest'],
    endpoints: [
      ['POST', '/sessions'],
      ['GET', '/sessions/recommended'],
      ['WS', '/chat · message:send'],
      ['WS', '/voice · voice:signal'],
    ],
    demo: null,
    github: 'https://github.com/SarhenRamirez/GuildGamer',
  },
  {
    title: 'Ecommerce API',
    subtitle: 'API REST de comercio electrónico',
    featured: true,
    category: 'Backend · Henry',
    image: 'projects/ecommerce-swagger.jpg',
    imageAlt: 'Documentación Swagger de la Ecommerce API con los endpoints de productos y categorías',
    description:
      'Backend para una tienda online: usuarios, productos, categorías y órdenes de compra, con autenticación por roles y carga de imágenes.',
    highlightsTitle: 'Puntos técnicos',
    highlights: [
      'Arquitectura modular con capa de repositorios, DTOs y validación estricta con class-validator.',
      'Guards de autenticación JWT y de roles (user / admin).',
      'Órdenes que descuentan stock automáticamente al crearse.',
      'Subida de imágenes a Cloudinary con pipe de validación de archivos.',
      'Migraciones de TypeORM, diagrama ER y documentación con Swagger.',
    ],
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'JWT', 'Cloudinary', 'Swagger'],
    endpoints: [
      ['POST', '/auth/signin'],
      ['GET', '/products'],
      ['POST', '/orders'],
      ['POST', '/files/uploadImage/:id'],
    ],
    demo: null,
    github: 'https://github.com/SarhenRamirez/ecommerce-api-nestjs',
  },
  {
    title: 'MediTom',
    subtitle: 'Sistema de turnos médicos',
    featured: false,
    category: 'Full Stack · Henry',
    description:
      'Aplicación full stack con API en Express 5: registro, agenda y cancelación de turnos, notificaciones por email y cuenta demo autogenerada.',
    technologies: ['Express', 'TypeScript', 'TypeORM', 'PostgreSQL', 'JWT', 'React'],
    demo: null,
    github: 'https://github.com/SarhenRamirez/sistema-citas-medicas',
  },
];

export const formation = [
  {
    title: 'Carrera Full Stack Developer',
    institution: 'Henry',
    period: 'Egresada · Octubre 2026',
    description:
      'Carrera Full Stack 2.0 con especialización en backend: Node.js, NestJS, APIs REST, bases de datos y arquitectura de aplicaciones. Proyecto final: Vesta, en el equipo de backend.',
    certified: true,
    certUrl: 'certificados/henry-full-stack.pdf',
  },
  {
    title: 'Inglés B1 · Intermedio',
    institution: 'EF SET',
    period: 'Octubre 2026',
    description:
      'Certificación de inglés según el Marco Común Europeo (MCER), con comprensión lectora en nivel C2 y escritura en B2.',
    certified: true,
    certUrl: 'https://cert.efset.org/4L8afB',
  },
  {
    title: 'Nest: Desarrollo Backend Escalable con Node',
    institution: 'Udemy · DevTalles',
    period: 'Agosto 2026',
    description:
      'Curso enfocado en construcción de APIs backend escalables con NestJS (24 horas).',
    certified: true,
    certUrl: 'https://ude.my/UC-fb4fcb87-5a75-457f-af18-73e5d09eec21',
  },
  {
    title: 'Curso Completo de TypeScript',
    institution: 'Udemy',
    period: 'Agosto 2026',
    description:
      'De las bases del lenguaje a su aplicación práctica en proyectos (8 horas).',
    certified: true,
    certUrl: 'https://ude.my/UC-e2a6802b-ed85-4dfb-b144-0f1f8ebc20bb',
  },
  {
    title: 'Desarrollo Backend con Node.js y MongoDB',
    institution: 'SENA',
    period: 'Agosto 2026',
    description:
      'Formación enfocada en construcción de APIs REST y persistencia de datos con MongoDB (48 horas).',
    certified: true,
  },
  {
    title: 'Metodología de la Programación de Sistemas Informáticos',
    institution: 'SENA',
    period: 'Agosto 2021',
    description:
      'Fundamentos de lógica y metodologías de programación (40 horas).',
    certified: true,
  },
];

export const skillGroups = [
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'JavaScript'] },
  { group: 'Bases de datos', items: ['PostgreSQL', 'TypeORM', 'Prisma', 'SQL', 'MongoDB'] },
  { group: 'APIs y tiempo real', items: ['APIs REST', 'Swagger / OpenAPI', 'JWT y OAuth 2.0', 'Socket.IO', 'WebRTC'] },
  { group: 'Calidad y DevOps', items: ['Jest', 'Vitest', 'Tests e2e', 'Docker', 'GitHub Actions', 'Git / GitHub'] },
  { group: 'Integraciones', items: ['Mercado Pago', 'Stripe', 'Cloudinary', 'SendGrid'] },
  { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS'] },
];

export const experience = [
  {
    title: 'Backend Developer · Vesta (proyecto final Henry)',
    description:
      'Desarrollo backend en un equipo de 6 personas con metodología ágil: tickets en Jira, ramas por ticket y Pull Requests. Módulo de citas, seguridad de autenticación, notificaciones por email y tests sobre una API en NestJS + PostgreSQL desplegada en Render.',
  },
  {
    title: 'Carrera Full Stack en Henry (especialización backend)',
    description:
      'Construcción de APIs con Express y NestJS, modelado de bases de datos relacionales y aplicaciones full stack con React.',
  },
  {
    title: 'Cursos complementarios de backend',
    description:
      'Formación adicional en NestJS (Udemy · DevTalles) y TypeScript (Udemy) para reforzar la construcción de APIs escalables.',
  },
  {
    title: 'Formación técnica en el SENA',
    description:
      'Certificación en Desarrollo Backend con Node.js y MongoDB, y formación previa en metodologías de programación.',
  },
];
