import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Criptomoneda from '../criptomoneda/Criptomoneda';

function Formulario() {

    const [criptomonedas, getCriptomonedas] = useState([]);
    const [monedaCotizar, getMonedaCotizar] = useState('');
    const [criptoCotizar, getCotizar] = useState('');
    const [error, gerError] = useState(false);

    useEffect(() => {

        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            //colocar respuesta en el state
            getCriptomonedas(resultado.data.Data);
        }

        consultarApi();
    }, []);



    return(
        <form className="container formulario">
            <div className="row">
                <label>Elige tu Moneda</label>
                <select 
                onChange={ e => getMonedaCotizar(e.target.value)}
                className="custom-select"
                >
                    <option value="">- Elige tu Moneda -</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="ARG">Peso Argentino</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>             
            </div>

            <div className="row">
                <label>Elige tu Criptomoneda</label>
                <select 
                onChange={ e => getCotizar(e.target.value)}
                className="custom-select"
                >
                    <option value="">- Elige tu Criptomoneda -</option>
                    {criptomonedas.map(criptomoneda => (
                        <Criptomoneda
                             key={criptomoneda.CoinInfo.Id}
                             criptomoneda={criptomoneda}
                        />
                    ))}
                </select>
            </div>
        </form>
    )
}

export default Formulario;