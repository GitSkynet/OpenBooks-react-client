import React, { Component } from 'react';
import service from '../api/service';
import Button from 'react-bootstrap/Button';
import { DiscussionEmbed } from 'disqus-react';

class DetailsBook extends Component {
    state = {
        book: {},
        categories: []
    };

    getDetailsBook = async () => {
        const id = this.props.match.params.id;
        const res = await service.getDetailsBook(id);
        console.log("res", res);
        this.setState({ book: res})
    };

    deleteBook = async () => {
        await service.deleteBook(this.props.match.params.id);
        this.props.history.push("/books");
    };

    componentDidMount = () => {
        this.getDetailsBook();
    };

    render() {
        const book = this.state.book;
        return (
            <div className="container-details">
                <div className="details-div">
                    <div className="details-image">
                        <img className="image" src={book.cover} alt={book.title}/>
                    </div>
                    <div className="details">
                        <h2>{book.title}</h2>
                        <h3>Escritor: {book.author}</h3>
                        <h5>Pages: {book.pages}</h5>
                        <h5>Publisher: {book.publisher}</h5>
                        <h5>{book.publisher_date}</h5>
                    </div>
                </div>
                <div className="disqus">
                    <DiscussionEmbed
                        shortname='openbooksv2'
                        config={
                            {
                                url: `${process.env.REACT_APP_API_URI}/details/${book.ID}`,
                                identifier: book.ID,
                                title: `Comentarios en ${book.title}`,
                                language: 'es_ES' //e.g. for Traditional Chinese (Taiwan)	
                            }
                        }
                        />
                </div>
                <div className="details-content">
                    <p>Descripción : <br/> {book.content}</p>
                    <div className="align-delete">
                        <Button className="download" href={book.url_download} target="_blank" rel="noopener noreferrer">Download</Button>
                    </div>
                    <div className="tags-categories">
                        <div className="details-categories">
                        <div className="details-title">
                        <h3>Similar Categories</h3>
                        </div>
                        <div className="book-categories">
                            {book.categories?.map((eachCategory, index) => {
                                return(
                                    <Button className="tag-categories"
                                    href={`/books/openlibra/${eachCategory.nicename}`}
                                    key={index}
                                    rel="noopener noreferrer"
                                    >{eachCategory.name}</Button>
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
                                    <Button className="tag-categories"
                                    href={`/books/openlibra/${eachTag.nicename}`}
                                    key={index}
                                    rel="noopener noreferrer"
                                    >{eachTag.name}</Button>
                                )
                            })}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default DetailsBook;








