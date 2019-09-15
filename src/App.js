import React, { Component } from 'react';
import './sass/App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Budgie from './components/Budgie';
import Footer from './components/Footer';

class App extends Component {
    render() { 
        return ( 
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Budgie" component={Budgie} />
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;


