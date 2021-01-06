import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class NewsHome extends Component {
    render() {
        return (
          <div className="js-div">
          <div className="js-container">
            <h2>Learn <span style={{color: '#9B5DE5'}}>JavaScript</span></h2>
            <p>Books to learn JavaScript thanks to OpenLibra. Enjoy and learning with us!</p>
            <Button href="/books/openlibra/javascript">Go to section!</Button>
          </div>
          <div className="js-container2">
          </div>
        </div>
        );
  
    }
}

export default NewsHome;