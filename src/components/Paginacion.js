import React from 'react'


const Paginacion = props => {
    return (
        <>
            <button onClick={props.paginaAnterior} className="primary" variant="primary" size="sm">Anterior</button>
            <button onClick={props.paginaSiguiente} className="primary" variant="primary" size="sm">Siguiente</button>
        </>
    )
}

export default Paginacion;
