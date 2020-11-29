import React, { Component } from 'react';
import service from '../api/service';
import Button from 'react-bootstrap/Button';


class DetailsBook extends Component {
    state = {
        book: {}
    }
    getDetailsBook = async () => {
        let res = await service.getDetailsBook(this.props.match.params.id);
        this.setState({ book: res })
    }

    deleteBook = async () => {
        await service.deleteBook(this.props.match.params.id);
        this.props.history.push("/books");
    }

    componentDidMount = () => {
        this.getDetailsBook();
    }

    render() {
        const { book } = this.state
        return (
            <div>
                <div>
                    <h3>{book.book_title}</h3>
                    <h4>{book.book_year}</h4>
                    <p>{book.description}</p>

                </div>
                <div className="align-delete">
                    <Button onClick={() => this.deleteBook(book._id)} className="primary" variant="primary" size="sm" active>Delete</Button>
                    <Button className="primary" variant="primary" size="sm" active><a href={`/books/upload/${book._id}`}>Edit</a></Button>
                </div>
            </div>
        );
    }
}

export default DetailsBook;








