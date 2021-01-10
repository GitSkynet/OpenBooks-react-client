import React, { Component } from "react";
import BookCard from '../components/BookCard';
import service from "../api/service";
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';

class SuperHome extends Component  {
    state ={
        name: 'javascript',
        books: [],
        count: 0,
        copy: []
    }

    getBooks = async () => {
        const name = this.state.name;
        let books = await service.getGoogleBooks(name);
        this.setState({ books: books });
        const array = this.state.books;
        console.log(array, "copia?")
        this.setState({copy: array})
    };

    scroll = () => {
        const element = document.querySelector('.popular-books');
        element.scrollIntoView('ease-in', 'start');
    }
    
    ChangeName = (name2) => {
        const name = this.state.name;
        if(name){
            this.setState({ name: name2});  
        }
        this.getBooks();
    }
    
    componentDidMount = () =>{
        this.getBooks();
    }
    
  render() {
      const books = this.state.copy;
      const name = this.state.name.replace(/_/g, ' ').toUpperCase();
    return (
        <>
        <Navbar id="prueba" bg="dark" expand="lg" style={{  background:' #24282f !important'}}>
            <Navbar.Brand  href="#home">{name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <-- Category Version Control dropdown --> */}
                    <NavDropdown title="Control Versiones" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.ChangeName("git")}>All results</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.ChangeName("git")}>Git</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("github")}>GitHub</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("npm")}>NPM</NavDropdown.Item>
                    </NavDropdown>
                    {/* <-- Category BBDD dropdown --> */}
                    <NavDropdown title="BBDD" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.ChangeName("bases_de_datos_general")}>All results</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.ChangeName("mysql_bases_de_datos")}>MySQL</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("nosql")}>NoSQL</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("postgresql")}>PostGreSQL</NavDropdown.Item>
                    </NavDropdown>
                    {/* <-- Category Web Development dropdown --> */}
                    <NavDropdown title="Web Development" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.ChangeName("desarrollo_web")}>All results</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.ChangeName("accesibilidad_usabilidad")}>Accesibilidad / Usabilidad</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("desarrollo_web_css")}>CSS</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("html")}>HTML</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("diseño_web")}>Diseño Web</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("herramientas_desarrollo_web")}>Herramientas</NavDropdown.Item>

                    </NavDropdown>
                    {/* <--! Category Programming dropdown !--> */}
                    <NavDropdown title="Programming" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.ChangeName("libros_programacion")}>All results</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.ChangeName("net")}>Net</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("ada")}>ADA</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("algoritmos")}>Algoritmos</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("c")}>C programming</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("c-plus-plus")}>C++</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("c-sharp")}>C Sharp</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("cloud-computing-libros_programacion")}>Cloud Computing</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("dispositivos_moviles")}>Mobile Development</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("hardware-libros_programacion")}>Hardware</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("haskell")}>Haskell</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("herramientas")}>Herramientas</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("programacion_java")}>Java</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("programacion_javascript_ajax")}>JavaScript</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("jquery_libros_programacion")}>JQuery</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("programacion_python")}>Python</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="book-store">
            <div className="popular-books">
                <div className="results-home">
                    <h5>{this.state.count} results</h5>
                    {this.state.count > 10 ?(<>
                        <a href={(`/books/openlibra/${this.state.name}`)}>
                            View all 
                        </a>
                        </>):(<></>)}
                </div>
                <div className="book-cards">
                    {books?.map((book, index) => {
                        return (
                            <BookCard
                                index={books.ID}
                                title={book.volumeInfo.title}
                                preview={book.volumeInfo.previewLink}
                                preview_name={'Preview'}
                                image={book.volumeInfo.imageLinks?.thumbnail}
                                content={book.searchInfo?.textSnippet}
                                publisher={book.publisher}
                                date={book.publishedDate}
                                amount={book.saleInfo.listPrice?.amount}
                                money={book.saleInfo.listPrice?.currencyCode}
                                author={book.author}
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