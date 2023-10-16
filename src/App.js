import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);
  //el primer valor que usaremos como estado, el 2do es el arreglo que permite actualizarla, se utiliza la palabra set 
 
  const manejarClic = () => {
  setNumClics(numClics +1);
}

const reiniciarContador = () => {
  setNumClics(0);
}


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton texto='Clic' 
          esBotonDeClic={true} 
          manejarClic={manejarClic} />
          {/* Se le asigna al props manejarClic la funcion manejarClic */}
        <Boton texto='Reiniciar' 
          esBotonDeClic={false} 
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
