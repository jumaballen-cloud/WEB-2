import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Categorias from "./components/Categorias.jsx";
import Juegos from "./components/Juegos.jsx";
import Novedades from "./components/Novedades.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Categorias />
        <Juegos />
        <Novedades />
      </main>
      <Footer />
    </>
  );
}

export default App;
