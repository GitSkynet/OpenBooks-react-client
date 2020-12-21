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
                {books?.map((book) => {
                    return (
                        <Prueba 
                            id={book.ID}
                            books={this.state.books}
                            title={book.title}
                            image={book.cover}
                        />
                    )
                })}
                <div className="pagination">
                    <Paginacion
                        paginaAnterior={this.paginaAnterior}
                        paginaSiguiente={this.paginaSiguiente}
                    />
                </div>
                <h2><strong>What's new?</strong></h2>
                <div class="news">
                    <figure class="article">
                        <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news1.jpg" alt="pesaos lechee"/>
                        <figcaption>
                            <h3>New Item</h3>
                            <p>In today’s update, two heads are better than one,
                            and three heads are better than that, as the all-new
                            Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.
				            </p>
                        </figcaption>
                    </figure>

                    <figure class="article">
                        <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png" alt="prueba" />
                        <figcaption>
                            <h3>Update</h3>
                            <p>Just in time for Lunar New Year and the Rat’s time in the cyclical
                            place of honor, the Treasure of Unbound Majesty is now available.
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        );
    }
}

export default Books;
