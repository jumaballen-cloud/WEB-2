function Navbar() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <div className="container d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 py-3">
        <a className="brand" href="#inicio"><span aria-hidden="true">🍪</span> Cookie <span>Game</span></a>
        <nav className="d-flex flex-wrap gap-3 gap-lg-4" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#categorias">Categorías</a>
          <a href="#juegos">Juegos</a>
          <a href="#novedades">Novedades</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
