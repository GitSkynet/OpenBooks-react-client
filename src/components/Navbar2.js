import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { withAuth } from "../lib/AuthProvider";

class Navbar2 extends Component {
    render() {
        const { logout, isLoggedin } = this.props;

        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">OpenBooks   <img className="logo-navbar" src="https://res.cloudinary.com/ytyt/image/upload/v1608556604/books/favicon_bwnara.png" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {isLoggedin ? (
                            <>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/private">Profile</Nav.Link>
                                    {/* <Nav.Link href="/books/ourbooks">Our Books</Nav.Link> */}
                                    <Nav.Link href="/books/googlebooks">Google Books</Nav.Link>
                                    <Nav.Link href="/books/openlibra">Open Libra</Nav.Link>
                                    <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/books/openlibra/control_de_versiones">Git & GitHub</NavDropdown.Item>
                                        <NavDropdown.Item href="/books/openlibra/ajedrez">Ajedrez</NavDropdown.Item>
                                        <NavDropdown.Item href="/books/openlibra/cine">Cine</NavDropdown.Item>
                                        <NavDropdown.Item href="/books/openlibra/ciencia">Ciencia</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                                </Nav>
                            </>)
                            : (<>
                                <Nav className="mr-auto">

                                </Nav>
                                <Nav>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/signup">Sign Up!</Nav.Link>
                                </Nav>
                            </>)}
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default withAuth(Navbar2);