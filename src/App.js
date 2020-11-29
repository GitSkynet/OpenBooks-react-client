import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import Books from "./components/Books";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import CreateBook from './components/CreateBook';
import UpdatedBook from './components/UpdateBook';
import DetailsBook from './components/DetailsBook';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <>
          <Navbar />

          <Switch>
            <AnonRoute path='/signup' component={Signup} />
            <AnonRoute path='/login' component={Login} />
            <Route exact path='/books' component={Books} />
            <Route exact path='/books/upload/:id' component={UpdatedBook} />
            <Route exact path='/books/create' component={CreateBook} />
            <PrivateRoute exact path="/details/:id" component={DetailsBook} />
            <PrivateRoute exact path='/private' component={Private} />
          </Switch>
        </>
      </AuthProvider>
    );
  }
}

export default App;
