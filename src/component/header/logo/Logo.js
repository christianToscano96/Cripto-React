import React, { Fragment } from 'react';
import './logo.css';
import logo from '../../../img/logo.png';


const Logo = () => {
    return ( 
        <Fragment>
            <a href="index.html">
                <img src={logo} alt="logo" className="logo"/> 
            </a>
        </Fragment>
     );
}
 
export default Logo;