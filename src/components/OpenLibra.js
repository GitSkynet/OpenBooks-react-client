import React, { Component } from 'react';
import service from '../api/service';
import NewsHome2 from './NewsHome2';
import SimpleSlider from '../components/SimpleSlider';

class OpenLibra extends Component {
    state = {
        categories: [],
        subcategories: []
    }

    //Get Categories Function
    getCategories = async () => {
        const res = await service.getCategoriesFromApi()
        this.setState({ categories: res });
    }
    
    subCategories = async (id, name) => {
        if(id === undefined){
            id = 677;
        };
        const res = await service.getSubCategoriesFromApi(id);
        this.setState({ subcategories: res});
    }

    componentDidMount = () => {
        this.getCategories();
        this.subCategories();
    };
    
    render() {
        return (
            <div>
            <NewsHome2 />
            <div className="container-slider">
                <h6>Select Category</h6>
                <select>
                {this.state.categories?.map((eachOne) => {
                    return (
                        <>
                        <option onClick={() => this.subCategories(eachOne.category_id, eachOne.nicename)}>{eachOne.name}</option>
                        </>
                    )
                })}
                </select>
                <img src="https://openlibra.blob.core.windows.net/assets-files/powered-by-openlibra-logo.png" alt="Open Libra Logo" />
            </div>
            {this.state.subcategories?.map ((eachOne) => {
                return(
                    <div key={eachOne.subcategory_id}>  
                        <div className="home-slider" >
                        <h6>{eachOne.name}</h6>
                        <a href={(`/books/openlibra/${eachOne.nicename}`)}>View all results</a>
                        </div>
                        <div>
                        <SimpleSlider 
                            name={eachOne.name}
                            nicename={eachOne.nicename}
                        />
                        </div>
                    </div>
                )
            })}
                <div className="home-section">
                    <h1>Categories</h1>
                    <h2>Navigate directly to...</h2>
                </div>
            </div>
        );
    }
}

export default OpenLibra;