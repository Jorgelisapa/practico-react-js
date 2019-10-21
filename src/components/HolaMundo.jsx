import React from 'react';

const HolaMundo = () => {
    const Hello = 'Hola Mundo';
    const isTrue = false;
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Esencial de React</h2>
            <img src="https://www.imagen.com.mx/assets/img/imagen_share.png" alt="imagen"/>
            {isTrue ? <h3>Esto es verdadero</h3>: <h4>Es falso</h4> }
            {isTrue && <h4>Soy verdadero</h4> }
        </div>
    );
};

export default HolaMundo;

// Es componente es Stateless