import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class searchResult extends Component {
    render() {
        const book = this.props.theBook;
        return (
            <div key={book.id} className="card">
                <img src={book.volumeInfo.imageLinks?.thumbnail}  alt={book.volumeInfo.title} />
                <div className="card-body">
                    <h5>{book.volumeInfo.title}</h5>
                    <h6>{book.author}</h6>
                    <Button href={book.volumeInfo.previewLink} className="book-by">Preview</Button>
                </div>
            </div>
        )
    }
}

export default searchResult;