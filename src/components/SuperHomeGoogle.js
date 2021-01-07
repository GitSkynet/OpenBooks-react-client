import React, { Component } from "react";
import BookCard from '../components/BookCard';
import service from "../api/service";
import Paginacion from './Paginacion';

class SuperHome extends Component {
    state ={
        name: 'javascript',
        pagina: 0,
        books: []
    }

    getBooks = async () => {
        const name = this.state.name;
        let books = await service.getGoogleBooks(name);
        this.setState({ books: books });
        console.log(this.state.books, "!!!books!!");
      };

    scroll = () => {
        const element = document.querySelector('.popular-books');
        element.scrollIntoView('ease-in', 'start');
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

    componentDidMount = () =>{
        this.getBooks();
    }

    changeName = (name2) => {
        if(this.state.name){
            this.setState({ name: name2});
        }
    }

  render() {
    return (
    <div className="book-store">
        <div className="popular-books">
            <div className="main-menu">
                <div className="genre">Most downloaded on <span>{this.state.name}</span></div>
                <ul className="book-types">
                    <li onClick={() => this.changeName("javascript")} className="book-type active">JavaScript</li>
                    <li onClick={() => this.changeName("bases_de_datos")} className="book-type">Bases de datos</li>
                    <li onClick={() => this.changeName("php")} className="book-type">{" "}PHP</li>
                    <li onClick={() => this.changeName("web")} className="book-type">{" "}Web</li>
                    <li onClick={() => this.changeName("java")} className="book-type">{" "}Java</li>
                    <li onClick={()=> this.changeName("python")} className="book-type">{" "}Python</li>
                </ul>
            </div>
            <div className="book-cards">
                 {this.state.books?.map((book, index) => {
                    return (
                        <BookCard
                            id={index}
                            title={book.volumeInfo.title}
                            preview={book.volumeInfo.previewLink}
                            image={book.volumeInfo.imageLinks?.thumbnail}
                            content={book.content_short}
                            publisher={book.publisher}
                            date={book.publishedDate}
                            amount={book.saleInfo.listPrice?.amount}
                            money={book.saleInfo.listPrice?.currencyCode}
                            author={book.author}
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
        </div>

    );
  }
}

export default SuperHome;