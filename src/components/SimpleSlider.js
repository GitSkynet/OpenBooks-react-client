import React, { Component } from "react";
import Slider from "react-slick";
import service from "../api/service";
import Button from 'react-bootstrap/Button';

export default class MultipleItems extends Component {
  state = {
    name: 'javascript',
    books: [],
  };

  getAllBooks = async () => {
    const name = this.props.name;
    const allBooks = await service.getBooksFromApi(name);
    this.setState({ books: allBooks });
    console.log(this.props, "PROPS!!!!")
  };

  componentDidMount = () =>{
    this.getAllBooks();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    const books = this.state.books;
    return (
        <Slider {...settings}>
        {books?.map((book, key= this.state.books.ID) => {
          return (
            <div className="div-slider" key={key}>
                <div className="slider-item">
                {/* <h6>{book.title}</h6> */}
                <img src={book.cover} alt={book.title}/>
                <Button href={(`/details/${book.ID}`)}>More details</Button>
                </div>
            </div>
          )
        })}
        </Slider>
    );
  }
}
