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
        const allBooks = await service.getBooks(page)
        this.setState({ books: allBooks.data })
    }

    deleteBook = async (id) => {
        await service.deleteBook(id);
        this.getAllBooks();
    }

    paginaAnterior = () => {
        console.log(this.state.pagina, 'PaginaAnterior');
        let pagina = this.state.pagina
        if (pagina === 0) return null;
        pagina--;
        this.setState({ pagina: pagina });
        this.scroll();
    }

    paginaSiguiente = () => {
        console.log(this.state.pagina, 'PaginaSiguiente');
        let pagina = this.state.pagina
        let books = this.state.books.length;
        if(books === 0){
            pagina = this.state.pagina;
            console.log(pagina, "AQUI")
            this.setState({pagina: 1})
        }else{
            pagina++;
            this.setState({ pagina: pagina });
            this.scroll();
        }
    }

    componentDidMount() {
        this.getAllBooks();
    }

    render() {
        //const {logout, isLoggedin } = this.props;
        const changer = this.state.books.length;
        return (
            <div className="container2">
                <h1>MY BOOKS</h1>
                <div className="create-div">
                    <h1>Our books</h1>
                </div>
                {!changer ? (
                    <>
                    <div className="no-results">
                        <h1>Aún no hay libros!!</h1>
                    </div>
                    <div className="no-results2">
                        <h2>Contribuye!!</h2>
                        <h5>Añade tus libros y ayúdanos a ser más grandes!</h5>
                        <button><a href="/books/create" className="material-icons">Create book</a></button>
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
                { this.state.books.map((book) => {
                    return (
                        <div key={book._id} className="card">
                            <img src={book.poster} alt={book.book_title} />
                            <div>
                                <h3>{book.book_title}</h3>
                                <h5>{book.book_year}</h5>
                                <div className="align-delete">
                                    <a href={`/details/${book._id}`}>Details</a>
                                    <Button onClick={() => this.deleteBook(book._id)} className="primary" variant="primary" size="sm" active>Delete</Button>
                                    <a href={`/books/upload/${book._id}`} className="material-icons">Edit Book</a>

                                </div>
                            </div>
                        </div>
                    )
                })},
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

export default MyBooks;