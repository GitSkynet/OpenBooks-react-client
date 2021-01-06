import React, { Component } from "react";
import BookCard from '../components/BookCard';
import service from "../api/service";

class SuperHome extends Component {
    state ={
        name: 'javascript',
        books: []
    }

    getAllBooks = async () => {
        const name = this.state.name;
        const allBooks = await service.getBooksFromApi(name)
        this.setState({ books: allBooks, name: name })
        console.log(this.state.books);
    }

    componentDidMount = () =>{
        this.getAllBooks();
    }

  render() {
      const books = this.state.books;
    return (
    <div className="book-store">
        <div className="popular-books">
            <div className="main-menu">
                <div className="genre">Popular by Genre</div>
                <div className="book-types">
                    <a href="/home" className="book-type active">JavaScript</a>
                    <a href="/home" className="book-type">{" "}Web Dev</a>
                    <a href="/home" className="book-type">{" "}php</a>
                    <a href="/home" className="book-type">{" "}Data Bases</a>
                    <a href="/home" className="book-type">{" "}HTML5 & CSS3</a>
                    <a href="/home" className="book-type">{" "}Python</a>
                </div>
            </div>
            <div className="book-cards">
                 {books?.map((book) => {
                    return (
                        <BookCard 
                            key={book.ID}
                            content={book.content_short}
                            image={book.cover}
                            title={book.title}
                            publisher={book.publisher}
                            author={book.author}
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
