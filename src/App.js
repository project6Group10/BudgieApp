import React, { Component } from 'react';
import './sass/App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// FIXME: Need to get rid of Budget.scss and split them into partials
import './sass/Budget.scss';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
// import Test from './components/Test';
import Budgie from './components/Budgie';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="App">
            <Route exact path="/" component={Header} />
            <Route path="/About" component={About} />
            <Route exact path="/Budgie" component={Budgie} />
            <Footer/>
        </div>
      </Router>
     );
  }
}
 
export default App;


