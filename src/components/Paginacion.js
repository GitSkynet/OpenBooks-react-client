import React from 'react'
import { Button } from 'react-bootstrap';

const Paginacion = props => {
    return (
        <>
            <Button onClick={props.paginaAnterior} className="primary" variant="primary" size="sm">Anterior</Button>
            <Button onClick={props.paginaSiguiente} className="primary" variant="primary" size="sm">Siguiente</Button>
        </>
    )
}

export default Paginacion;
