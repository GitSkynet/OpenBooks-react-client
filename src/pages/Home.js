import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import NewsHome from '../components/NewsHome';
// import NewsHome2 from '../components/NewsHome2';
import SimpleSlider from '../components/SimpleSlider';
import SearchBar from "../components/SearchBar";
import ResultsOpenLibra from '../components/ResultsOpenLibra';
import service from '../api/service';

class Home extends Component {
  state={
    filteredBooks: []
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

  render() {
    return (
      <>
        {/* <NewsHome2 />   // Introduction section (!! CHANGE NAME !!)
        <NewsHome />    // JavaScript section (!! CHANGE NAME !!) */}
        <SearchBar
          filterSearch={this.searchOpenLibra}
          clearSearch={this.clearSearch}
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
          <div className="home-slider">
            <h6>JavaScript</h6>
              <a href={("/books/openlibra/javascript")}>View all results</a>
          </div>
          <div>
            <SimpleSlider 
            name={'javascript'}
            />
          </div>
          <div className="home-slider">
            <h6>PHP</h6>
            <a href={("/books/openlibra/programacion_php")}>View all results</a>
          </div>
          <div>
            <SimpleSlider 
              name={'programacion_php'}
            />
          </div>
          <div className="home-slider">
            <h6>Web Development</h6>
            <a href={("/books/openlibra/desarrollo_web")}>View all results</a>
          </div>
          <div>
            <SimpleSlider 
              name={'desarrollo_web'}
            />
          </div>
          <div className="home-slider">
            <h6>C Development</h6>
            <a href={("/books/openlibra/c")}>View all results</a>
          </div>
          <div>
            <SimpleSlider 
              name={'c'}
            />
          </div>
          <div className="home-slider">
            <h6>C# Development</h6>
            <a href={("/books/openlibra/c-sharp")}>View all results</a>
          </div>
          <div>
            <SimpleSlider 
              name={'c-sharp'}
            />
          </div>
          <div className="home-slider">
            <h6>C++ Development</h6>
            <a href={("/books/openlibra/c-plus-plus")}>View all results</a>
          </div>
          <div>
            <SimpleSlider 
              name={'c-plus-plus'}
            />
          </div>
          <div className="home-slider">
            <h6>Python</h6>
            <a href={("/books/openlibra/programacion_python")}>View all results</a>
          </div>
          <div>
            <SimpleSlider 
              name={'programacion_python'}
            />
          </div>
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