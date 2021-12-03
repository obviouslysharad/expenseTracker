import React from 'react'
import {useState} from 'react';
import './Expenses.css'

const Expenses = (props) => {

    const [newExpenses, setNewExpenses] = useState([]);

    function handleDelete(e) {
        props.expenses.splice(e, 1);
        props.setExpenses([...props.expenses]);
    }

    function handleSearch(e) {
        const searchTerm = e.target.value;
        if(searchTerm !== "") props.setExpenses(props.expenses.filter(item => item.title.includes(searchTerm)))
    }

    const expense = props.expenses.map((item, index) => (
        <div className = "itemList" onClick = {() => handleDelete(index)}>
            <div className = "title">
                {item.title}
            </div>
            <div className = "amount">
                {item.amount}
            </div>
            <div className = "date">
                {item.date}
            </div>
        </div>
    ));

    return (
      <div>
        <input placeholder = "Search here" className="inpt" onChange={handleSearch} />
        <div className="expenses">{newExpenses.length !== 0?newExpenses:expense}</div>
      </div>
    );
}

export default Expenses
