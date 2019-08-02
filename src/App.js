import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './component/header/Header';
import Formulario from './component/formulario/Formulario';
import Spinner from './component/spinner/Spinner';
import Resultado from './component/cotizacion/Resultado';

import img from './img/cryptomonedas.png';


function App() {

  const [moneda, getMoneda] = useState('');
  const [criptomoneda, getCripto] = useState('');
  const [load, getLoad] = useState(false);
  const [result, getResult] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      //si no hay moneda, no ejecutar
      if(moneda ==='') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const res = await axios.get(url);

      //mostrando el spinner
      getLoad(true);

      //pasado los 3s ocultar el spinner y agrregar el resultados
      setTimeout(() => {
        getLoad(false)
        getResult(res.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    }
    cotizarCriptomoneda();
  }, [ criptomoneda, moneda]);

  //mostrar el spinner o el resultado
  const componente = (load) ? <Spinner/> : <Resultado resultado={result}/>;

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

              {componente}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
