import './App.css';
import Expenses from './components/Expenses/Expenses'
import ExpenseForm from './components/NewExpense/ExpenseForm'
import {useState} from 'react';

function App() {

  const expenss = [
    { id: 1,
      title: 'Facewash',
      date: '14/10/2020',
      amount: 150
    },
    { id: 2,
      title: 'Soap',
      date: '14/10/2020',
      amount: 120
    },
    { id: 3,
      title: 'Dishwash',
      date: '14/10/2020',
      amount: 20
    },
    { id: 4,
      title: 'iPhone',
      date: '14/10/2020',
      amount: 50000
    },
  ]

  const [expenses, setExpenses] = useState(expenss)

  console.log(expenses);
  
  function formSubmit(e){
    console.log(e);
  }

  return (
    <div className="App">
      <div className="form-card">
        <ExpenseForm setExpenses = {setExpenses} onFormSubmit = {formSubmit}/>
      </div>
      {expenses.length == 0 ? (<div className = "notAvailable"> Not available</div>): (<div className="wrapper-card">
        <Expenses expenses = {expenses} setExpenses = {setExpenses} />
      </div>)}
    </div>
  );
}

export default App;
