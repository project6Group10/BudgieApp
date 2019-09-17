import React from 'react';
import DisplayPaydayList from './DisplayPaydayList';

const DisplayPayday = (props) => {
    return (
        <div className="displayWidth">
            <div className="Salary"> 
                <h4 className="Expenses__title">salary</h4>
                <div>  
                    <form action="" className="Salary__inputs" id="salaryInputForm" ref={props.salaryInputRef}>
                        <label htmlFor="salaryAmount" className="visuallyHidden">Input Salary Amount:</label>
                        <input 
                            type="number" 
                            onChange={props.salaryInput}
                            className="Salary__description" 
                            name="salaryAmount" 
                            id="salaryAmount" 
                            placeholder="Salary Amount (e.g. 1000)"
                        />

                        <label htmlFor="salaryDate" className="visuallyHidden">Input Salary Date:</label>
                        <input 
                            type="date" 
                            onChange={props.dateInput}
                            className="date__input Salary__date" 
                            name="salaryDate" 
                            id="salaryDate"
                        />

                        <button 
                            onClick={props.buttonClick} 
                            className="Salary__btn"
                            aria-label="Submit payday."
                            aria-hidden="true"
                        >
                            <i class="fas fa-plus-circle"></i>
                        </button> 
                    </form>
                </div>

                <DisplayPaydayList />
            </div>
        </div>
    )
}

export default DisplayPayday;
