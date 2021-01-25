import React, { Component } from "react";
import service from "../api/service";
import SimpleSlider2 from '../components/SimpleSlider2';

class SuperHome extends Component  {
    state ={
        name: 'javascript',
        books: [],
        count: 0,
    }

    getBooks = async () => {
        const name = this.state.name;
        let books = await service.getGoogleBooks(name);
        this.setState({ books: books });
    };

    scroll = () => {
        const element = document.querySelector('.popular-books');
        element.scrollIntoView('ease-in', 'start');
    }
    
    changeName = (name2) => {
        console.log(name2, "NAME2!!!!")
        this.setState({ name: name2});
        this.getBooks();
    }
    
    componentDidMount = () =>{
        this.getBooks();
    }
    
  render() {
    return (
        <>
        <div className="book-store">
            <div className="container-slider2">
                <h6>Most rated on...</h6>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Google_Books_logo_2015.svg/1200px-Google_Books_logo_2015.svg.png" alt="Google Books Logo" />
            </div>
            <div className="home-slider">
                <h6>JavaScript</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                name={'javascript'}
                />
            </div>
            <div className="home-slider">
                <h6>MySQL</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                    name={'mysql'}
                />
            </div>
            <div className="home-slider">
                <h6>HTML</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                    name={'html'}
                />
            </div>
            <div className="home-slider">
                <h6>CSS</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                    name={'css'}
                />
            </div>
            <div className="home-slider">
                <h6>Python</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                    name={'python'}
                />
            </div>
            <div className="home-slider">
                <h6>ReactJS</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                    name={'reactjs'}
                />
            </div>
            <div className="home-slider">
                <h6>MongoDB</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                    name={'mongdb'}
                />
            </div>
            <div className="home-slider">
                <h6>Algorithms</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                    name={'algorithms'}
                />
            </div>
            <div className="home-slider">
                <h6>Web Development</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                    name={'web'}
                />
            </div>
            <div className="home-slider">
                <h6>TypeScript</h6>
                {/* <a href={("/books/openlibra/javascript/")}>View all results</a> */}
            </div>
            <div>
                <SimpleSlider2 
                    name={'typescript'}
                />
            </div>
        </div>
    </>
    );
  }
}

export default SuperHome;