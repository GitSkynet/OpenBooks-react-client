import React, { Component } from 'react';
import service from "../api/service";
// import Button from 'react-bootstrap/Button';

class CreateBook extends Component {
    state= {
        book_title: "",
        description: "",
        book_year: "",
        poster: ""
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleFileUpload = async (e) => {
      console.log("the file to be uploaded is: ", );
      // let poster = e.target.files[0]
      // creamos un nuevo objeto FormData
      const uploadData = new FormData();
      // poster (este nombre tiene que ser igual que en el modelo, ya que usaremos req.body como argumento del método .create() cuando creemos una nueva movie en la ruta POST '/api/movies/create')
      uploadData.append("poster", e.target.files[0]);
  
      try {
        const res = await service.handleUpload(uploadData);
        this.setState({ poster: res.secure_url });
      } catch (error) {
        console.log("Error while uploading the file: ", error);
      }
    };

    handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await service.saveNewBook(this.state);
          console.log("added", res);
    
          this.setState({
            book_title: "",
            description: "",
            book_year: "",
            poster: ""
          });
          console.log('estado HANDLE SUBMIT', res)
          // this.props.getBooks()
        } catch (error) {
          console.log("Error while adding the movie: ", error);
        }
        this.props.history.push("/books");
      };

    render() {
        return (
            <div>
             <form onSubmit={(e) => this.handleSubmit(e)} className="edit-form">
          <h2>Add a new book!</h2>
          <label htmlFor="">Ttile Book</label>
          <input
            className="input"
            type="text"
            name="book_title"
            value={this.state.book_title}
            placeholder="Enter title book"
            onChange={(e) => this.handleChange(e)}
          />
          
          <label htmlFor="">Book year</label>
          <input
            className="input"
            type="text"
            name="book_year"
            value={this.state.book_year}
            placeholder="Book year"
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Description: </label>
          <textarea
            type="text"
            rows="10" cols="50"
            name="description"
            value={this.state.description}
            placeholder="Añade tu descripción"
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Select poster:</label>
          <input className="input" type="file" onChange={(e) => this.handleFileUpload(e)} />

        <button type="submit">Save new movie</button>
        </form>
            </div>
        );
    }
}

export default CreateBook;