import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import Books from "./components/Books";
// import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import CreateBook from './components/CreateBook';
import UpdatedBook from './components/UpdateBook';
import DetailsBook from './components/DetailsBook';
import Home from "./pages/Home";
import MyBooks from './components/MyBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import GoogleBooks from "./components/GoogleBooks";
import OpenLibra from "./components/OpenLibra";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <>
          <Navbar2 />
          <Switch>
            <Route exact path='/' component={Home} />
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <Route exact path='/books/openlibra/:name' component={Books} />
            <Route exact path='/books' component={MyBooks} />
            <Route exact path='/books/google-books' component={GoogleBooks} />
            <Route exact path='/books/openlibra' component={OpenLibra} />
            <Route exact path='/books/upload/:id' component={UpdatedBook} />
            <Route exact path='/books/create' component={CreateBook} />
            <PrivateRoute exact path="/details/:id" component={DetailsBook} />
            <PrivateRoute exact path='/private' component={Private} />
          </Switch>

          <Footer />
        </>
      </AuthProvider>
    );
  }
}

export default App;
