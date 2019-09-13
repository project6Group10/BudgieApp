import React, { Component } from 'react';
import Budget from './BudgetCalc';
import './sass/App.scss';
import CalcDailyBudget from './components/CalcDailyBudget';
import DisplayExpenses from './components/DisplayExpenses';
import InputPayday from './components/InputPayday';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import CalcPayday from './components/CalcPayday';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
          <Header />
          <About />
           <CalcDailyBudget />
           <div className="Container">
              <InputPayday />
              <DisplayExpenses />
           </div>
           <Footer />
           <CalcPayday />
      </div>
     );
  }
}
 
export default App;


