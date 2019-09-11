import React, { Component } from 'react';
import Budget from './BudgetCalc';
import './App.scss';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
           <Budget/>
      </div>
     );
  }
}
 
export default App;


