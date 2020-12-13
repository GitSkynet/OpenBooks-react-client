import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { withAuth } from "../lib/AuthProvider";			//	<-- UPDATE HERE

class Navbar2 extends Component {
    render() {
        const { logout, isLoggedin } = this.props;	//	<-- UPDATE HERE

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">OpenBooks V2</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {isLoggedin ? (
                            <>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/private">Profile</Nav.Link>
                                    <Nav.Link href="/books">Our Books</Nav.Link>
                                    <Nav.Link href="/books/google-books">Google Books</Nav.Link>
                                    <Nav.Link href="/books/openlibra">Open Libra</Nav.Link>
                                    <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/books/api/v1/control_de_versiones">Git & GitHub</NavDropdown.Item>
                                        <NavDropdown.Item href="/books/api/v1/ajedrez">Ajedrez</NavDropdown.Item>
                                        <NavDropdown.Item href="/books/api/v1/cine">Cine</NavDropdown.Item>
                                        <NavDropdown.Item href="/books/api/v1/ciencia">Ciencia</NavDropdown.Item>
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
            </div>
        );
    }
}

export default withAuth(Navbar2);