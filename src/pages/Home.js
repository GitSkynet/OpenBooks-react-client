import React, { Component } from 'react';
import service from '../api/service';
import Carrousel from '../components/Carrousel';
import { Button } from 'react-bootstrap';

class Home extends Component {

  state = {
    categories: [],
    books: [],
  }

  //Get Categories Function
  getCategories = async () => {
    const res = await service.getCategoriesFromApi()
    this.setState({ categories: res });
  }

  getCarrousel = async () => {
    const res = await service.getCarrousel();
    this.setState({ books: res });
    console.log(this.state.books, "Books home, carrousel")
  }

  render() {
    return (
      <div>
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