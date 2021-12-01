import React from 'react'
import './ExpenseForm.css'
import {useState} from 'react'

const ExpenseForm = (props) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [newExpense, setNewExpense] = useState({})


    const handleSubmit = (e) =>{
        e.preventDefault();
        setNewExpense();
        if(e.target[0].value && e.target[1].value && e.target[2].value){
            props.setExpenses(previousExpense => ([...previousExpense, {title : e.target[0].value, date: e.target[2].value , amount: e.target[1].value}]));

        }
        setDesc("");
        setAmount("");
        setDate("");
    }

    const handleDesc = (e) => setDesc(e.target.value);
    const handleAmount = (e) => setAmount(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="expenseForm">
                    <label className="label">Description</label>
                    <input type="text" value = {desc} onChange={handleDesc}/>
                </div>
                <div className="expenseForm">
                    <label className="label" >Amount</label>
                    <input type="number" value = {amount} onChange = {handleAmount}/>
                </div>
                <div className="expenseForm">
                    <label className="label">Date</label>
                    <input type="date" onChange = {handleDate}/>
                </div>
                <button type = "submit" value = {date} className="btn">Submit</button>
            </form>
            
        </div>
    )
}

export default ExpenseForm
