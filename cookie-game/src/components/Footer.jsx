function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-4 py-5">
        <div>
          <a className="brand" href="#inicio"><span aria-hidden="true">🍪</span> Cookie <span>Game</span></a>
          <p className="mt-2 mb-0">Cada juego tiene su sabor.</p>
        </div>
        <div className="footer-note">
          <p className="mb-1">Descubre videojuegos y encuentra tu próxima partida.</p>
          <small>Los juegos y sus imágenes pertenecen a sus respectivos creadores.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
