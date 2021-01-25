import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Private extends Component {
  render() {
    return (
        <div className="container-profile">
          <div className="div-alert">
            <h1>Hey, user!!!</h1>
            <p>I am currently working on adding various features to the profile page.
              Edit your username, photo, password ... And other features, such as your 
              favorite books, your personal lists of books, statistics about what you 
              share with the community and other users, how many books you have read, 
              what do you recommend to other users ... Tons of new features that will 
              gradually appear on the web. Check back in a few days to see the progress!
              Thanks for waiting!</p>
          </div>
          <img src="https://res.cloudinary.com/ytyt/image/upload/v1610639699/a53560c8088900e266880f779dacced7_sc6jqg.gif" alt="working page"/>
          {/* <div className="header-profile">
            <h1 style={{paddingTop: '10%', fontWeight: '800', letterSpacing: '4px'}}>Welcome {this.props.user.username}</h1>
          </div>
          <div className="profile-favorites">
            <div className="target-profile">
              <div>
                <h3>Profile</h3>
              </div>
              <div>
                <h5>{this.props.user.username}</h5>
                <h5>Mail</h5>
                <h5>Image</h5>
              </div>
            </div>
              <h3>Personal Lists</h3>
            <div className="target-profile">
            </div>
              <h3>Favorites Books</h3>
            <div className="target-profile">
            </div>
              <h3>Favorites Lists</h3>
            <div className="target-profile">
            </div>
          </div> */}
        </div>
    );
  }
}

export default withAuth(Private);
