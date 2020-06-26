import React, { Component } from 'react'

import { connect } from 'react-redux';

import { searchMovie, fetchMovies } from '../../redux/actions/searchActions';

export class SearchForm extends Component {
    onChange = e => {
        this.props.searchMovie(e.target.value)//we need to take the inputs, we can get the value by e.target.value 
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text)        //we text from below, we can use it here
    }

    render() {
        const style = {
            position: "relative",
            minHeight: "100%"
        }
        return (
            <div style={style}>
                <div className="jumbotron jumbotron-fluid mt-5 text-center">
                    <div className="container">
                        <h1 className="display-4 mb-3">
                            <i className="fa fa-search" /> Search for a movie ,TV series ..
                    </h1>
                        <form id="searchForm" onSubmit={this.onSubmit}>
                            <input
                                type="text"
                                className="form-control"
                                name="searchText"
                                placeholder="Search Movies, TV Series ..."
                                onChange={this.onChange}
                            />
                            <button type="submit" className="btn btn-primary btn-bg mt-3">
                                Search
                </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie, fetchMovies })(SearchForm); //we pass the connection here

