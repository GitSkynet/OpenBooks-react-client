import React, { Component } from 'react';
import service from '../api/service';
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import { Carousel } from 'react-bootstrap';

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
    const filteredList = await service.searchBook(searchedTerm)
    if (searchTerm) {
      this.setState({
        filteredBooks: filteredList
      })
    }
    console.log(this.state.filteredBooks)
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
          <h2>Find wat you want, all resources on programming are here!</h2>
          <SearchBar filterSearch={this.filterSearch} clearSearch={this.clearSearch} />
        </div>
        <div className="search-section">
          {this.state.filteredBooks.map((oneBook, index) => {
            return <SearchResult key={index} theBook={oneBook} />
          })}
        </div>
        <Carousel>
          {this.state.books.map((oneBook, index) => {
            return (
              <Carousel.Item>
                <img
                  style={{height: "300px", backgroundPosition: "cover"}}
                  className="d-block w-100"
                  src={oneBook.cover}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{oneBook.title}</h3>
                  <p><a href={`/details/${oneBook.ID}`}>Nulla vitae elit libero, a pharetra augue mollis interdum.</a></p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
        <div className="home-section">
          <h1>Categories!</h1>
          <h2>Discover all the categories on our Web!</h2>
        </div>
        {/* <div>
          <a href="/books/api/v1/bases_de_datos"><img src={this.state.books.cover}/>AQUIIIII</a>
          <a href="/books/api/v1/desarrollo_web">desarrollo web</a>
          <a href="/books/api/v1/electronica">electronica</a>
        </div> */}
        <div className="container-categories">
          {this.state.categories.map((oneCategory, index = this.state.categories.ID) => {
            return (
              <div key={index} className="card-categories" style={{ backgroundImage: `url(${this.state.books.cover})` }}>
                <img src={this.state.books.cover} alt={this.state.books.title}/>
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