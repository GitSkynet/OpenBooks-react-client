import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

class Carrousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "300px", backgroundPosition: "cover" }}
            className="d-block w-100"
            src="https://img.unocero.com/2019/03/javascript.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>JavaScript</h3>
            <p><a href="/books/api/v1/javascript">Aprende JavScript con nuestros recursos, hazte un pro y pasa al siguiente nivel!</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px", backgroundPosition: "cover" }}
            className="d-block w-100"
            src=""
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>titulo2</h3>
            <p><a href={`/details/javascirpt`}>Nulla vitae elit libero, a pharetra augue mollis interdum.</a></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px", backgroundPosition: "cover" }}
            className="d-block w-100"
            src=""
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>titulo3</h3>
            <p><a href={`/details/javascirpt`}>Nulla vitae elit libero, a pharetra augue mollis interdum.</a></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Carrousel;