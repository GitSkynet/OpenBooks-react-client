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

    getAllBooks = async () => {
        const name = this.state.name;
        const count = await service.getCountItems(name);
        const allBooks = await service.getSubCategoriesFromApi(name);
        this.setState({ books: allBooks, count: count});
    }

    scroll = () => {
        const element = document.querySelector('.popular-books');
        element.scrollIntoView('ease-in', 'start');
    }
    
    ChangeName = (name2) => {
        const name = this.state.name;
        if(name){
            this.setState({ name: name2});  
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
                        <NavDropdown.Item onClick={() => this.ChangeName("control_de_versiones")}>All results</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.ChangeName("git")}>Git</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("mercurial")}>Mercurial</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => this.ChangeName("subversion")}>Subversion</NavDropdown.Item>
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
