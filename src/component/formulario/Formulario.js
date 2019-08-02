import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Criptomoneda from '../criptomoneda/Criptomoneda';
import Error from '../error/Error';

function Formulario() {

    const [criptomonedas, getCriptomonedas] = useState([]);
    const [monedaCotizar, getMonedaCotizar] = useState('');
    const [criptoCotizar, getCotizar] = useState('');
    const [error, getError] = useState(false);

    useEffect(() => {

        const consultarApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD';

            const resultado = await axios.get(url);

            //colocar respuesta en el state
            getCriptomonedas(resultado.data.Data);
        }

        consultarApi();
    }, []);

    //validar que el usuario llene ambos campos
    const CotizarMoneda = e => {
        e.preventDefault();

        //validar si ambos capos estan llenos
        if(monedaCotizar === '' || criptoCotizar === '') {
            getError(true);
            return;
        }
        //pasar los datos al componente principal
        getError(false);
    }
    //mostrar el error en caso de que exista 
    const componente = (error) ? <Error mensaje="Ambos campos son Obligatorios" />: null;

    return(
        <form 
            onSubmit={CotizarMoneda}
            className="container formulario"
        >
            {componente}
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
                className="custom-select "
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

            <input type="submit" className="btn btn-light col-12" value="Calcular" />
        </form>
    )
}

export default Formulario;