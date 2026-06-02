import Home from './pages/Home';
import './App.css'
import Layout from './components/Layout/Layout';
import Libros from './pages/Catalogo';
import DetalleLibro from './pages/LibroDetalle';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/catalogo"    element={<Libros />} />
        <Route path="/catalogo/:id"   element={<DetalleLibro />} />
        {/* <Route path="/contacto"    element={<ContactPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;