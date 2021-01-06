import React, { Component } from 'react'
import {Button} from 'react-bootstrap';

class Prueba extends Component {
    render() {
        return (
            <div className="cards">
                <figure className="card">
                    <img src={this.props.image} alt="logos" />
                    <figcaption>{this.props.title}</figcaption>
                </figure>
                <div className="bookdetails">
                    <Button href={`/details/${this.props.id}`} >Details</Button>
                </div>
            </div> 
        )
    }}

export default Prueba;
