import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useEffect, useState } from 'react';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 5;

  useEffect(() => {
    buscarPeliculas();
  }, []);

  const buscarPeliculas = () => {
    setPeliculas(peliculasJson);
  }


  // const buscarPeliculas = async () => {
  //   let url = 'https://lucasmoy.dev/data/react/peliculas.json';
  //   let respuesta = await fetch(url, {
  //     'method': 'GET',

  //     'headers': {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   });

  //   //const json = await respuesta.json();

  //   setPeliculas(await respuesta.json());


  // }


  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );




  const getTotalPaginas = () => {
    let cantidadTotalDePaginas = peliculas.length;
    return Math.ceil(cantidadTotalDePaginas / TOTAL_POR_PAGINA);

  }

  return (
    <PageWrapper>
      {peliculasPorPagina.map(pelicula =>
        <Pelicula titulo={Pelicula.titulo} calificacion={Pelicula.calificacion} director={Pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} imagen={pelicula.imagen}>
          {pelicula.descripcion}
        </Pelicula>
      )}
      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />
    </PageWrapper>

  );
}

export default App;
