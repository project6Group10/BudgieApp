import React, { Component } from 'react';
import '../sass/App.scss';
import { Link } from 'react-router-dom';
import DisplayExpenses from './DisplayExpenses';
import InputPayday from './InputPayday';
// import Footer from './Footer';
import CalcExpenseTotal from './CalcExpenseTotal';
// import CalcPayday from './components/CalcPayday';

class Budgie extends Component {
    state = {  }
    render() { 
      return ( 
          <main>
              {/* <Link to="/">Home</Link>
              <Link to="/About">About</Link> */}
              <CalcExpenseTotal />
              <div className="Container">
                  <InputPayday />
                  <DisplayExpenses />
              </div>
          </main>
       );
    }
  }
   
  export default Budgie;
  