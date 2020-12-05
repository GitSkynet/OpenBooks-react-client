import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      // baseURL: "https://www.etnassoft.com/api/v1/get/?",
      withCredentials: true
    });
  }

  getBooks = async () => {
    try {
      const res = await this.service.get("/books");
      return res
    } catch (error) {
      console.log(error)
    }
  }

  getBooksFromApi = async (pagina, name) => {
    try {

      const page = (pagina*10);
      console.log(name)
      const count = await axios.get(`https://www.etnassoft.com/api/v1/get/?category=${name}&count_items=true`);
      const items = count.data.num_items;
      const res = await axios.get(`https://www.etnassoft.com/api/v1/get/?category=${name}&num_items=${items}&results_range=${page},10`);
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  getCategoriesFromApi = async () => {
    try {
      const res = await axios.get(`https://www.etnassoft.com/api/v1/get/?get_categories=all`);
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  saveNewBook = async (newBook) => {
    console.log("The new book is: ", newBook);
    try {
      const res = await this.service.post("/books/create", newBook);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  // DETAIL ROUTE

  getDetailsBook = async (id) => {
    try {
      const res = await this.service.get("/books/details/"+ id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE ROUTES
  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);

    try {
      const res = await this.service.post("/books/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  updateBook = async ( id, updatedBook) => {
    console.log("The book updated is: ", updatedBook);

    try {
      const res = await this.service.create("/books/upload/" + id, {updatedBook});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  deleteBook = async (id) => {
    try {
      const res = await this.service.post(`/books/delete/${id}`);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  searchBook = async (query) => {
    try {
      const items =  20;   //num.data.num_items;
      console.log("Items:", items);
      const res = await axios.get(`https://www.etnassoft.com/api/v1/get/?book_title=${query}&?any_tags=[${query}]&num_items=${items}`);
      // console.log(res.data, "RES SERACHBOOK");
      return res.data; 
    }catch (error) {
      console.log(error);
    }
  };

  getCategories = async () =>{
    try{
      const res = await axios.get(`https://www.etnassoft.com/api/v1/?get_categories=all`);
      console.log(res, "Respuesta getCategories");
      return res.data;
    }catch (error){
      console.log(error)
    }
  }

}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;