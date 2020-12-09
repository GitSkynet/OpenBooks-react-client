import React, { Component } from 'react';

class searchResult extends Component {
    render() {
        const theBook = this.props.theBook;
        return (
            <div className="align-random">
                <div className="cover-movie" style={{backgroundImage: `url(${theBook.cover})`, backgroundPosition: "center", backgroundSize: "cover"}}>
                    <a href={`/details/${theBook.ID}`}><h5>{theBook.title}</h5></a>  
                </div>
            </div>
        )
    }
}

export default searchResult;