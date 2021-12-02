import logo from './logo.svg';
import './App.css';
import Pelicula from './views/Pelicula';
import PageWrapper from './views/PageWrapper';
import peliculasJson from './peliculas.json';
import Paginacion from './views/Paginacion';
import { useEffect, useState } from 'react';
import ListadoPeliculas from './views/ListadoPeliculas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './views/Blog';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog" element={<Blog />}>
          
        </Route>
        <Route path="/" element={<ListadoPeliculas />}>
          
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
