import React from 'react'
import './Expenses.css'

const Expenses = (props) => {

    function handleDelete(e) {
        console.log(e);
        props.setExpenses(props.expenses.slice(0,props.expenses.length - 1))
        
    }

    const expense = props.expenses.map(item => (
        <div className = "itemList" onClick = {handleDelete}>
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
        <div className="expenses">
            {expense}
        </div>
    )
}

export default Expenses
