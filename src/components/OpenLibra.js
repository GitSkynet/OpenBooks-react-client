import React, { Component } from 'react';
import service from '../api/service';
import NewsHome2 from './NewsHome2';
// import SearchBar from "../components/SearchBar";
// import ResultsOpenLibra from './ResultsOpenLibra';
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

    componentDidMount = () => {
        this.getCategories();
    }

    render() {
        return (
            <div>
            <NewsHome2 />
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