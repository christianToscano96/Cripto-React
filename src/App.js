import React, {useState} from 'react';
import Header from './component/header/Header';
import Formulario from './component/formulario/Formulario';

import img from './img/cryptomonedas.png';


function App() {
  
  const [moneda, getMoneda] = useState('');
  const [criptomoneda, getCripto] = useState('');

  return (
    <div className="App">
      <Header
        title="Cotizador de Criptomonedas"
      />
      <div className="container pt-5 cripto-container">
        <div className="row ">
          <div className="col-sm-4">
              <img src={img} className="img-fluid" alt="imagen de criptomonedas"/>
          </div>
          <div className="col-sm-8 formulario" >
            <h1 className="text-white text-center">Cotiza Criptomonedas al Instante</h1>
              <Formulario
                getMoneda={getMoneda}
                getCripto={getCripto}
              />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
