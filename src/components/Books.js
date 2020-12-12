import React, { Component } from 'react';
import service from "../api/service";
import Paginacion from './Paginacion';
import { Button } from 'react-bootstrap';

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
        if (count) {
            pagina++;
            this.setState({ pagina: pagina });
        } else {
            this.setState({ pagina: 0 });
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
                {books.map((book, index) => {
                    return (
                        <div key={index} className="card" style={{ backgroundImage: `url(${book.cover})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                            <div className="card-body">
                                <h5>{book.title}</h5>
                                <h6>{book.author}</h6>
                                <Button href={`/details/${book.ID}`} className="primary" variant="primary" size="sm">Details</Button>
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
                {/* <div className="no-results">
                    <div className="no-results-content">
                        <h1>No hay más libros!!</h1>
                        <img src="https://res.cloudinary.com/ytyt/image/upload/v1607374224/books/undraw_result_5583_nsotqq.svg" alt="No reuslts" />
                        <div className="buttons-results">
                            <Button onClick={() => this.paginaSiguiente()} className="primary" variant="primary" size="sm" active>Vuelve!</Button>                            </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Books;