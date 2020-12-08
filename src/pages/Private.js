import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Private extends Component {
  render() {
    return (
      <>
          <div className="profile-section1">
              <div className="profile-content">
              <h1>Welcome {this.props.user.username}</h1>
                <img src="https://res.cloudinary.com/ytyt/image/upload/v1607428195/books/undraw_profile_details_f8b7_wlebzl.svg" alt="profile"/>
              </div>
              {/* seccion con imagen redonda, fondo y nombre */}
          </div>
          <div>
            {/* detalles del perfil */}
          </div>
      </>
    );
  }
}

export default withAuth(Private);
