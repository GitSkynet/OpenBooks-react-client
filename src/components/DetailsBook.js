import React, { Component } from 'react';
import service from '../api/service';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class DetailsBook extends Component {
    state = {
        book: {},
        categories: []
    }

    getDetailsBook = () => {
        const id = this.props.match.params.id
        axios.get(`https://www.etnassoft.com/api/v1/get/?id=${id}`).then(response =>{
        const book = response.data[0]    
        this.setState({book: book});
        console.log(this.state.book, "book details")
        })
    }

    deleteBook = async () => {
        await service.deleteBook(this.props.match.params.id);
        this.props.history.push("/books");
    }

    componentDidMount = () => {
        this.getDetailsBook();
    }

    render() {
        const book = this.state.book;
        return (
            <div className="container-details">
                <div className="details-div">
                    <div className="details-image">
                        <img className="image" src={book.cover} alt={book.title}/>
                    </div>
                    <div className="details">
                        <h2>Escritor: {book.author}</h2>
                        <h3>{book.title}</h3>
                        <h5>Pages: {book.pages}</h5>
                        <h5>Publisher: {book.publisher}</h5>
                        <h5>{book.publisher_date}</h5>
                    </div>
                </div>
                <div className="align-delete">
                    <Button href={book.url_download} target="_blank" rel="noopener noreferrer">Download</Button>
                </div>
                <div className="details-content">
                    <div>
                        <p>Descripción : <br/> {book.content}</p>
                    </div>
                    <div className="details-categories">
                        <div className="details-title">
                        <h3>Similar Categories</h3>
                        </div>
                        <div className="book-categories">
                            {book.categories?.map((eachCategory, index) => {
                                return(
                                    <a href={`/books/openlibra/${eachCategory.nicename}`} key={index}>
                                        <div className="each-category">
                                            <p className="parraf">{eachCategory.name}</p>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                    <div className="details-categories">
                        <div className="details-title">
                            <h3>Similar Tags</h3>
                        </div>
                        <div className="book-categories">
                            {book.tags?.map((eachTag, index) => {
                                return(
                                    <a href={`/books/openlibra/${eachTag.nicename}`} key={index}>
                                        <div className="each-category">
                                            <p className="parraf">{eachTag.name}</p>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsBook;








