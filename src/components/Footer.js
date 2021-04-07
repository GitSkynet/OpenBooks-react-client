import React, { Component } from "react";
import service from "../api/service";

class Footer extends Component {
  state = {
    name: "",
    mail: "",
    message: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await service.sendMail(this.state);
      this.setState({
        name: "",
        mail: "",
        message: "",
      });
    } catch (error) {
      console.log("Error while send mail: ", error);
    }
  };

  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            OpenBooks<span>V2</span>
          </h3>

          <p className="footer-links">
            <a href="/">Home</a>·<a href="/">Blog</a>·<a href="/">Pricing</a>·
            <a href="/">About</a>·<a href="/faq">Faq</a>·<a href="/contact">Contact</a>
          </p>

          <p className="footer-company-name">Carlos Curtido &copy; 2021</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Skynet Enterprise</span> Cyberdyne Systems
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+1 555 123456</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">curtidodev@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About us</span>
            OpenBooks V2 is the second version of OpenBooks, made with react
            &amp; Stack MERN 
            <a href="/">Learn More</a>
          </p>

          <div className="footer-icons">
            <a href="/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
