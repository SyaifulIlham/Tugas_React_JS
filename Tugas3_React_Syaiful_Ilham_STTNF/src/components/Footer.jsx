import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="w-100 mt-5 bg-dark text-light">
      <div className="container py-4">
        <nav aria-label="Navigasi footer">
          <ul className="nav justify-content-center flex-wrap gap-2 border-bottom border-secondary pb-3">
            <li className="nav-item">
              <Link to="/" className="nav-link px-2 text-light">Beranda</Link>
            </li>
            <li className="nav-item">
              <Link to="/#buku" className="nav-link px-2 text-light">Koleksi buku</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link px-2 text-light">Tentang kami</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link px-2 text-light">Kontak</Link>
            </li>
          </ul>
        </nav>
        <p className="mt-3 mb-0 text-center text-light text-opacity-75 small">
          © 2026 Project Nurul Fikri Academy.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
