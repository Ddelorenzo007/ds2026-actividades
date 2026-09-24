import { NavLink, useNavigate } from 'react-router-dom';                           
import { Navbar, Nav, Container, Form, InputGroup, Button } from 'react-bootstrap';
import type { FormEvent } from 'react';                      
import { useBusqueda } from '../../context/BusquedaContext'; 
import '../../assets/styles/Header.css';
import { useAuth } from '../../context/AuthContext';

function NavBar() {
  const { filtro, setFiltro } = useBusqueda(); 
  const navigate = useNavigate();              
  const { usuario, logout } = useAuth();
  const buscar = (e: FormEvent) => {
    e.preventDefault();
    navigate('/catalogo');
  };
  const manejarSesion = () => {
    if (usuario) {
      logout();
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
            <Form onSubmit={buscar} className="ms-lg-3" style={{ maxWidth: '18rem' }}>
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Buscar por título o autor…"
                  value={filtro}
                  onChange={(e) => setFiltro(e.target.value)}
                />
                <Button type="submit" variant="outline-secondary" aria-label="Buscar">
                  🔍
                </Button>
              </InputGroup>
            </Form>
            <button className="btn-login ms-lg-3 mt-2 mt-lg-0" onClick={manejarSesion}>
              {usuario ? 'Salir' : 'Ingresar'}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;