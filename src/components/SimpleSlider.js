import React, { Component } from "react";
import Slider from "react-slick";
import service from "../api/service";

class SimpleSlider extends Component {
  state = {
    books: [],
  };

  getAllBooks = async () => {
      const name = this.props.nicename;
      const count = 0;
      const allBooks = await service.getBooksFromApi(name, count);
      this.setState({ books: allBooks });
      console.log("HERE", this.state.books)
  };

  componentDidMount = () =>{
    this.getAllBooks();
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 3024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 834,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 648,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
          }
        }
      ]
    };
    const books = this.state.books;
    return (
        <Slider {...settings}>
        {books?.map((book) => {
          return (
            <div className="div-slider" key={book.ID}>
                <div className="slider-item">
                  <a href={(`/details/${book.ID}`)}>
                    {this.state.books.length === 0 ? (<>
                      <img src="https://i.stack.imgur.com/1hvpD.jpg" alt={book.title}/>
                    </>)
                    :(<>
                      <img src={book.cover} alt={book.title}/>
                    </>)}
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
