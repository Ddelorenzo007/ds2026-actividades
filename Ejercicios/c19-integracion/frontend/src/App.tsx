import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Libros from './pages/Catalogo';
import { Routes, Route } from 'react-router-dom';
import { BusquedaProvider } from './context/BusquedaContext'; 

function App() {
  
  return (
    <BusquedaProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" 
            element={<Libros />}
          />
        </Routes>
      </Layout>
    </BusquedaProvider>
  );
}

export default App;