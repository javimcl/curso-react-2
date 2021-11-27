import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
function App() {

  let peliculas = peliculasJson;

  return (
    <PageWrapper>
      {peliculas.map(pelicula =>
        <Pelicula titulo={Pelicula.titulo} calificacion={Pelicula.calificacion} director={Pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} imagen={pelicula.imagen}>
         {pelicula.descripcion}
        </Pelicula>
      )}
      <Paginacion/>
    </PageWrapper>
    
  );
}

export default App;
