import React, { Component } from 'react';
import service from '../api/service';
import { Button } from 'react-bootstrap';
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

class GoogleBooks extends Component {
    state = {
        books: [],
        filteredBooks: []
    }
    getBooks = async () => {
        let googleBooks = await service.getGoogleBooks();
        this.setState({ books: googleBooks.items });
        console.log(this.state.books,"!!!books!!")

    }

    googleSearch = async (searchTerm) => {
        const searchedTerm = searchTerm.toLowerCase();
        const filteredList = await service.searchGoogle(searchedTerm);
        if (searchTerm) {
            this.setState({ filteredBooks: filteredList.data.items })
        }
    }

    clearSearch = () => {
        this.setState({ filteredBooks: [] })
    }

    componentDidMount() {
        this.getBooks();
    }

    render() {
        return (
            <>
            <div className="google-div">
                <h1>Google Books API   </h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_Play_Books_icon_%282016%29.svg/1200px-Google_Play_Books_icon_%282016%29.svg.png" alt="Google Logo"/>
                <SearchBar 
                filterSearch={this.googleSearch}
                clearSearch={this.clearSearch}/>    
            </div>
            <div className="google-results">
                {this.state.filteredBooks?.map((book, index) => {
                    return <SearchResult key={index} theBook={book} />
                })}
            </div>
            <div className="container2">
                {this.state.books?.map((book, index) => {
                    return (
                        <div key={index} className="card">
                            <img src={book.volumeInfo.imageLinks?.thumbnail}  alt={book.volumeInfo.title} />
                            <div className="card-body">
                                <h5>{book.volumeInfo.title}</h5>
                                <h6>{book.author}</h6>
                                <Button href={`/details/${book.id}`} 
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