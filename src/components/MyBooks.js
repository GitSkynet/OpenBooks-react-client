import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import service from "../api/service";
import Paginacion from './Paginacion';

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
        console.log(this.state.books, "Libros DB")
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
                    <Button href={`/books/create`} className="material-icons">Add a Book</Button>
                </div>
                <div className="book-cards">
                {books?.map((book, index) => {
                    return (
                        <div className="book-card">
                            <div className="content-wrapper">
                            <div className="content-wrapper2">
                                <img src={book.poster} alt="logos" className="book-card-img"/>
                                <span className="book-voters card-vote">1.987 voter</span>
                                <div className="rate">
                                    <fieldset className="rating book-rate">
                                    <input type="checkbox" id="star-c6" name="rating" value="5" />
                                    <label className="full" htmlFor="star-c6"></label>
                                    <input type="checkbox" id="star-c7" name="rating" value="4" />
                                    <label className="full" htmlFor="star-c7"></label>
                                    <input type="checkbox" id="star-c8" name="rating" value="3" />
                                    <label className="full" htmlFor="star-c8"></label>
                                    <input type="checkbox" id="star-c9" name="rating" value="2" />
                                    <label className="full" htmlFor="star-c9"></label>
                                    <input type="checkbox" id="star-c10" name="rating" value="1" />
                                    <label className="full" htmlFor="star-c10"></label>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="book-name">{book.title}</div>
                                <div className="book-name">{book.year}</div>
                                <div className="book-by">{book.writer}</div>
                                <Button href={`/books/upload/${book._id}`} className="material-icons">Edit Book</Button>
                                <div className="book-sum card-sum">
                                {book.description}{" "}
                                </div>
                            </div>
                            </div>
                        </div>
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

export default MyBooks;