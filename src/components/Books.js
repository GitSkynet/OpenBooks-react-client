import React, { Component } from 'react';
import service from "../api/service";
import Paginacion from './Paginacion';
import { Button } from 'react-bootstrap';

class Books extends Component {
    state = {
        books: [],
        pagina: 0,
        category: []
    }

    scroll = () => {
        const element = document.querySelector('.create-div');
        element.scrollIntoView('ease-in', 'start');
    }

    getAllBooks = async () => {
        const name = this.props.match.params.name;
        const page = this.state.pagina;
        const allBooks = await service.getBooksFromApi(page, name)
        console.log(allBooks, "ALLBOOKS?")
        this.setState({ books: allBooks })
    }

    deleteBook = async (id) => {
        await service.deleteBook(id);
        // console.log('Console. log funcion delete');
        this.getAllBooks();
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
        let count = this.state.books.length
        if (!count) {
            this.setState({ pagina: 0 });
        }else{
            pagina++;
            this.setState({ pagina: pagina });
        }
        this.scroll();
    }

    componentDidUpdate = () => {
        this.getAllBooks();
    }

    componentDidMount() {
        this.getAllBooks();
    }

    render() {
        const changer = this.state.books.length;
        return (
            <div className="container2">
                <div className="create-div">
                    <h1>{this.props.match.params.name}</h1>
                    <button><a href="/books/create" className="material-icons">Create book</a></button>
                </div>
                {!changer ? (
                <>
                    <div className="no-results">
                        <div className="no-results-content">
                            <h1>No hay más libros!!</h1>
                            <Button onClick={() => this.paginaSiguiente()} className="primary" variant="primary" size="sm" active>Vuelve!</Button>
                        </div>
                    </div>
                    </>)
                    :(
                    <>
                    <div className="pagination">
                        <Paginacion
                            paginaAnterior={this.paginaAnterior}
                            paginaSiguiente={this.paginaSiguiente}
                        />  
                    </div>
                {this.state.books.map((book, index) => {
                    return (
                        <div key={index} className="card">
                            <img src={book.cover} alt={book.title} />
                            <div>
                                <h3>{book.title}</h3>
                                <h5>{book.author}</h5>
                                <div className="align-delete">
                                    <Button href={`/details/${book.ID}`} className="primary" variant="primary" size="sm">Details</Button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="pagination">
                    <Paginacion
                        paginaAnterior={this.paginaAnterior}
                        paginaSiguiente={this.paginaSiguiente}
                    />
                </div>
                </>)
                }
            </div>
        );
    }
}

export default Books;