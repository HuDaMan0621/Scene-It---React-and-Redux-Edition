import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../layout/Spinner'

export class Landing extends Component {
    render() {
        const { loading } = this.props.loading //es6 destructuring 
        return (
            <div className="container">
                <SearchForm />
                {loading ? <Spinner /> :  <MoviesContainer />}
            </div>
        )
    }
}

{/*  */}
const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing);