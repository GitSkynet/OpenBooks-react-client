import React, { Component } from 'react';

class NewsHome2 extends Component {
    render() { 
        return (
            <div style={{height: '100vh', backgroundImage: `url(https://images-na.ssl-images-amazon.com/images/I/71ol1jY8qQL._AC_SL1024_.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}} className="position-relative w-100">
                <div className="position-absolute text-white d-flex flex-column align-items-center justify-content-center" style={{top: '0', right: '0', bottom: '0', left: '0', backgroundColor: 'rgba(0,0,0,.7)'}}>
                    <div className="container-home">
                        <div className="col-md-6">
                            {/* <!-- on small screens remove display-4 --> */}
                            <h1 className="mb-4 mt-2 display-4 font-weight-bold">Welcome to <span style={{color: '#9B5DE5'}}>OpenBooks </span></h1>
                            <p style={{color: '#bbb'}}>Find resources on programming, science, chess, music, machine learning ... all thanks to the OpenLibra API!</p>
                            <div className="mt-5" style={{display: 'flex', justifyContent: 'center'}}>
                                {/* <!-- hover background-color: white; color: black; --> */}
                                <a href="/private" className="btn px-5 py-3 text-white mt-3 mt-sm-0" style={{borderRadius: '30px', backgroundColor: '#9B5DE5'}}>Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsHome2;