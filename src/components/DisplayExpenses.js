import React from 'react';
import InputExpenses from './InputExpenses';
import DisplayExpenseList from './DisplayExpenseList';

const DisplayExpenses = () => {
    return (
        <div>
            <div className="Expenses">
                <InputExpenses />
                <DisplayExpenseList />
            </div>
        </div> 
    )
}

export default DisplayExpenses;