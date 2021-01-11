import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
//import {Button} from 'react-bootstrap';

class Private extends Component {
  render() {
    return (
        <div className="container-profile">
          <div className="header-profile">
            <h1 style={{paddingTop: '10%', fontWeight: '800', letterSpacing: '4px'}}>Welcome {this.props.user.username}</h1>
          </div>
          <div className="profile-favorites">
            <div className="target-profile">
              <h3>Profile</h3>
            </div>
            <div className="target-profile">
              <h3>Favorites Books</h3>
            </div>
            <div className="target-profile">
              <h3>Personal Lists</h3>
            </div>
          </div>
        </div>
    );
  }
}

export default withAuth(Private);
