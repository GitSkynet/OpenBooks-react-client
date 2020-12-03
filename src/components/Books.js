import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
// import bookService from "../api/service";
import axios from 'axios';

class Books extends Component {
    state= {
        books: []
    }

    getTodos = () => {
        axios.get("https://www.etnassoft.com/api/v1/get/?category=bases_de_datos").then(response =>{
            this.setState({books: response.data})
        })
    }
    // getAllBooks = async () => {
    //     const allBooks = await bookService.getBooks()
    //     this.setState({ books: allBooks })
    //     console.log('ALL BOOOKKKSSS', allBooks)
    // }

    // deleteBook = async (id) => {
    //     await bookService.deleteBook(id);
    //     console.log('Console. log funcion delete');
    //     this.getAllBooks();
    // }

    componentDidMount(){
        this.getTodos();
    }

    render() {
        console.log(this.state.books, "BOOOKSSSS????")
        const books = this.state.books
        return (
            <div className="container2">
                <div className="create-div">
                    <button><a href="/books/create" className="material-icons">Create book</a></button>
                </div>
                {books.length !== 0 ? books.map((book, index) =>{
                    return(
                        <div key={index} className="card">
                            <img src={book.cover} alt={book.book_title}/>
                            <div>
                                <h3>{book.title}</h3>
                                <h5>{book.author}</h5>
                                <div className="align-delete">
                                    <a href={`/books/upload/${book.ID}`}>Update</a>
                                    <a href={`/details/${book.ID}`}>Details</a>
                                    <Button onClick={() => this.deleteBook(book._id)} className="primary" variant="primary" size="sm" active>Delete</Button>
                                </div>                            
                            </div>
                        </div>
                    )
                }): null}
                
            </div>
        );
    }
}

export default Books;