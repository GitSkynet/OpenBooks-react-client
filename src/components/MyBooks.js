import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import service from "../api/service";
import Paginacion from './Paginacion';
import Prueba from '../components/Prueba';

class MyBooks extends Component {
    state = {
        books: [],
        pagina: 0,
    }

    scroll = () => {
        const elemento = document.querySelector('.create-div');
        elemento.scrollIntoView('ease-in', 'start');
    }

    getAllBooks = async () => {
        const page = this.state.pagina;
        const allBooks = await service.getBooks(page);
        this.setState({ books: allBooks })
    }

    deleteBook = async (id) => {
        await service.deleteBook(id);
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
        let count = this.state.books.length;
        if (!count) {
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
                    <h1>Our books</h1>
                </div>
                {books?.map((book, index) => {
                    return (
                        <Prueba
                            id={book._id}
                            books={this.state.books}
                            title={book.title}
                            image={book.poster}
                        />
                    )
                })}
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

export default MyBooks;