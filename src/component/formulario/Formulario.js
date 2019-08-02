import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Formulario() {

    const [criptomonedas, getCriptomonedas] = useState([]);

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
                <select className="custom-select">
                    <option value="">- Elige tu Moneda -</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="ARG">Peso Argentino</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>             
            </div>

            <div className="row">
                <label>Elige tu Criptomoneda</label>
                <select className="custom-select">
                    {criptomonedas.map(cripto => (
                        
                    ))}
                </select>
            </div>
        </form>
    )
}

export default Formulario;