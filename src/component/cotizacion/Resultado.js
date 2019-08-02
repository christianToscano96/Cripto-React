import React from 'react';

const Resultado = ({resultado}) => {
     //condicion para qu no muestre la condicion a 1ra carga del la aplicacion
     if(Object.keys(resultado).length === 0) return null;
    return ( 
       
        <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">El precio es <span>{resultado.PRICE}</span> </p>

            <p className="description">Precio mas alto del Día: <span>{resultado.HIGHDAY}</span></p>
            <p className="description">Precio mas bajo del Día: <span>{resultado.LOWDAY}</span></p>
            <p className="description">Varación última 24 horas: <span>{resultado.CHANGEPCT24HOUR}% </span></p>
            <p className="description">Última Actualización: <span>{resultado.LASTTUPDATE}</span></p>

        </div>
     );
}
 
export default Resultado;