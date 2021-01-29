import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SimpleSlider from '../components/SimpleSlider';
import SearchBar from "../components/SearchBar";
import ResultsOpenLibra from '../components/ResultsOpenLibra';
import service from '../api/service';

class Home extends Component {
  state={
    filteredBooks: [],
    count: 0,
    name: '',
    categories: [],
    books: []
  }; 

  getAllBooks = async () => {
      const categories = await service.getCategoriesFromApi()
      this.setState({ categories });
      // const name = this.state.name;
      // const count = 0;
      // const allBooks = await service.getBooksFromApi(name, count);
      // this.setState({ books: allBooks });
  };

  
  //Search Function
  searchOpenLibra = async (searchTerm) => {
    const searchedTerm = searchTerm.toLowerCase();
    const count = await service.getCountSearch(searchedTerm);
    const filteredList = await service.searchBook(searchedTerm);
    if (searchTerm) {
      this.setState({ filteredBooks: filteredList, count: count })
    }
  }
  
  clearSearch = () => {
    this.setState({ filteredBooks: [] });
  }
  
  componentDidMount = () =>{
    this.getAllBooks();
  }

  render() {
    return (
      <>
        <SearchBar
          filterSearch={this.searchOpenLibra}
          clearSearch={this.clearSearch}
          count={this.state.count}
        />
        <div className="google-results">
          {this.state.filteredBooks?.map((book, index) => {
            return <ResultsOpenLibra key={index} theBook={book} />             
          })}
        </div>
        <div>
          <div className="container-slider">
            <h6>Most rated on...</h6>
            <img src="https://openlibra.blob.core.windows.net/assets-files/powered-by-openlibra-logo.png" alt="Open Libra Logo" />
          </div>
            {this.state.categories?.map((eachName) =>{
              return(
              <div key={eachName.category_id}>  
                <div className="home-slider" >
                  <h6>{eachName.name}</h6>
                  <a href={(`/books/openlibra/${eachName.nicename}`)}>View all results</a>
                </div>
                <div>
                  <SimpleSlider 
                    name={eachName.nicename}
                  />
                </div>
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
              <li>Filter your books by favourite, share book with others...explore!</li>
              <li>Download directly or view online</li>
              <li>Create personal lists</li>
              <li>Contribute and improve our database</li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Home;