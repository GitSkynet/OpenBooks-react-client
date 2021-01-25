import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class searchResult extends Component {
    render() {
        console.log(this.props.theBook)
        const theBook = this.props.theBook;
        return (
            <div key={theBook.id} className="card">
                <img src={theBook.volumeInfo.imageLinks?.thumbnail}  alt={theBook.volumeInfo.title} />
                <div className="card-body">
                    <h5>{theBook.volumeInfo.title}</h5>
                    <h6>{theBook.author}</h6>
                    <Button href={theBook.volumeInfo.previewLink} className="book-by">Preview</Button>
                </div>
            </div>
        )
    }
}

export default searchResult;