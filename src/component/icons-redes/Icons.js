import React from 'react'; 
import './icons.css';

const Icons = () => {
    return ( 
        <ul className="list-unstyled list-inline mt-4">
                <li className="list-inline-item">
                    <a href="_#">               
                         <i className="fab fa-facebook-f"></i>               
                    </a>              
                </li>
                <li className="list-inline-item">
                    <a href="_#">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="_#">
                         <i className="fab fa-twitter"></i>
                    </a>
                </li>                
                <li className="list-inline-item">
                     <a href="_#">
                         <i className="fab fa-youtube"></i>
                     </a>
                </li>
            </ul>
     );
}
 
export default Icons;