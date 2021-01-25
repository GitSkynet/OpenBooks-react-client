import React, { Component } from "react";
import service from "../api/service";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import SuperHomeGoogle from "./SuperHomeGoogle";

class GoogleBooks extends Component {
  state = {
    filteredBooks: [],
  };

  googleSearch = async (searchTerm) => {
    const searchedTerm = searchTerm.toLowerCase();
    const filteredList = await service.searchGoogle(searchedTerm);
    if (searchTerm) {
      this.setState({ filteredBooks: filteredList?.data.items });
    }
  };

  clearSearch = () => {
    this.setState({ filteredBooks: [] });
  };

  render() {
    return (
      <>
        <div className="google-div">
          <h1>Google Books API </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_Play_Books_icon_%282016%29.svg/1200px-Google_Play_Books_icon_%282016%29.png"
            alt="Google Logo"
          />
          <SearchBar
            filterSearch={this.googleSearch}
            clearSearch={this.clearSearch}
          />
        </div>
        <div className="google-results">
          {this.state.filteredBooks?.map((book, index = book.id) => {
            return <SearchResult key={index} theBook={book} />;
          })}
        </div>
        <SuperHomeGoogle />
      </>
    );
  }
}

export default GoogleBooks;
