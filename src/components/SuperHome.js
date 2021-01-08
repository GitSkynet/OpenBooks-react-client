import React, { Component } from "react";
import BookCard from '../components/BookCard';
import service from "../api/service";
import { NavDropdown } from 'react-bootstrap';

class SuperHome extends Component {
    state ={
        name: 'javascript',
        pagina: 0,
        books: [],
        nicename: ''
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
    
    ChangeName = (name2) => {
        const name = this.state.name;
        const newName = name.replace(/_/g, " ");
        if(name){
            this.setState({ name: name2, nicename: newName});
        }  
    }
    
    componentDidMount = () =>{
        this.getAllBooks();
    }

    componentDidUpdate = () =>{
        this.getAllBooks();
    }


  render() {
      const books = this.state.books;
    return (
        <div className="book-store">
        <div className="popular-books">
            <div className="main-menu">
                <div className="genre"><span>Top books on {this.state.nicename}</span></div>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="book-types">
                    <NavDropdown.Item onClick={() => this.ChangeName("javascript")}>JavaScript</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.ChangeName("bases_de_datos")}>Bases de datos</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.ChangeName("programacion_php")}>PHP</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.ChangeName("desarrollo_web")}>Web</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.ChangeName("programacion_java")}>Java</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.ChangeName("pet-python-entre-todos")}>Python</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => this.ChangeName("javascript")}>Separated link</NavDropdown.Item>
                </NavDropdown>         
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
                            preview={`/details/${book.ID}`}
                            preview_name={'Details'}
                        />
                )
                })}            
            </div>
        </div>
        </div>
    );
  }
}

export default SuperHome;
