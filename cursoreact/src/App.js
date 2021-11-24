import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');
  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  }

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  }

  const onClickBoton = function (evento) {



    html2canvas(document.querySelector("#meme")).then(canvas => {

      var img = canvas.toDataURL("image/png");
      document.write('<img src="' + img + '"/>');

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();

    });
  }
  return (

    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="casa">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matriz</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select><br />
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1"></input><br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2"></input><br />
      <button onClick={onClickBoton}>Exportar</button>
      <div className="meme" id="meme">
        <span>{linea1}</span><br />
        <span>{linea2}</span>
        <img src={"/img/" + imagen + ".jpg"} />
      </div>



    </div>
  );
}

export default App;
