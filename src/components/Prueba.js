import { Button } from 'react-bootstrap';
import React, { Component } from 'react'

class Prueba extends Component {
    render() {
        const books = this.props.books;
        console.log(books, "PROPS?¿?")
        return (
            <div className="cards">
                <figure className="card">
                    <img src={this.props.image} alt="logos" />
                    <figcaption>{this.props.title}</figcaption>
                </figure>
            </div> 
        )
    }}

export default Prueba;
