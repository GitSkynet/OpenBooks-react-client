import React, { Component } from "react";
import BookCard from '../components/BookCard';
import service from "../api/service";
import { NavDropdown, Nav, Navbar } from 'react-bootstrap';

class SuperHome extends Component {
    state ={
        name: 'libros_programacion',
        pagina: 0,
        books: [],
        count: 0
    }

    getAllBooks = async (name) => {
        if(!name){
            name = this.state.name;
        }else{
            this.setState({name: name})
        }
        const count = await service.getCountItems(name);
        const allBooks = await service.getSubCategoriesFromApi(name);
        this.setState({ books: allBooks, count: count});
    }

    scroll = () => {
        const element = document.querySelector('.popular-books');
        element.scrollIntoView('ease-in', 'start');
    }
    
    componentDidMount = () =>{
        this.getAllBooks();
    }

    render() {
        const books = this.state.books;
        const name = this.state.name.replace(/_/g, ' ');
    return (
        <>
        <Navbar id="prueba" bg="dark" expand="lg" style={{  background:' #24282f !important'}}>
            <Navbar.Brand  href="#home">{name}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {/* <-- Category Version Control dropdown --> */}
                    <NavDropdown title="Control Versiones" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.getAllBooks("control_de_versiones")}>All results</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.getAllBooks("git")}>Git</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("mercurial")}>Mercurial</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("subversion")}>Subversion</NavDropdown.Item>
                    </NavDropdown>
                    {/* <-- Category BBDD dropdown --> */}
                    <NavDropdown title="BBDD" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.getAllBooks("bases_de_datos_general")}>All results</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.getAllBooks("mysql_bases_de_datos")}>MySQL</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("nosql")}>NoSQL</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("postgresql")}>PostGreSQL</NavDropdown.Item>
                    </NavDropdown>
                    {/* <-- Category Web Development dropdown --> */}
                    <NavDropdown title="Web Development" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.getAllBooks("desarrollo_web")}>All results</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.getAllBooks("accesibilidad_usabilidad")}>Accesibilidad / Usabilidad</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("desarrollo_web_css")}>CSS</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("html")}>HTML</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("diseño_web")}>Diseño Web</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("herramientas_desarrollo_web")}>Herramientas</NavDropdown.Item>

                    </NavDropdown>
                    {/* <--! Category Programming dropdown !--> */}
                    <NavDropdown title="Programming" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.getAllBooks("libros_programacion")}>All results</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.getAllBooks("net")}>Net</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("ada")}>ADA</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("algoritmos")}>Algoritmos</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("c")}>C programming</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("c-plus-plus")}>C++</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("c-sharp")}>C Sharp</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("cloud-computing-libros_programacion")}>Cloud Computing</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("dispositivos_moviles")}>Mobile Development</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("hardware-libros_programacion")}>Hardware</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("haskell")}>Haskell</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("herramientas")}>Herramientas</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("programacion_java")}>Java</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("programacion_javascript_ajax")}>JavaScript</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("jquery_libros_programacion")}>JQuery</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.getAllBooks("programacion_python")}>Python</NavDropdown.Item>
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
                    {books?.map((book, index= this.state.books.ID) => {
                        return (
                            <BookCard 
                                key= {index}
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
