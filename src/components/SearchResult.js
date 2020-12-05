import React, { Component } from 'react';

class searchResult extends Component {
    render() {
        const theBook = this.props.theBook;
        return (
            <div className="align-random">
                <a href={`/details/${theBook.ID}`}>
                    <div className="cover-movie" style={{backgroundImage: `url(${theBook.cover})`, backgroundPosition: "cover", backgroundSize: "100%"}}>
                    {/* <h3>{theBook.title}</h3>
                    <p>{theBook.description}</p> */}
                    </div>
                </a>  
            </div>
        )
    }
}

export default searchResult;
