import { useNavigate } from 'react-router-dom';                           
import { Navbar, Nav, Container } from 'react-bootstrap';
import { obtenerToken, borrarToken } from '../../services/sesion';

function NavBar() {
    const navigate = useNavigate();  
    const estaLogueado = !!obtenerToken();
  const manejarSesion = () => {
    if (estaLogueado) {
      borrarToken();
      navigate('/');
    } else {
      navigate('/login');
    }
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">📚 Librería</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Contacto</Nav.Link>
            <Nav.Link href="/catalogo">Catálogo</Nav.Link>
            <button className="btn-login ms-lg-3 mt-2 mt-lg-0" onClick={manejarSesion}>
              {estaLogueado ? 'Salir' : 'Ingresar'}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;