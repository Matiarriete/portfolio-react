import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import i18n from '../i18n';
import {useTranslation} from 'react-i18next'

function NavBarComponent() {

  const {t} = useTranslation();

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.text)
  }

  return (
        <Navbar bg="light" expand="lg" sticky="top" data-bs-theme="light">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                  <Nav.Link href="#inicio">{t('home')}</Nav.Link>
                  <Nav.Link href="#sobreMi">{t('about_me')}</Nav.Link>
                  <Nav.Link href="#experiencia">{t('experience')}</Nav.Link>
                  <Nav.Link href="#contactame">{t('contact_me')}</Nav.Link>
                </Nav> 
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
                <NavDropdown title={i18n.language}>
                  <NavDropdown.Item onClick={handleChange}>ES</NavDropdown.Item>
                  <NavDropdown.Item onClick={handleChange}>EN</NavDropdown.Item>
                </NavDropdown>
              </Navbar.Collapse> 
            </Container>
          </Navbar>
  );
}

export default NavBarComponent;