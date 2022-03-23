
import './App.css';
import Lista from './Components/Lista';
import { useState } from 'react';

function App() {

  const [ruta,setRuta] = useState("https://pokeapi.co/api/v2/pokemon/?limit=51&offset=0");
  const [cantidad,setCantidad] = useState(0);

  const cambiarRuta = (ruta) => {
    setRuta(ruta);
  }

  return (
    <div className="App">
      <h1 className='title'>Pokedex</h1>
      <Lista ruta={ruta} setRuta={setRuta} cantidad={cantidad} setCantidad={setCantidad}/>
    </div>
  );
}

export default App;
