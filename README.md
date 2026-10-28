# Portafolio - Sarhen Ramirez

Portafolio y CV en React + Vite, con tema oscuro, navegación por páginas (sin scroll largo), transiciones entre páginas y animaciones al hacer scroll.

## Estructura

- `index.html` - punto de entrada.
- `src/main.jsx` - montaje de React y `HashRouter`.
- `src/App.jsx` - layout (Sidebar + Footer) y definición de rutas.
- `src/pages/` - Home, Experience, AboutMe (páginas compuestas).
- `src/components/` - Sidebar, Hero, Proyectos, Habilidades, Formación, Contacto, TopLoader, PageFade y animaciones (Reveal, CountUp, RotatingText).
- `src/data/portafolio.js` - datos editables (perfil, proyectos, formación, habilidades, experiencia).
- `public/` - archivos estáticos servidos tal cual (imágenes de proyectos, CV en PDF).

## Pendientes por completar

- **Capturas de proyectos**: si agregas `image: '/projects/archivo.png'` a un proyecto en `src/data/portafolio.js`, la tarjeta muestra la captura; sin imagen muestra la vista de endpoints. Los PNG actuales de `public/projects/` están vacíos y no se usan.
- **Demos**: cambia `demo: null` por la URL pública cuando GuildGamer, Ecommerce API o MediTom estén desplegados.
- **CV**: actualiza `public/cv.pdf` con el enfoque backend y el proyecto Vesta.

## Uso

```bash
npm install
npm run dev       # entorno de desarrollo
npm run build     # build de producción (genera dist/)
npm run preview   # previsualizar el build
```
