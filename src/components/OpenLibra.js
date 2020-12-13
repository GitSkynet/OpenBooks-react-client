import React, { Component } from 'react';
import service from '../api/service';
import SearchBar from "../components/SearchBar";
import Carrousel from '../components/Carrousel';
import { Button } from 'react-bootstrap';

class OpenLibra extends Component {
    state = {
        filteredBooks: [],
        pagina: "",
        campo: "",
        categories: []
    }

    //Get Categories Function
    getCategories = async () => {
        const res = await service.getCategoriesFromApi()
        this.setState({ categories: res });
    }

    //Search Function
    searchOpenLibra = async (searchTerm) => {
        const searchedTerm = searchTerm.toLowerCase();
        const filteredList = await service.searchBook(searchedTerm);
        if (searchTerm) {
            this.setState({ filteredBooks: filteredList })
        }
    }

    clearSearch = () => {
        this.setState({ filteredBooks: [] });
    }

    componentDidMount = () => {
        this.getCategories();
    }

    render() {
        return (
            <div>
                <div className="search-input-section">
                    <img src="https://openlibra.blob.core.windows.net/assets-files/powered-by-openlibra-logo.png" alt="Open Libra Logo" />
                    <SearchBar
                        filterSearch={this.searchOpenLibra}
                        clearSearch={this.clearSearch}
                        results={this.state.filteredBooks.length}
                    />
                </div>
                <div className="search-section">
                        <h5>OpenLibra, the web where to find any resource on programming,
                        databases, web development, JavaScipt, C, C ++ ...
                        +3500 books at your disposal to read online or download directly.
                        Browse through our sections, find what you are looking for and enjoy learning!</h5>
                </div>
                <div className="google-results">
                    {this.state.filteredBooks?.map((book, index= book.id) => {
                        return(
                            <div key={index} className="card">
                                <img src={book.cover}  alt={book.title} />
                                <div className="card-body">
                                    <h5>{book.title}</h5>
                                    <h6>{book.author}</h6>
                                    <Button href={`/details/${book.ID}`} 
                                    className="primary" variant="primary" size="sm">Details</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Carrousel />
                <div className="home-section">
                    <h1>Categories!</h1>
                    <h2>Discover all the categories on our Web!</h2>
                </div>
                <div className="container-categories">
                    {this.state.categories.map((oneCategory, index = this.state.categories.ID) => {
                        return (
                            <div key={index} className="card-categories">
                                <a href={`/books/openlibra/${oneCategory.nicename}`}><h6>{oneCategory.name}</h6></a>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default OpenLibra;