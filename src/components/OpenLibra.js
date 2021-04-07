import React, { Component } from 'react';
import service from '../api/service';
import NewsHome2 from './NewsHome2';
import SimpleSlider from '../components/SimpleSlider';
import BookCard from './BookCard';
import { Form, Col } from 'react-bootstrap';

class OpenLibra extends Component {
    state = {
        categories: [],
        subcategories: [],
        books: []
    }

    //Get Categories Function
    getCategories = async () => {
        const res = await service.getCategoriesFromApi()
        this.setState({ categories: res });
        console.log("aqui", this.state.categories)
    }

    subCategories = async (id, name) => {
        if(id === undefined){
            id = 677;
        };
        const res = await service.getSubCategoriesFromApi(id);
        if(res.length === 0) {
            const res = await service.getBooksFromApi(name);
            this.setState({books: res})
        }
        this.setState({ subcategories: res});
    }

    componentDidMount = () => {
        this.getCategories();
    };

    render() {
        return (
            <div>
            <NewsHome2 />
            <div className="container-slider">
                <h6>Select Category</h6>
                    <Form.Control as="select" defaultValue="Choose...">
                        {this.state.categories?.map((eachOne) => {
                            return (
                                <option onClick={() => this.subCategories(eachOne.category_id, eachOne.nicename)}>{eachOne.name}</option>
                            )
                        })}
                    </Form.Control>
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
            <div className="book-cards">
            {this.state.books?.map((book, key= book.ID) => {
                return (
                <div key={book.subcategory_id}>
                    <div className="home-slider" >
                        <h6>{book.name}</h6>
                        <a href={(`/books/openlibra/${book.nicename}`)}>View all results</a>
                    </div>
                    <BookCard
                        key={key}
                        title={book.title}
                        image={book.cover}
                        content={book.content_short}
                        publisher={book.publisher}
                        date={book.publisher_date}
                        author={book.author}
                        preview={`/details/${book.ID}`}
                        preview_name={'Details'}
                    />
                </div>
                    )
                })}
            </div>
                <div className="home-section">
                    <h1>Categories</h1>
                    <h2>Navigate directly to...</h2>
                </div>
            </div>
        );
    }
}

export default OpenLibra;