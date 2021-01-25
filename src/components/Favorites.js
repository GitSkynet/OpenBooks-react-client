import React, { Component } from 'react';
import { withAuth } from "../lib/AuthProvider";

class Favorites extends Component {
    state = {
        user: this.props.user,
        movies: [],
        favorites: this.props.favorites,
    }

    setFavs = () => {
        this.setState({ favorites: this.props.favorites});
        console.log(this.state.favorites, "SETEADO?¿?")
    }

    componentDidMount = () => {
        this.setFavs();
    }

    render() {
        return (
            <div className="row__inner">
                {this.props.favorites?.map((eachFav) => {
                    console.log(eachFav._id, "ID EACHFAV")
                    return (
                        <div className="tile" key={eachFav._id}>
                            <div className="tile__media">
                                <img className="tile__img" src={eachFav.cover} alt="" />
                            </div>
                            <div className="tile__title">
                                <a href={`/details/${eachFav._id}`}>Details</a>
                                <button onClick={() => this.deleteFavourite(eachFav._id)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default withAuth(Favorites);