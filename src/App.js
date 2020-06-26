import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom'; //we have 2 types of routers, hash or browser.
//we will have issues if we are using browser routers deploy to github pages, we will use hashrouter in this case 
import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Landing />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  };
}

export default App;
