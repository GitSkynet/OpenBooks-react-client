import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class searchResult extends Component {
    render() {
        const theBook = this.props.theBook;
        return (
            <div key={theBook.id} className="card">
                <img src={theBook.volumeInfo.imageLinks?.thumbnail}  alt={theBook.volumeInfo.title} />
                <div className="card-body">
                    <h5>{theBook.volumeInfo.title}</h5>
                    <h6>{theBook.author}</h6>
                    <Button href={`/details/${theBook.id}`} 
                    className="primary" variant="primary" size="sm">Details</Button>
                </div>
            </div>
        )
    }
}

export default searchResult;