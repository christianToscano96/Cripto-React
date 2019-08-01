import React from 'react';
import './subscribe.css';

const Subscribe = ({description}) => {
    return ( 
        <button class="btn btn-light col-md-4">
             {description}
         </button>
     );
}
 
export default Subscribe;