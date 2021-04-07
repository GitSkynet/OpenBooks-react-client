import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ResultsOpenLibra extends Component {
    render() {
        const theBook = this.props.theBook;
        console.log("the book:", theBook);
        return (
            <div key={theBook.ID} className="card">
                <img src={theBook?.cover}  alt={theBook.title} />
                <div className="card-body">
                    <h5>{theBook.title}</h5>
                    <h6>{theBook.author}</h6>
                    <Button href={`/details/${theBook.ID}`} 
                    className="primary" variant="primary" size="sm">Details</Button>
                </div>
            </div>
        )
    }
}

export default ResultsOpenLibra;