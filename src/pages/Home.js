import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Home extends Component {
  state = {
    books: [],
  }

  render() {
    return (
      <div>
        <div className="js-div">
            <div className="js-container">
              <h2>Learn JavaScript with our resources</h2>
              <p>Books to learn JavaScript thanks to OpenLibra. Enjoy and learning with us!</p>
            </div>
            <div className="js-container">
              <img src="https://ayudawp.com/wp-content/uploads/2017/01/javascript-logo-escudo.png" alt="book javascript"/>
              <Button href="/books/openlibra/javascript">Go to section!</Button>
            </div>
        </div>
        <div className="web-section">
            <div className="web-container">
              <h2>Learn Web Development</h2>
              <p>Books about stuff of web development</p>
              <Button href="/books/openlibra/desarrollo_web">Go to section!</Button>
            </div>
        </div>
        <div className="cl-div">
            <div className="cl-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="book javascript"/>
              <div className="cl-buttons">
                <Button href="/books/openlibra/c">C</Button>
                <Button href="/books/openlibra/c-plus-plus">C++</Button>
                <Button href="/books/openlibra/c-sharp">C#</Button>
              </div>
            </div>
            <div className="cl-container">
              <h2>Learn C, C++, C#</h2>
              <p>Learn with our resources and become a pro of C language!</p>
            </div>
        </div>
        <div className="php-div">
            <div className="php-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" alt="book javascript"/>
              <Button href="/books/openlibra/programacion_php">Go to section!</Button>
            </div>
            <div className="php-container">
              <h2>PHP</h2>
              <p>Learn PHP with our resources</p>
            </div>
        </div>
        <div className="home-section2">
          <div>
            <h3>Join today!</h3>
            <p>Get access to find any resource on programming, databases,
            web development, JavaScipt, C, C ++ ...
            +3500 books at your disposal to read online or
            download directly. Browse through our sections,
              find what you are looking for and enjoy learning!</p>
            <Button href="/signup" className="primary" variant="primary" size="sm" active>Register</Button>
          </div>
          <div>
            <ul className="home_section2_list">
              <li>Enjoy OpenBooks allways without ads</li>
              <li>Keep a personal book-list</li>
              <li>Filter your books by favourite, read...explore!</li>
              <li>Download directly or view online</li>
              <li>Create personal lists</li>
              <li>Contribute and improve our database</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;