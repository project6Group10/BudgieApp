import React, { Component } from 'react';
import './sass/App.scss';

// FIXME: Need to get rid of Budget.scss and split them into partials
import './sass/Budget.scss';
import DisplayExpenses from './components/DisplayExpenses';
import InputPayday from './components/InputPayday';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import CalcDailyBudget from './components/CalcDailyBudget';

class App extends Component {
  state = {  }
  render() { 
    return ( 
        <div className="App">
            <Header/>
            <About/>
            <CalcDailyBudget />
            <div className="Container">
                <InputPayday />
                <DisplayExpenses />
            </div>
            <Footer/>
        </div>
     );
  }
}
 
export default App;


