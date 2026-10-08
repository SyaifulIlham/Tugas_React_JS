import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaBookJournalWhills } from "react-icons/fa6";
import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>
        <Navbar.Brand href="#home" onClick={(event) => {
          event.preventDefault();
          onNavigate('home');
        }}>
          <FaBookJournalWhills className="me-2 text-primary" />
          Worthbook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto justify-content-center">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                className="text-center"
                active={currentPage === item.id}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(item.id);
                }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="d-flex gap-2">
            <Nav.Link className="text-center btn btn-outline-primary bg-primary text-white" href="#deets">
              More Pages
            </Nav.Link>
            <Nav.Link className="text-center btn btn-primary bg-primary text-white" eventKey={2} href="#memes">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;