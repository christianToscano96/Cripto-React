import React from 'react';
import Header from './component/header/Header';
import Formulario from './component/formulario/Formulario';

import img from './img/cryptomonedas.png';



function App() {
  return (
    <div className="App">
      <Header
        title="Cotizador de Criptomonedas"
      />
      <div className="container cripto-container">
        <div className="row">
          <div className="col-sm-6">
              <img src={img} className="img-fluid" alt="imagen de criptomonedas"/>
          </div>
          <div className="col-sm-6">
              <Formulario/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
