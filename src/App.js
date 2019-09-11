import React, { Component } from 'react';
import Budget from './BudgetCalc';
import './App.scss';
import CalcDailyBudget from './components/CalcDailyBudget';
import DisplayExpenses from './components/DisplayExpenses';
import DisplayPayday from './components/DisplayPayday';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
           <CalcDailyBudget />
           <div className="Container">
              <DisplayPayday />
              <DisplayExpenses />
           </div>
      </div>
     );
  }
}
 
export default App;


