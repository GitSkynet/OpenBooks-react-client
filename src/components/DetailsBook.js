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
        console.log(this.state.book)
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
            <div className="card2">
                <div className="img-div">
                    <img src={book.cover} alt={book.title}/>
                </div>
                <div>
                    <h2>Escritor: {book.author}</h2>
                    <h3>{book.title}</h3>
                    <h5>Pages: {book.pages}</h5>
                    <h5>Publisher: {book.publisher}</h5>
                    <h5>{book.publisher_date}</h5>
                    <div className="details-categories">
                        {book.categories?.map((eachCategory, index) => {
                            return(
                                <a href={`/books/openlibra/${eachCategory.nicename}`}>
                                    <div className="each-category">
                                        <p className="parraf">{eachCategory.name}</p>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                    <p>Descripción : <br/> {book.content}</p>
                </div>
                <div className="align-delete">
                    <Button href={book.url_download} target="_blank" rel="noopener noreferrer">Download</Button>
                </div>
            </div>
        );
    }
}

export default DetailsBook;








