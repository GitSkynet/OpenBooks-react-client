import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Carrousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "300px", backgroundPosition: "center", backgroundSize: "cover" }}
            className="d-block w-100"
            src="https://midu.dev/images/wallpapers/una-taza-de-javascript.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>JavaScript</h3>
            <Button><a href="/books/api/v1/javascript">Aprende JavScript con nuestros recursos, hazte un pro y pasa al siguiente nivel!</a></Button>
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
            <p><a href="/books/api/v1/desarrollo_web">Muestra todos nuestros recursos sobre web!</a></p>
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