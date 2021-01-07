import React, { Component } from 'react';
import service from '../api/service';
import SearchBar from "../components/SearchBar";
import ResultsOpenLibra from './ResultsOpenLibra';
import SuperHome from './SuperHome';

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
                    />
                </div>
                <div className="google-results">
                {this.state.filteredBooks?.map((book, index) => {
                    return <ResultsOpenLibra key={index} theBook={book} />
                })}
            </div>
            
            <SuperHome />
                <div className="home-section">
                    <h1>Categories</h1>
                    <h2>Navigate directly to...</h2>
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