import React, { Component } from 'react';
import service from "../api/service";
import Paginacion from './Paginacion';
import BookCard from './BookCard';

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
                <div className="book-cards">
                    {books?.map((book) => {
                        return (
                            <BookCard 
                                id={book.ID}
                                title={book.title}
                                image={book.cover}
                                content={book.content_short}
                                publisher={book.publisher}
                                date={book.publisher_date}
                                author={book.author}
                                preview={`/details/${book.ID}`}
                                preview_name={'Details'}
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
