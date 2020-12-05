import React, { Component } from 'react';
import service from '../api/service';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class DetailsBook extends Component {
    state = {
        book: {},
        author: ""
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
        const book = this.state.book
        return (
            <div className="card2">
                <div className="img-div">
                    <img src={book.cover} alt={book.title}/>
                </div>
                <div>
                    <h2>Escritor: {book.author}</h2>
                    <h3>{book.title}</h3>
                    <h4>{book.author}</h4>
                    <p>Descripción : <br/> {book.content}</p>
                    <a href={book.url_download}>Download</a>
                </div>
                <div className="align-delete">
                    <Button onClick={() => this.deleteBook(book.ID)} >Delete</Button>
                    <Button><a href={`/books/upload/${book.ID}`}>Edit</a></Button>
                </div>
            </div>
        );
    }
}

export default DetailsBook;








