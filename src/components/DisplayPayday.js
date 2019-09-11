import React from 'react';

const DisplayPayday = props => {
    return (
        <div>
            <div className="Date"> 
                <h4 className="Expenses__title">salary</h4>
                <input type="text" className="Date__description" placeholder="salary"/>
                <input className="date__input" type="date" name="salaryDate" id="salary"></input>
                <button className="Expenses__btn"><i className="far fa-check-circle"></i></button> 
            </div>
        </div>
    )
}

export default DisplayPayday;
