import React, { Component } from "react";
import BookCard from '../components/BookCard';
import service from "../api/service";
import Paginacion from './Paginacion';
import { Form } from 'react-bootstrap';

class SuperHome extends Component {
    state ={
        name: 'javascript',
        pagina: 0,
        books: []
    }

    getAllBooks = async () => {
        const name = this.state.name;
        const pagina = this.state.pagina;
        const allBooks = await service.getBooksFromApi(name, pagina)
        this.setState({ books: allBooks })
    }

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
        this.getAllBooks();
    }

    componentDidUpdate = () =>{
        this.getAllBooks();
    }

    ChangeName = (name2) => {
        if(this.state.name){
            this.setState({ name: name2});
        }  
    }

  render() {
      const books = this.state.books;
    return (
        <div className="book-store">
        <div className="popular-books">
            <div className="main-menu">
                <div className="genre"><span>Top books on...</span></div>
                <Form.Control as="select" className="book-types">
                    <option onClick={() => this.ChangeName("javascript")} className="book-type">JavaScript</option>
                    <option onClick={() => this.ChangeName("bases_de_datos")} className="book-type">Bases de datos</option>
                    <option onClick={() => this.ChangeName("programacion_php")} className="book-type">{" "}PHP</option>
                    <option onClick={() => this.ChangeName("desarrollo_web")} className="book-type">{" "}Web</option>
                    <option onClick={() => this.ChangeName("programacion_java")} className="book-type">{" "}Java</option>
                    <option onClick={()=> this.ChangeName("pet-python-entre-todos")} className="book-type">{" "}Python</option>
                </Form.Control>
            </div>
            <div className="book-cards">
                 {books?.map((book, key= this.state.books.ID) => {
                    return (
                        <BookCard 
                            key= {key}
                            content={book.content_short}
                            image={book.cover}
                            title={book.title}
                            publisher={book.publisher}
                            date={book.publisher_date}
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
