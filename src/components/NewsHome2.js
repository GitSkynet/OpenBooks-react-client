import React, { Component } from 'react';
import service from '../api/service';
import SearchBar from "../components/SearchBar";
import ResultsOpenLibra from './ResultsOpenLibra';

class NewsHome2 extends Component {
    state = {
        filteredBooks: [],
        count: 0,
        name: ''
    }

    //Search Function
    searchOpenLibra = async (searchTerm) => {
        const searchedTerm = searchTerm.toLowerCase();
        const count = await service.getCountSearch(searchedTerm)
        const filteredList = await service.searchBook(searchedTerm);
        if (searchTerm) {
            this.setState({ filteredBooks: filteredList, count: count, name: searchedTerm })
        }
    }

    clearSearch = () => {
        this.setState({ filteredBooks: [] });
    }

    render() { 
        return (
            <>
            <div className="news-container">
                <h5>Welcome to</h5>
                <img src="https://openlibra.blob.core.windows.net/assets-files/powered-by-openlibra-logo.png" alt="Open Libra Logo" />
                <SearchBar
                    filterSearch={this.searchOpenLibra}
                    clearSearch={this.clearSearch}
                    count={this.state.count}
                    name={this.state.name}
                />
            </div>
            <div className="google-results">
            <div className="results-superhome">
                {this.state.filteredBooks?.map((book, index) => {
                    return <ResultsOpenLibra key={index} theBook={book} />
                })}
                
            </div>
            </div>
        </>
        );
    }
}

export default NewsHome2;