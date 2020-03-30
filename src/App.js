import React, { Component } from 'react';
import NavigationBar from './components/common/NavigationBar';
import Landing from './components/Landing';
import About from './components/About';
import Photography from './components/Photography';
import Footer from './components/Footer';

import { Helmet } from 'react-helmet'

const TITLE = 'Harisai Sundhar'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Landing />
        <Photography />
        <About/>
        <Footer />
      </div>
    );
  }
}

export default App;
