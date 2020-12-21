import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      //withCredentials: true
    });
  }

  ////////////////////////////BOOKS FROM NY DATABASE///////////////////////////////////////
  
  //Route GET book
  getBooks = async (pagina =0) => {
    try {
      const res = await this.service.get(`/books/ourbooks?page=` + pagina);
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  //Route CREATE book
  saveNewBook = async (newBook) => {
    console.log("The new book is: ", newBook);
    try {
      const res = await this.service.post("/books/create", newBook);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //Route UPDATE book
  updateBook = async (updatedBook, id) => {
    console.log("The book updated is: ", updatedBook);
    try {
      const res = await this.service.post(`/books/upload/${id}`, {updatedBook});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //Route DETAILS book
  getDetailsBook = async (id) => {
    try {
      const res = await this.service.get("/books/details/"+ id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //Route UPLOAD FILE TO CLOUDINARY
  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);
    try {
      const res = await this.service.post("/books/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //Route DELETE book
  deleteBook = async (id) => {
    try {
      const res = await this.service.post(`/books/delete/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////END OF BOOKS FROM NY DATABASE//////////////////////////////////

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  ////////////////////////////BOOKS FROM OPENLIBRA API///////////////////////////////////////
  
  //GET Route
  getBooksFromApi = async ( name, pagina= 0) => {
    try {
      const res = await this.service.get(`/books/openlibra/${name}/${pagina}`);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  //Search funtion over OpenLilbra API
  searchBook = async (name) => {
    try {
      const res = await this.service.get(`/books/openlibra/search/${name}`)
      console.log(res, "OJOOOO")
      return res.data; 
    }catch (error) {
      console.log(error);
    }
  };

  //Get Categories from API
  getCategoriesFromApi = async () => {
    try {
      const res = await this.service.get(`/books/openlibra`);
      return res.data
    } catch (error) {
      console.log(error)
    }
  }


  ////////////////////////////END BOOKS FROM OPENLIBRA API///////////////////////////////////

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  ////////////////////////////BOOKS FROM GOOGLEBOOKS API///////////////////////////////////////

  //GET Route from Google Books API
  getGoogleBooks = async ( name, pagina=0) => {
    try {
      const res = await this.service.get("/books/googlebooks");
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  searchGoogle = async (query) => {
    try {
      const res = await this.service.get(`/books/googlebooks/search/${query}`)
      console.log(res, "cliente respuesta")
      return res; 
    }catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////END BOOKS FROM GOOGLEBOOKS API/////////////////////////////////
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;