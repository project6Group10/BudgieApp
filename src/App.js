import React, { Component } from 'react';
import Budget from './BudgetCalc';
import './sass/App.scss';
import CalcDailyBudget from './components/CalcDailyBudget';
import DisplayExpenses from './components/DisplayExpenses';
import DisplayPayday from './components/DisplayPayday';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import CalcExpenseTotal from './components/CalcExpenseTotal';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
          <Header/>
          <About/>
       <CalcExpenseTotal/>
           <div className="Container">
              <DisplayPayday />
              <DisplayExpenses />
           </div>
           <Footer/>
      </div>
     );
  }
}
 
export default App;


