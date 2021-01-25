import React, { Component } from "react";
import Slider from "react-slick";
import service from "../api/service";

class SimpleSlider2 extends Component {
  state = {
    name: this.props.name,
    books: [],
  };

  getAllBooks = async () => {
      const name = this.props.name;
      const allBooks = await service.getGoogleBooks(name);
      this.setState({ books: allBooks });
      console.log(this.state.books, "Simple Slider google")
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
      initialSlide: 1,
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
        {books?.map((book, key= this.state.books.ID) => {
          return (
            <div className="div-slider" key={key}>
                <div className="slider-item">
                  <a href={book.volumeInfo.previewLink} rel="noopener noreferrer" target="_blank">
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}/>
                  </a>
                </div>
                <div className="prueba1">
                  <p>{book.volumeInfo.title}</p>
                </div>
            </div>
          )
        })}
        </Slider>
    );
  }
}

export default SimpleSlider2;

// index={book.ID}
// title={book.volumeInfo.title}
// preview={book.volumeInfo.previewLink}
// preview_name={'Preview'}
// image={book.volumeInfo.imageLinks?.thumbnail}
// content={book.searchInfo?.textSnippet}
// publisher={book.publisher}
// date={book.publishedDate}
// amount={book.saleInfo.listPrice?.amount}
// money={book.saleInfo.listPrice?.currencyCode}
// author={book.author}
