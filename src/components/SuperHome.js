import React, { Component } from "react";
import service from "../api/service";
import SimpleSlider from "./SimpleSlider";

class SuperHome extends Component {
    state ={
        name: 'libros_programacion',
        pagina: 0,
        books: [],
        subcategories: []
    }

    getAllBooks = async (name) => {
        if(!name){
            name = this.state.name;
        }
        const subCat = await service.getSubCategoriesFromApi(this.props.category_id);
        this.setState({ subcategories: subCat, name: name});
        console.log(this.state.subcategories,"Component")
    }

    scroll = () => {
        const element = document.querySelector('.popular-books');
        element.scrollIntoView('ease-in', 'start');
    }
    
    componentDidMount = () =>{
        this.getAllBooks();
    }

    render() {
        const books = this.state.books;
        const categories = this.state.categories;
        const name = this.state.name.replace(/_/g, ' ');
    return (
        <div>
            {this.state.subcategories?.map((eachName) =>{
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
            <div className="book-store">
                <div className="popular-books">
                    <div className="results-home">
                        <h5>{this.state.count} results</h5>
                        {this.state.count > 10 ?(<>
                            <a href={(`/books/openlibra/${this.state.name}`)}>
                                View all 
                            </a>
                            </>):(<></>)}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default SuperHome;
