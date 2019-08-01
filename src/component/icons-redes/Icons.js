import React from 'react'; 
import './icons.css';

const Icons = () => {
    return ( 
        <ul class="list-unstyled list-inline mt-4">
                <li class="list-inline-item">
                    <a href="_#">               
                         <i class="fab fa-facebook-f"></i>               
                    </a>              
                </li>
                <li class="list-inline-item">
                    <a href="_#">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li class="list-inline-item">
                    <a href="_#">
                         <i class="fab fa-twitter"></i>
                    </a>
                </li>                
                <li class="list-inline-item">
                     <a href="_#">
                         <i class="fab fa-youtube"></i>
                     </a>
                </li>
            </ul>
     );
}
 
export default Icons;