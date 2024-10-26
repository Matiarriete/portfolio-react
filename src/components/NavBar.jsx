import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function NavBarComponent({language, setLanguage}) {

  return (
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                  <Nav.Link href="#inicio">{language === "ES"?"Inicio":"Home"}</Nav.Link>
                  <Nav.Link href="#sobreMi">{language === "ES"?"Sobre Mi":"About Me"}</Nav.Link>
                  <Nav.Link href="#experiencia">{language === "ES"?"Experiencia":"Experience"}</Nav.Link>
                  <Nav.Link href="#contactame">{language === "ES"?"Contactame":"Contact"}</Nav.Link>
                </Nav> 
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <NavDropdown title={language}>
                  <NavDropdown.Item onClick={() => setLanguage("ES")}>ES</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setLanguage("EN")}>EN</NavDropdown.Item>
                </NavDropdown>
              </Navbar.Collapse> 
            </Container>
          </Navbar>
  );
}

export default NavBarComponent;