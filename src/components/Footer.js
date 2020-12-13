import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>OPEN<span>BOOKS</span></h3>
                    <p className="footer-company-name">Carlos Curtido &reg; 2020</p>
                </div>
    
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Barcelona, </span>Spain</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>667000000</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">OpenBooks@gmail.com</a></p>
                    </div>
                </div>
                
                <div className="footer-right">
                    <div className="footer-icons">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                        <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                    </div>
                </div>
            </footer>
            </>
        );
    }
}

export default Footer;