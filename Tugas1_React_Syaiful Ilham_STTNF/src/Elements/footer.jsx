function Footer() {
  return (
    <footer className="w-100 mt-5 bg-dark text-light">
      <div className="container py-4">
        <nav aria-label="Footer navigation">
          <ul className="nav justify-content-center flex-wrap gap-2 border-bottom border-secondary pb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">Team</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">Contact</a>
            </li>
          </ul>
        </nav>
        <p className="mt-3 mb-0 text-center text-light text-opacity-75 small">
          © 2026 Nurul Fikri Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;