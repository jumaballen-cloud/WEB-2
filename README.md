# Cookie Game

Cookie Game es una página web creada para descubrir videojuegos, explorar diferentes categorías y encontrar recomendaciones de juegos de forma sencilla.

## Ejecución del proyecto

Para utilizar el proyecto es necesario contar con Node.js y npm instalados. Desde la carpeta principal se ejecutan los comandos necesarios para instalar las dependencias y poner en marcha la aplicación. Una vez iniciado, solo se debe abrir en el navegador la dirección mostrada en la terminal.

Para generar la versión final del proyecto, se utilizan los comandos de compilación y vista previa.

## Herramientas utilizadas

- React: permite crear y organizar los componentes de la página.
- Vite: facilita el desarrollo y la generación de la aplicación.
- Bootstrap: ayuda a construir un diseño adaptable para diferentes tamaños de pantalla.
- CSS: se utiliza para personalizar colores, tamaños de texto y estilos visuales.

## Organización del proyecto

- src/App.jsx: contiene y organiza todas las secciones de la página.
- src/main.jsx: inicia la aplicación e importa los estilos necesarios.
- src/components/Navbar.jsx: muestra el nombre de la plataforma y el menú de navegación.
- src/components/Hero.jsx: presenta la bienvenida y el juego destacado.
- src/components/Categorias.jsx: muestra las categorías de videojuegos.
- src/components/Juegos.jsx: contiene el listado de juegos destacados.
- src/components/JuegoCard.jsx: muestra la información de cada juego utilizando una misma estructura.
- src/components/Novedades.jsx: presenta recomendaciones y novedades.
- src/components/Footer.jsx: contiene la información final de la página.
- src/assets/: almacena las imágenes utilizadas en el proyecto.
- src/styles.css: contiene los estilos y ajustes visuales de la plataforma.

La navegación se realiza dentro de una sola página, por lo que no fue necesario implementar rutas, bases de datos ni servicios externos.

## Vista previa sin instalaciones

- vista-previa.html: permite visualizar la página directamente en el navegador sin instalar dependencias. El código editable del proyecto se encuentra en la carpeta src.
