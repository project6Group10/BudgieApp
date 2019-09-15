import React, { Component } from 'react';
import './sass/App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

import Budgie from './components/Budgie';
import CalcDailyBudget from './components/CalcDailyBudget';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route exact path="/Budgie" component={Budgie} />
            <CalcDailyBudget />
            <div className="Container">
                <InputPayday />
                <DisplayExpenses />
            </div>
            <Footer/>
        </div>
      </Router>
     );
  }
}
 
export default App;


