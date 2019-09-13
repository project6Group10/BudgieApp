import React from 'react';

const DisplayPayday = (props) => {
    return (
        <div>
            <div className="Date"> 
                <h4 className="Expenses__title">salary</h4>
                
                <form action="" id="salaryInputForm">
                    <label htmlFor="salaryAmount" className="visuallyHidden">Input Salary Amount:</label>
                    <span>$</span>
                    <input 
                        type="number" 
                        onChange={props.salaryInput}
                        className="Date__description" 
                        name="salaryAmount" 
                        id="salaryAmount" 
                        placeholder="Salary Amount (e.g. 1000)"
                    />

                    <label htmlFor="salary" className="visuallyHidden">Input Salary Date:</label>
                    <input 
                        type="date" 
                        onChange={props.dateInput}
                        className="date__input" 
                        name="salaryDate" 
                        id="salaryDate"
                    />

                    <button 
                        onClick={props.buttonClick} 
                        className="Expenses__btn"
                        aria-label="Submit payday."
                        aria-hidden="true"
                    >
                        <i className="far fa-check-circle"></i>
                    </button> 
                </form>
            </div>
        </div>
    )
}

export default DisplayPayday;
