import React, { Component } from "react";
import Slider from "react-slick";
import service from "../api/service";

class SimpleSlider extends Component {
  state = {
    name: this.props.name,
    books: [],
  };

  getAllBooks = async () => {
      const name = this.props.name;
      const allBooks = await service.getBooksFromApi(name);
      this.setState({ books: allBooks });
  };

  componentDidMount = () =>{
    this.getAllBooks();
  }

  componentDidUpdate = () =>{
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
                  <a href={(`/details/${book.ID}`)}>
                    <img src={book.cover} alt={book.title}/>
                  </a>
                </div>
                <div className="prueba1">
                  <p>{book.title}</p>
                </div>
            </div>
          )
        })}
        </Slider>
    );
  }
}

export default SimpleSlider;
