import React, { Component } from 'react';
import service from '../api/service';
import {Button} from 'react-bootstrap';

class GoogleBooks extends Component {
    state = {
        books: []
    }
    getBooks = async () =>{
        let googleBooks = await service.getGoogleBooks();
        this.setState({ books: googleBooks.items});
        console.log(this.state.books, "LIBROS COMPONENTE")
    }

    componentDidMount(){
        this.getBooks();
    }

    render() {
        const books = this.state.books;
        return (
            <>
            <div className="google-div">
                <h1>Google Books API   </h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_Play_Books_icon_%282016%29.svg/1200px-Google_Play_Books_icon_%282016%29.svg.png" alt="Google Logo"/>
            </div>
            <div className="container2">
            {books.map((book, index) => {
                return (
                    <div key={index} className="card" style={{ backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                        <div className="card-body">
                            <h5>{book.volumeInfo.title}</h5>
                            <h6>{book.author}</h6>
                            <Button href={`/details/${book.id}`} 
                            image={book.volumeInfo.imageLinks.thumbnail}
                            className="primary" variant="primary" size="sm">Details</Button>
                        </div>
                    </div>
                )
            })}
            </div>
            </>
        );
    }
}

export default GoogleBooks;