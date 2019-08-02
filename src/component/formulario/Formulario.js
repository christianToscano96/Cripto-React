import React from 'react';

function Formulario() {
    return(
        <form>
            <div className="row">
                <label>Elige tu Moneda</label>
                <select>
                    <option value="">- Elige tu Moneda -</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="ARG">Peso Argentino</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                </select>             
            </div>

            <div className="row">
                <label>Elige tu Criptomoneda</label>
                <select>
                    
                </select>
            </div>
        </form>
    )
}

export default Formulario;