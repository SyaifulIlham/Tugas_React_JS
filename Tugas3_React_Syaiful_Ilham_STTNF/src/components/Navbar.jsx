import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBookJournalWhills } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Beranda' },
  { path: '/book', label: 'Book' },
  { path: '/team', label: 'Team' },
  { path: '/contact', label: 'Kontak' },
];

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="store-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaBookJournalWhills className="me-2 store-navbar__icon" />
          Worthbook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="mx-auto justify-content-center">
            {navItems.map((item) => (
              item.path === '/#buku' ? (
                <Nav.Link href={item.path} key={item.path} className="text-center">
                  {item.label}
                </Nav.Link>
              ) : (
                <Nav.Link
                  as={NavLink}
                  to={item.path}
                  end={item.path === '/'}
                  key={item.path}
                  className="text-center"
                >
                  {item.label}
                </Nav.Link>
              )
            ))}
          </Nav>
          <Nav className="d-flex gap-2 align-items-lg-center">
            <Nav.Link as={NavLink} to="/register" className="text-center btn btn-primary px-3">
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="text-center btn btn-primary px-3">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
