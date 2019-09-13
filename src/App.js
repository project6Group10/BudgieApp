import React, { Component } from 'react';
import Budget from './BudgetCalc';
import './sass/App.scss';
import CalcDailyBudget from './components/CalcDailyBudget';
import DisplayExpenses from './components/DisplayExpenses';
import InputPayday from './components/InputPayday';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import CalcExpenseTotal from './components/CalcExpenseTotal';
import Test from './components/Test';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
          <Header/>
          <About/>
       <CalcExpenseTotal/>
           <div className="Container">
              <InputPayday />
              <DisplayExpenses />
              <Test/>
           </div>
           <Footer/>
      </div>
     );
  }
}
 
export default App;


