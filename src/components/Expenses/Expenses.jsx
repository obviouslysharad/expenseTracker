import React from 'react'
import './Expenses.css'

const Expenses = (props) => {
    const expense = props.expenses.map(item => (
        <div className = "itemList">
            <div className = "title">
                {item.title}
            </div>
            <div className = "amount">
                {item.amount}
            </div>
            <div className = "date">
                {item.date.toLocaleDateString('en-US', )}
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
