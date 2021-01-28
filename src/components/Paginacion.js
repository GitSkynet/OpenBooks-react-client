import React from 'react'
import { Button } from 'react-bootstrap';

const Paginacion = props => {
    return (
        <>
            <Button onClick={props.paginaAnterior} className="primary" variant="primary" size="sm">Previous</Button>
            {props.length < 10 ?(<>
                <Button onClick={props.paginaSiguiente} className="primary" variant="primary" size="sm">First Page</Button>
            </>
            ):(
            <>
                <Button onClick={props.paginaSiguiente} className="primary" variant="primary" size="sm">Next</Button>
            </>
            )}
        </>
    )
}

export default Paginacion;
