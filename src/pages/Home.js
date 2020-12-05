import React, { Component } from 'react';
import service from '../api/service';
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import axios from 'axios';
class Home extends Component {
  
  state = {
    filteredBooks: [],
    categories: []
  }
  
  //Search Function
  getCategories = async () =>{
    const res = await service.getCategoriesFromApi()
    this.setState({categories: res});
    console.log(res.data)
  }

  filterSearch = async (searchTerm) =>{
    const searchedTerm = searchTerm.toLowerCase();
    const filteredList = await service.searchBook(searchedTerm)
    if(searchTerm){
      this.setState({
        filteredBooks: filteredList
      })
    }
  }

  clearSearch = ()=>{
    this.setState({ filtredBooks: []})
  }

  componentDidMount(){
    this.getCategories();
  }

	render(){
    return (
      <div> 
        <div className="home-section">
					<h1>OPENBOOKS V2</h1>
					<h2>Find wat you want, all resources on programming are here!</h2>
					<SearchBar filterSearch={this.filterSearch} clearSearch={this.clearSearch}/>
				</div>
        <div className="search-section">
          { this.state.filteredBooks.map((oneBook, index) => {
					return <SearchResult key={index} theBook={oneBook} />
				})}
        </div>
        <div className="home-section">
					<h1>Categories!</h1>
					<h2>Discover all the categories on our Web!</h2>
				</div>
          {this.state.categories.map((oneCategory)=>{
            return(
              <div index={oneCategory.ID}>
                <a href={`/books/${oneCategory.nicename}`}><h3>{oneCategory.name}</h3></a>
              </div>
              )
          })} 
      </div> 
    )
  }
}

export default Home;