import React from 'react';
import './subscribe.css';

const Subscribe = ({description}) => {
    return ( 
        <button className="btn btn-light col-md-6">
             {description}
         </button>
     );
}
 
export default Subscribe;