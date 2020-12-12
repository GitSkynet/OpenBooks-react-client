import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Carrousel extends Component {
  state ={
    subcategories: [],
    image: ""
  }

  render() {
    return (
      <div>
        <h1>Most downloaded on...</h1>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "300px", backgroundPosition: "center", backgroundSize: "cover" }}
            className="d-block w-100"
            src="https://midu.dev/images/wallpapers/una-taza-de-javascript.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <Button href="/books/api/v1/javascript">JavaScript</Button>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            style={{ height: "300px", backgroundPosition: "cover" }}
            className="d-block w-100"
            src="https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Desarrollo Web</h3>
            <Button href="/books/api/v1/desarrollo_web">Desarrollo Web</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "300px", backgroundPosition: "cover" }}
            className="d-block w-100"
            src="https://gitskynet.github.io/OpenBooks/img/cLanguage.gif"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>C programming</h3>
            <Button href="/books/api/v1/c">Programming inC Language</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ height: "300px", backgroundPosition: "cover" }}
            className="d-block w-100"
            src="https://blog.tednologia.com/wp-content/uploads/2020/03/php-2.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>PHP</h3>
            <Button href={`/books/api/v1/programacion_php`}>PHP</Button>
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
            <h3>Algoritmos</h3>
            <Button href={`/books/api/v1/algoritmos`}>Algorithms</Button>
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
    </div>
    )
  }
}

export default Carrousel;