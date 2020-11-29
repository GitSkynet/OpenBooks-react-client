import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true
    });
  }

  getBooks = async () => {
    try {
      const res = await this.service.get("/books");
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  saveNewBook = async (newBook) => {
    console.log("The new book is: ", newBook);

    try {
      const res = await this.service.post("/books/create", newBook);
      console.log('RES SERVICE CLIENT', res);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE ROUTES

  getDetailsBook = async (id) => {
    try {
      const res = await this.service.get("/books/details/"+ id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);

    try {
      const res = await this.service.post("/books/upload", theFile);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  updateBook = async (updatedBook, id) => {
    console.log("The book updated is: ", updatedBook);

    try {
      const res = await this.service.post("/books/upload/" + id, {updatedBook});
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


  // handleUpload = async (theFile) => {
  //   console.log("file in service: ", theFile);

  //   try {
  //     const res = await this.service.post("/movies/upload", theFile);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // handleUpload2 = async (theFile) => {
  //   console.log("file in service: ", theFile);

  //   try {
  //     const res = await this.service.post("/movies/upload2", theFile);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // saveNewMovie = async (newMovie) => {
  //   console.log("new thing is: ", newMovie);

  //   try {
  //     const res = await this.service.post("/movies/create", newMovie);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // updatedMovie = async (updatedMovie, id) => {
  //   console.log("updated movie is: ", updatedMovie);

  //   try {
  //     const res = await this.service.post("/movies/upload/" + id, {updatedMovie});
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getMostPopular = async (pagina= 0) => {
  //   try {
  //     const res = await this.service.get(`/movies/popular?page=` + pagina);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getAllMovies = async (pagina= 0) => {
  //   try {
  //     const res = await this.service.get(`/movies/allmovies?page=` + pagina );
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // searchMovie = async (query) => {
  //   try {
  //     const res = await this.service.get("/movies/search?find=" + query);
  //     console.log(res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getRandom = async () => {
  //   try {
  //     const res = await this.service.get("/movies/random");
  //     console.log(res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getDetailsMovie = async (id) => {
  //   try {
  //     const res = await this.service.get("/movies/details/"+ id);
  //     console.log(res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // deleteMovie = async (id) => {
  //   try {
  //     const res = await this.service.post("/movies/delete/"+ id);
  //     console.log(res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getProfileUser = async (id) => {
  //   try {
  //     const res = await this.service.get("/auth/private");
  //     console.log(res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getFavId = async (id) => {
  //   try {
  //     const res = await this.service.get(`/movies/private/favorite/${id}`);
  //     console.log(res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // addToFavourite = async (movieId, userId) => {
  //   try {
  //     const res = await this.service.post("/movies/private/favorite", {movieId, userId});
  //     console.log('AÑADIDO A FAVORITO? CONSOLE LOG RES.DATA DE SERVICE CLIENT', res.data);
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getCarrouselMovies = async () => {
  //   try {
  //     const res = await this.service.get("/movies/carrousel");
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // getCarrouselMovies2 = async () => {
  //   try {
  //     const res = await this.service.get("/movies/carrousel2");
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getCarrouselMovies3 = async () => {
  //   try {
  //     const res = await this.service.get("/movies/carrousel3");
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;