import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ResultsOpenLibra extends Component {
    render() {
        const theBook = this.props.theBook;
        return (
            <div key={theBook.id} className="card">
                <img src={theBook?.thumbnail}  alt={theBook.title} />
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