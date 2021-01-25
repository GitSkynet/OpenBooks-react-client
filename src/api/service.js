import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      noURL: process.env.REACT_APP_GOOGLE_KEY,
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
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////END OF BOOKS FROM NY DATABASE//////////////////////////////////

  //<<<<<<<<<<<<<<<<<<<<<<<<<<<----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  ////////////////////////////BOOKS FROM OPENLIBRA API///////////////////////////////////////
  
   //GET Counter items
   getCountItems = async (name) => {
    try {
      const counter = await axios.get(`https://www.etnassoft.com/api/v1/get/?category=${name}&count_items=true`);
      const count = counter.data.num_items;
      return (count)
    } catch (error) {
      console.log(error)
    }
  }

  //GET Route
  getBooksFromApi = async ( name, count) => {
    try {
      const books = await axios.get(`https://www.etnassoft.com/api/v1/get/?category=${name}&results_range=${count},10`);
      return (books.data)
    } catch (error) {
      console.log(error)
    }
  }

    //GET Subcategories from API
    getSubCategoriesFromApi = async ( name) => {
      try {
        const books = await axios.get(`https://www.etnassoft.com/api/v1/get/?subcategory=${name}&num_items=10`);
        return (books.data)
      } catch (error) {
        console.log(error)
      }
    }

  //Search funtion over OpenLilbra API
  searchBook = async (name) => {
    try {
      const res = await axios.get(`https://www.etnassoft.com/api/v1/get/?keyword=${name}`);
      return res.data; 
    }catch (error) {
      console.log(error);
    }
  };

   //GET Counter items
   getCountSearch = async (name) => {
    try {
      const counter = await axios.get(`https://www.etnassoft.com/api/v1/get/?keyword=${name}&count_items=true`);
      const count = counter.data.num_items;
      return (count)
    } catch (error) {
      console.log(error)
    }
  }

  //Get Categories from API
  getCategoriesFromApi = async () => {
    try {
      const res = await axios.get("https://www.etnassoft.com/api/v1/get/?get_categories=all");
      return res.data;
    } catch (error) {
      console.log(error)
    }
  }

 ////////////END BOOKS FROM OPENLIBRA API//////////////////


////////////////BOOKS FROM GOOGLEBOOKS API//////////////////

  //GET Route from Google Books API
  getGoogleBooks = async (name) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&key=AIzaSyBpHucfDaQ0Otfjykymo8dYSYaJrsYrP54`);
      return res.data.items;              
    } catch (error) {
      console.log(error)
    }
  }

  searchGoogle = async (query) => {
    try {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyBpHucfDaQ0Otfjykymo8dYSYaJrsYrP54`);
      return res; 
    }catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////END BOOKS FROM GOOGLEBOOKS API/////////////////////////////////
  

}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;