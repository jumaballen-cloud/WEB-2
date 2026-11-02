function JuegoCard({ nombre, genero, descripcion, imagen, textoAlternativo }) {
  return (
    <article className="card game-card h-100">
      <img className="card-img-top" src={imagen} alt={textoAlternativo} width="800" height="600" loading="lazy" />
      <div className="card-body p-4">
        <p className="game-genre">{genero}</p>
        <h3 className="card-title">{nombre}</h3>
        <p className="card-text">{descripcion}</p>
      </div>
    </article>
  );
}

export default JuegoCard;
