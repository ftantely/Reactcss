import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import News from './News'
import Footer from './Footer'

class App extends Component {
  render() {
    return (

        <Router>
        <div>
            <Navbar/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
            <Footer/>
        </div>
        </Router>

    );
  }
}

export default App;


