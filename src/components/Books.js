import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import bookService from "../api/service";

class Books extends Component {
    state= {
        books: []
    }

    getAllBooks = async () => {
        const allBooks = await bookService.getBooks()
        this.setState({ books: allBooks })
        console.log('ALL BOOOKKKSSS', allBooks)
    }

    deleteBook = async (id) => {
        await bookService.deleteBook(id);
        console.log('Console. log funcion delete');
        this.getAllBooks();
    }

    componentDidMount(){
        this.getAllBooks();
    }

    render() {
        const books = this.state.books
        return (
            <div className="container2">
                <div className="create-div">
                    <button><a href="/books/create" className="material-icons">Create book</a></button>
                </div>
                {books.length !== 0 ? books.map((book, index) =>{
                    return(
                        <div key={index} className="card">
                            <img src={book.poster} alt={book.book_title}/>
                            <div>
                                <h3>{book.book_title}</h3>
                                <h5>{book.book_year}</h5>
                                <a href={`/books/upload/${book._id}`}>Update Book</a>
                                <a href={`/details/${book._id}`} >More Details</a>
                                <Button onClick={() => this.deleteBook(book._id)} className="primary" variant="primary" size="sm" active>Delete</Button>                            
                            </div>
                        </div>
                    )
                }): null}
                
            </div>
        );
    }
}

export default Books;