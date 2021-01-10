import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class BookCard extends Component {
  
  render() {
    return (
      <div className="book-card" key={this.props.index}>
        <div className="content-wrapper">
          <div className="content-wrapper2">
            <img src={this.props.image} alt="logos" className="book-card-img"/>
            <span className="book-voters card-vote">1.987 voter</span>
            <div className="rate">
                <fieldset className="rating book-rate">
                  <input type="checkbox" id="star-c6" name="rating" value="5" />
                  <label className="full" htmlFor="star-c6"></label>
                  <input type="checkbox" id="star-c7" name="rating" value="4" />
                  <label className="full" htmlFor="star-c7"></label>
                  <input type="checkbox" id="star-c8" name="rating" value="3" />
                  <label className="full" htmlFor="star-c8"></label>
                  <input type="checkbox" id="star-c9" name="rating" value="2" />
                  <label className="full" htmlFor="star-c9"></label>
                  <input type="checkbox" id="star-c10" name="rating" value="1" />
                  <label className="full" htmlFor="star-c10"></label>
                </fieldset>
            </div>
          </div>
          <div className="card-content">
            <div className="book-name">{this.props.title}</div>
            <div className="book-name">{this.props.date}</div>
            <div className="book-by">{this.props.author}</div>
            <div className="book-by">{this.props.amount} {this.props.money}</div>
            <Button href={this.props.preview} className="book-by">{this.props.preview_name}</Button>
            <div className="book-sum card-sum">
              {this.props.content}{" "}
            </div>
          </div>
        </div>
        {/* <div className="likes">
          <div className="like-profile">
            <img
              src="https://randomuser.me/api/portraits/women/63.jpg"
              alt=""
              className="like-img"
            />
          </div>
          <div className="like-name">
            <span>Kimberly Jones</span> like this
          </div>
        </div> */}
      </div>
    );
  }
}

export default BookCard;
