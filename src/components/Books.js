import React, { Component } from 'react';
import service from "../api/service";
import Paginacion from './Paginacion';
//import { Button } from 'react-bootstrap';
import Prueba from '../components/Prueba';

class Books extends Component {
    state = {
        books: [],
        pagina: 0,
        category: [],
        name: "",
    }

    scroll = () => {
        const element = document.querySelector('.create-div');
        element.scrollIntoView('ease-in', 'start');
    }

    getAllBooks = async () => {
        const name = this.props.match.params.name;
        const pagina = this.state.pagina;
        const allBooks = await service.getBooksFromApi(name, pagina)
        this.setState({ books: allBooks, name: name })
    }

    paginaAnterior = () => {
        let pagina = this.state.pagina
        if (pagina === 0) return null;
        pagina--;
        this.setState({ pagina: pagina });
        this.scroll();
    }

    paginaSiguiente = () => {
        let pagina = this.state.pagina;
        let count = this.state.books.length;
        if (count===0) {
            this.setState({ pagina: 0 });
        } else {
            pagina++;
            this.setState({ pagina: pagina });
        }
        this.scroll();
    }

    componentDidMount() {
        this.getAllBooks();
    }

    componentDidUpdate = () => {
        this.getAllBooks();
    }

    render() {
        const books = this.state.books;
        return (
            <div className="container2">
                <div className="create-div">
                    <h1>{this.state.name}</h1>
                </div>
                <div className="wrapperbooks">
                {books?.map((book) => {
                    return (
                        <Prueba 
                            id={book.ID}
                            title={book.title}
                            image={book.cover}
                        />
                    )
                })}
                </div>
                <div className="pagination">
                    <Paginacion
                        paginaAnterior={this.paginaAnterior}
                        paginaSiguiente={this.paginaSiguiente}
                    />
                </div>
            </div>
        );
    }
}

export default Books;
