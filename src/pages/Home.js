import React, { Component } from 'react';
import service from '../api/service';
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import Carrousel from '../components/Carrousel';

class Home extends Component {

  state = {
    filteredBooks: [],
    categories: [],
    books: [],
    pagina: ""
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
      this.setState({ filteredBooks: filteredList});
    };
  }

  clearSearch = () => {
    this.setState({ filtredBooks: [] })
  }

  componentDidMount() {
    this.getCategories();
    this.getCarrousel();
  }

  render() {
    return (
      <div>
        <div className="home-section">
          <h1>OPENBOOKS V2</h1>
          <SearchBar
            filterSearch={this.filterSearch}
            clearSearch={this.clearSearch}
            count={this.state.filteredBooks.length}
          />
        </div>
          <div className="search-section">
          {this.state.filteredBooks.map((oneBook, index) => {
              return <SearchResult key={index} theBook={oneBook} />
              
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
              <div key={index} className="card-categories" style={{ backgroundImage: `url(${this.state.books.cover})` }}>
                <img src={this.state.books.cover} alt={this.state.books.title} />
                <h3>{oneCategory.name}</h3>
                <a href={`/books/api/v1/${oneCategory.nicename}`}>Go!</a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Home;