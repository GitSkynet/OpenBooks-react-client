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
        array: [1,2,3,4,5,6,7,8,9,10]
    }

    scroll = () => {
        const element = document.querySelector('.create-div');
        element.scrollIntoView('ease-in', 'start');
    }

    getAllBooks = async () => {
        const name = this.props.match.params.name;
        const pagina = this.state.pagina;
        const count = await service.getCountItems(name);
        const allBooks = await service.getBooksFromApi(name, pagina)
        this.setState({ books: allBooks, name: name, count: count })
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
        let length = this.state.books.length;
        let count = this.state.count;
        console.log(count, "contador PS")
        if (count===0) {
            this.setState({ pagina: 0 });
        } else {
            const counter = count - length;
            console.log(count, "count resta")
            console.log(length, "length")
            pagina++;
            this.setState({ pagina: pagina, count: counter });
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
                <div className="results-bookpage">
                    <h5>{this.state.count} results</h5>
                </div>
                {this.state.count ? (
                <>
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
                </>):(
                <>
                <div className="book-cards">
                        {this.state.array.map((index) => {
                            return (
                                <BookCard style={{minWidth: '300px'}} 
                                    key={index}
                                    title={'Loading Title...\n\n\n'}
                                    image={'https://i.stack.imgur.com/1hvpD.jpg'}
                                    content={'Loading Content...\n\n\n'}
                                    publisher={'Loading publisher...\n\n\n\n'}
                                    date={'Loading...\n\n\n'}
                                    author={'Loading...\n\n\n'}
                                    preview_name={'Loading...\n\n\n'}
                                />
                            )
                        })}
                    </div>
                </>)}      
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
