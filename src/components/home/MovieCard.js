import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MovieCard extends Component {
    render() {
        const { movie } = this.props;
        return (
            <>
            <div className="col-md-3 mb-5" >
                <img className="card-img-top " src={movie.Poster} alt="Card image cap" />
                <div className="card-body ">
                    <h5 className="card-title">
                        {movie.Title} -{movie.Year}
                    </h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
                        Movie Deailts
                        <i className="fas fa-chevron-right"/>
                    </Link>
                </div>
            </div>
            </>
        )
    }
}

export default MovieCard
