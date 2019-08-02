import React from 'react';
import '../error/error.css';

const Error = ({mensaje}) => ( 
    <p className="error">{mensaje}</p>
);

 
export default Error;