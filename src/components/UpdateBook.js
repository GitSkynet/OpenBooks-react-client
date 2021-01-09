import React, { Component } from 'react';
import service from "../api/service";

class UpdatedBook extends Component {
  state = {
    title: "",
    year: "",
    description: "",
    writer: "",
    poster: ""
  }

  getDetailsBook = async () => {
    let res = await service.getDetailsBook(this.props.match.params.id);
    this.setState({
      title: res.title,
      year: res.year,
      description: res.description,
      writer: res.writer,
      poster: res.poster
    })
  }

  handleFileUpload = async (e) => {
    console.log("the file to be uploaded is: ", e.target.files[0]);
    // let poster = e.target.files[0]
    // creamos un nuevo objeto FormData
    const uploadData = new FormData();
    // poster (este nombre tiene que ser igual que en el modelo, ya que usaremos req.body como argumento del método .create() cuando creemos una nueva movie en la ruta POST '/api/movies/create')
    uploadData.append("poster", e.target.files[0]);
    console.log(uploadData)
    try {
      const res = await service.handleUpload(uploadData);
      this.setState({ poster: res.secure_url });
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };

  componentDidMount = () => {
    this.getDetailsBook();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await service.updateBook(this.state, this.props.match.params.id);
      this.setState({
        title: "",
        year: "",
        description: "",
        writer: "",
        poster: ""
      });
      console.log("added");
    } catch (error) {
      console.log("Error while adding the movie: ", error);
    }
  };

  render() {
    return (
      <div className="container3" style={{backgroundImage: `url(${this.state.poster})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat`}}>
        <form onSubmit={(e) => this.handleSubmit(e)} className="edit-form">
          <h2>Update the book</h2>
          <label htmlFor="">Ttile Book</label>
          <input
            className="input"
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Enter title book"
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Book year</label>
          <input
            className="input"
            type="text"
            name="year"
            value={this.state.year}
            placeholder="Book year"
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Escritor</label>
          <input
            className="input"
            type="text"
            name="writer"
            value={this.state.writer}
            placeholder="Escritor"
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Description: </label>
          <textarea
            type="textarea"
            rows="10" cols="50"
            name="description"
            value={this.state.description}
            placeholder="Añade tu descripcion"
            onChange={(e) => this.handleChange(e)}
          />

          <label htmlFor="">Select poster:</label>
          <input className="input" type="file" onChange={(e) => this.handleFileUpload(e)} />

          <button type="submit">Update book</button>
        </form>
      </div>
    );
  }
}

export default UpdatedBook;