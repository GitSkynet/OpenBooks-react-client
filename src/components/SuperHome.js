import React, { Component } from "react";
import BookCard from '../components/BookCard';
import service from "../api/service";
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';

class SuperHome extends Component {
    state ={
        name: 'libros_programacion',
        pagina: 0,
        books: [],
        nicename: 'JavaScript',
    }

    getAllBooks = async () => {
        const name = this.state.name;
        const pagina = this.state.pagina;
        const allBooks = await service.getSubCategoriesFromApi(name, pagina)
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
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">{this.state.nicename}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Control Version" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.ChangeName("mysql_bases_de_datos")}>My SQL</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Data Bases" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.ChangeName("mysql_bases_de_datos")}>My SQL</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("nosql")}>No SQL</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("postgresql")}>PostGree SQL</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Programming" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.ChangeName("bases_de_datos")}>Database</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Web Development" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.ChangeName("mysql_bases_de_datos")}>My SQL</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="book-store">
            <div className="popular-books">
            {/* <NavDropdown title={this.state.name} id="basic-nav-dropdown" className="book-types">
                    <NavDropdown.Item onClick={() => this.ChangeName("bases_de_datos")}>Bases de datos</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.ChangeName("programacion_php")}>PHP</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.ChangeName("desarrollo_web")}>Web</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.ChangeName("programacion_java")}>Java</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => this.ChangeName("pet-python-entre-todos")}>Python</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => this.ChangeName("javascript")}>Separated link</NavDropdown.Item>
                </NavDropdown>          */}
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
    </>
    );
  }
}

export default SuperHome;
