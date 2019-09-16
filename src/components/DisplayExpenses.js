import React from 'react';
import InputExpenses from './InputExpenses';
import DisplayExpenseList from './DisplayExpenseList';

const DisplayExpenses = () => {
    return (
        <section className="displayWidth">
            <div className="Expenses">
                <InputExpenses />
                <DisplayExpenseList />
            </div>
        </section> 
    )
}

export default DisplayExpenses;