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
        count: 0,
        counter: 10
    }

    scroll = () => {
        const element = document.querySelector('.create-div');
        element.scrollIntoView('ease-in', 'start');
    }

    getAllBooks = async (page = 0) => {
        const name = this.props.match.params.name;
        const counter = page * 10;
        const count = await service.getCountItems(name);
        const allBooks = await service.getBooksFromApi(name, counter)
        const name2 = name.replace(/_/g, ' ').replace(/-/g, ' ')
        this.setState({ books: allBooks, name: name2, count: count})
    }

    paginaAnterior = () => {
        let pagina = this.state.pagina;
        let counter = this.state.counter;
        if (pagina === 0) {return null}
        else{
        pagina--;
        counter -= 10;
        this.setState({ pagina: pagina, counter: counter });
        }
    this.scroll();
    this.getAllBooks(pagina);
    }

    paginaSiguiente = () => {
        let pagina = this.state.pagina;
        let count = this.state.books.length;
        let counter = this.state.counter;
        if (count < 10) {
            pagina = 0;
            counter = 10;
            this.setState({ pagina: pagina, counter: counter });
            this.getAllBooks(pagina);
        } else {
            pagina++;
            counter += count;
            this.setState({ pagina: pagina, counter: counter });
            this.getAllBooks(pagina);
        }
        this.scroll();
    }

    componentDidMount() {
        this.getAllBooks();
    }

    render() {
        const books = this.state.books;
        return (
            <div className="container2">
                <div className="create-div">
                    <h1>{this.state.name}</h1>
                </div>
                <div className="results-bookpage">
                    {this.state.counter > this.state.count ? (
                    <>
                        <h5>{this.state.count} of {this.state.count} results</h5>
                    </>
                    ):(
                    <>
                        <h5>{this.state.counter} of {this.state.count} results</h5>
                    </>
                    )}
                    <h5> Page {this.state.pagina+1} </h5>
                </div>
                <div className="book-cards">
                        {books?.map((book, key= book.ID) => {
                            return (
                                <BookCard 
                                    key={key}
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
                        length={this.state.books.length}
                    />
                </div>
            </div>
        );
    }
}

export default Books;
