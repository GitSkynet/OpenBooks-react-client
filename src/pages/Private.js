import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Private extends Component {
  render() {
    return (
      <>
          <div className="profile-section1">
              <h1>Welcome {this.props.user.username}</h1>
              {/* seccion con imagen redonda, fondo y nombre */}
              <img src="https://www.modico-honduras.com/wp-content/uploads/2018/03/user.png" alt="profile"/>
          </div>
          <div>
            {/* detalles del perfil */}
          </div>
      </>
    );
  }
}

export default withAuth(Private);
