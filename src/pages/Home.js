import React, { Component } from 'react';
import service from '../api/service';
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import Carrousel from '../components/Carrousel';

import { Button } from 'react-bootstrap';

class Home extends Component {

  state = {
    filteredBooks: [],
    categories: [],
    books: [],
    pagina: "",
    campo: ""
  }

  //Get Categories Function
  getCategories = async () => {
    const res = await service.getCategoriesFromApi()
    this.setState({ categories: res });
  }

  getCarrousel = async () => {
    const res = await service.getCarrousel();
    this.setState({ books: res });
  }

  //Search Function
  filterSearch = async (searchTerm) => {
    const searchedTerm = searchTerm.toLowerCase();
    const filteredList = await service.searchBook(searchedTerm);
    if (searchTerm) {
      this.setState({ filteredBooks: filteredList, campo: searchedTerm });
    }
  }

  clearSearch = () => {
    this.setState({ filtredBooks: [] });
  }

  componentDidMount() {
    this.getCategories();
    this.getCarrousel();
  }

  render() {
    return (
      <div>
        <div className="search-input-section">
          <SearchBar
            filterSearch={this.filterSearch}
            clearSearch={this.clearSearch}
            campo={this.state.campo}
            results={this.state.filteredBooks.length}
          />
        </div>
        <div className="search-section">
          {!this.state.filteredBooks.length ? (<>
            <h5>OpenBooks, the web where to find any resource on programming,
            databases, web development, JavaScipt, C, C ++ ...
            +3500 books at your disposal to read online or download directly.
            Browse through our sections, find what you are looking for and enjoy learning!
            GO, GO GOO!</h5>
          </>):(<>
            {this.state.filteredBooks.map((oneBook, index) => {
              return <SearchResult key={index} theBook={oneBook} />
            })}
          </>)}
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
                <img src={this.state.books.cover} alt={this.state.books.title} />
                <a href={`/books/api/v1/${oneCategory.nicename}`}><h6>{oneCategory.name}</h6></a>
              </div>
            )
          })}
        </div>
        <div className="home-section2">
          <div>
            <h3>Join today!</h3>
            <p>Get access to find any resource on programming, databases,
            web development, JavaScipt, C, C ++ ...
            +3500 books at your disposal to read online or
            download directly. Browse through our sections,
              find what you are looking for and enjoy learning!</p>
            <Button href="/signup" className="primary" variant="primary" size="sm" active>Register</Button>
          </div>
          <div>
            <ul className="home_section2_list">
              <li>Enjoy OpenBooks allways without ads</li>
              <li>Keep a personal book-list</li>
              <li>Filter your books by favourite, read...explore!</li>
              <li>Download directly or view online</li>
              <li>Create personal lists</li>
              <li>Contribute and improve our database</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;