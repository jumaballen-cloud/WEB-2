import JuegoCard from "./JuegoCard.jsx";
import minecraft from "../assets/minecraft.jpg";
import supertux from "../assets/supertux.png";
import supertuxkart from "../assets/supertuxkart.png";
import estrategia from "../assets/estrategia.jpg";

const juegos = [
  {
    nombre: "Minecraft",
    genero: "Aventura",
    descripcion: "Explora un mundo de bloques, reúne materiales y construye tus propios refugios.",
    imagen: minecraft,
    textoAlternativo: "Escenario de Minecraft con construcciones y vegetación",
  },
  {
    nombre: "SuperTux",
    genero: "Acción",
    descripcion: "Acompaña a Tux por escenarios de plataformas, recoge monedas y supera obstáculos.",
    imagen: supertux,
    textoAlternativo: "Tux recorre un nivel nevado de plataformas",
  },
  {
    nombre: "SuperTuxKart",
    genero: "Carreras",
    descripcion: "Compite en carreras de karts y recorre circuitos con distintos personajes.",
    imagen: supertuxkart,
    textoAlternativo: "Carrera de SuperTuxKart bajo la lluvia",
  },
  {
    nombre: "0 A.D.",
    genero: "Estrategia",
    descripcion: "Administra recursos, construye una ciudad y dirige a una civilización de la Antigüedad.",
    imagen: estrategia,
    textoAlternativo: "Ciudad antigua en un escenario de 0 A.D.",
  },
];

function Juegos() {
  return (
    <section className="section-space" id="juegos" aria-labelledby="titulo-juegos">
      <div className="container">
        <p className="eyebrow">UNA SELECCIÓN PARA TI</p>
        <h2 id="titulo-juegos">Juegos para repetir</h2>
        <p className="section-description">Cuatro formas de jugar. Encuentra tu favorita.</p>
        <div className="row g-4 mt-2">
          {juegos.map((juego) => (
            <div className="col-md-6" key={juego.nombre}>
              <JuegoCard
                nombre={juego.nombre}
                genero={juego.genero}
                descripcion={juego.descripcion}
                imagen={juego.imagen}
                textoAlternativo={juego.textoAlternativo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Juegos;
