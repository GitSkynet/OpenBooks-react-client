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
      const res = await this.service.get(`/books/mybooks?page=` + pagina);
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
  getBooksFromApi = async ( name, pagina=0) => {
    try {
      const res = await this.service.get(`/books/api/v1/${name}/${pagina}`);
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

  //Search funtion over OpenLilbra API
  searchBook = async (query) => {
    const items = 10;
    try {
      const res = await axios.get(`https://www.etnassoft.com/api/v1/get/?keyword=${query}&?any_tags=[${query}]&num_items=${items}`);
      return res.data; 
    }catch (error) {
      console.log(error);
    }
  };

  //Get Categories from API
  getCategoriesFromApi = async () => {
    try {
      const res = await axios.get(`https://www.etnassoft.com/api/v1/get/?get_categories=all`);
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  //GET Carrousel from API
  getCarrousel = async () => {
    try{	
      const res = await axios.get(`https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed`);
      return res.data;
    }catch(err){
      console.log(err)
    }
  }

  ////////////////////////////END BOOKS FROM OPENLIBRA API///////////////////////////////////

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  ////////////////////////////BOOKS FROM GOOGLEBOOKS API///////////////////////////////////////

  //GET Route from Google Books API
  getGoogleBooks = async ( name, pagina=0) => {
    try {
      const res = await this.service.get(`/books/google-books`);
      console.log(res, "RES GOOGLE BOOKS CLIENT SERVICE.JS")
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }


  ////////////////////////////END BOOKS FROM GOOGLEBOOKS API/////////////////////////////////
  //<<<<<<<<<<<<<<<<<<<<<<<<<<<----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

const axiosRequestFunctions = new Service();
export default axiosRequestFunctions;