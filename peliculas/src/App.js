import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useState } from 'react';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const TOTAL_POR_PAGINA = 5;

  

  let peliculas = peliculasJson;

  peliculas = peliculas.slice((paginaActual-1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA);

  return (
    <PageWrapper>
      {peliculas.map(pelicula =>
        <Pelicula titulo={Pelicula.titulo} calificacion={Pelicula.calificacion} director={Pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} imagen={pelicula.imagen}>
          {pelicula.descripcion}
        </Pelicula>
      )}
      <Paginacion pagina={paginaActual} total={5} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />
    </PageWrapper>

  );
}

export default App;
