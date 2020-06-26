import React, { Component } from 'react'
import { connect } from 'react-redux';

import MovieCard from './MovieCard';

export class MoviesContainer extends Component {
    render() {

        const {movies} = this.props;  //the movie is an array, an array of items, if array length is 0, it's empty, if its not, we have movies in it.
        let content = ''; 
        content = movies.length > 0 ? movies.map((movie, index) => <MovieCard key={index} movie={movie}/>) : null ;     //we check the array here  
        // map is going to map through the length of the array as index, map it out and give each item an index  
        return (
            <div className="row">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies  
    //parent, parent state object, which is state.movies, and inside the parent state. we have movies. 
    //state.movies = "parent state", then the object is "movies"
})

export default connect(mapStateToProps) (MoviesContainer);
