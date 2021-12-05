import React from 'react'
import {useState} from 'react';
import './Expenses.css'

const Expenses = (props) => {

    const [newExpenses, setNewExpenses] = useState([]);
    const [searchTerm, setSearchTerm] = useState(['']);

    function handleDelete(e) {
        props.expenses.splice(e, 1);
        props.setExpenses([...props.expenses]);
    }

    function handleSearch(e) {
        setSearchTerm(e.target.value);
        if(searchTerm !== "") setNewExpenses(props.expenses.filter(item => item.title.includes(searchTerm)))
    }

    const expense = props.expenses.filter((item) => {
        if(searchTerm == ""){
            return item}
        else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return item;
        }
    }).map((item, index) => (
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
    // Add dragable feature
    

    return (
      <div>
        <input placeholder = "Search here" className="inpt" onChange={handleSearch} />
        <div className="expenses">{expense}</div>
      </div>
    );
}

export default Expenses
