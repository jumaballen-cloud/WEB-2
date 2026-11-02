# Cookie Game

Página de inicio de Cookie Game, una plataforma para descubrir videojuegos, categorías y recomendaciones. Cada juego tiene su sabor: descubre el tuyo.

## Ejecutar el proyecto

Requisitos: Node.js 22.12 o superior y npm.

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Abrir la dirección que aparece en la terminal.

Para generar la versión de producción y revisarla:

```bash
npm run build
npm run preview
```

## Herramientas

React para los componentes, Vite para el entorno de desarrollo y Bootstrap para la cuadrícula adaptable y las tarjetas. Los colores, la tipografía y los espacios se personalizan en `src/styles.css`.

## Organización

- `src/App.jsx`: reúne las secciones dentro de una sola página.
- `src/main.jsx`: monta la aplicación e importa los estilos.
- `src/components/Navbar.jsx`: nombre y enlaces internos.
- `src/components/Hero.jsx`: bienvenida y juego principal.
- `src/components/Categorias.jsx`: cuatro categorías de videojuegos.
- `src/components/Juegos.jsx`: listado de juegos destacados.
- `src/components/JuegoCard.jsx`: tarjeta reutilizable que recibe los datos por props.
- `src/components/Novedades.jsx`: lanzamientos y recomendaciones ficticias.
- `src/components/Footer.jsx`: información de cierre.
- `src/assets/`: imágenes descargadas de los videojuegos. Sus fuentes están en `FUENTES_IMAGENES.md`.
- `src/styles.css`: estilos propios y ajustes para móvil.

La navegación usa enlaces a secciones de la misma página. No se necesitan rutas, API, registro ni base de datos para esta etapa.

## Vista previa sin instalaciones

Abre `vista-previa.html` con doble clic en Chrome o Edge. Es una copia compilada para visualizar la página; el código editable está en `src`.
